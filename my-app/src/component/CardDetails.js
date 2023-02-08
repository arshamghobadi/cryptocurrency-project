import React from 'react';
import { Chart as chartJs,CategoryScale,PointElement,LinearScale,LineElement,Title,Tooltip,Legend  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState,useMemo } from 'react';
import {Container, Card} from 'react-bootstrap'
import {getCoinDetial} from '../servises/api'
import { useParams} from 'react-router-dom';
import Loader from './Loader'




chartJs.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend
)


const CardDetails = () => {
    const [CoinsDetials, setCoinDetials] = useState({});
    const [CardDetail, setCardDetail] = useState([])
    const params = useParams();
    const name = params.name;
    const fetchAPII = useMemo( async () => {
        const data1 = await getCoinDetial();
        const data2 = data1.find(items => items.name === name)
        const data3 = data2.sparkline_in_7d
        const data4 = data3.price 
        setCoinDetials(data4)
        setCardDetail(data2)
    }, [name]);
    const {current_price,low_24h,high_24h,market_cap_rank,market_cap,price_change_percentage_24h} = CardDetail
 
    const [chartData, setChartData] = useState({
        datasets:[],
    });
    const [chartOptions, setChartOptions] = useState({});
    
    useEffect(() => { 
        
    
        setChartData({
            labels: ['7day before', '6day before', '5day before', '4day before', '3day before', 'yesterday','now'],
            datasets: [{
                label: name,
                data: CoinsDetials,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    
                ]}]
        })
        
        setChartOptions({
            Responsesive: true,
            Plugins:{
                legend: {
                    position: "top" ,
                },
                title: {
                    display: true,
                    text: "gaeeede shodam",
                }
            }
        })
        
        }, [fetchAPII,CoinsDetials,name]);
       
    
    return (
        <>
            
            {CoinsDetials.length ?
            <div>
            <Container>
                <h2 className='ms-4 pt-3'>{name}</h2>
                <Line className='linechart' options={chartOptions} data={chartData} />
              <Container className='pt-5'>  
                <Card >
                   <Card.Header>
                       <h2>{name} Price statistics</h2> 
                    </Card.Header>
                     <Card.Text className='fw-bold p-2 border-bottom'>
                        {name} Price Today
                     </Card.Text>
                     <div className='fw-bold d-flex justify-content-between border-bottom pb-3'>
                        <span className=' ms-2 '>
                            {name} Price
                        </span>
                        <span className='me-2'>
                            {current_price} €
                        </span>
                     </div>
                     <div className='fw-bold d-flex justify-content-between border-bottom align-items-center py-2'>
                        <span className='ms-2'>
                            24h Low / 24h High
                        </span>
                        <span className='me-2'>
                            {low_24h}£ / {high_24h} €
                        </span>
                     </div> 
                      <div className='fw-bold d-flex justify-content-between border-bottom align-items-center py-2'>
                        <span className='ms-2'>
                            Market Cap Rank
                        </span>
                        <span className='me-2'>
                            {market_cap_rank}#
                        </span>
                        </div>
                        <div className='fw-bold d-flex justify-content-between border-bottom align-items-center py-2'>
                            <span className='ms-2'>
                                Market Cap
                            </span>
                            <span className='me-2'>
                                {market_cap}
                            </span>
                        </div>
                        <div className='fw-bold d-flex justify-content-between border-bottom align-items-center py-2'>
                            <span className='ms-2'>
                            price_change_percentage_24h
                            </span>
                            <span className={price_change_percentage_24h > 0 ? "text-success me-2" : "text-danger me-2"}>
                                {price_change_percentage_24h.toFixed(2)}%
                            </span>
                        </div>



                </Card>
                </Container>
            </Container>

            </div> : <div>
                <Loader />
            </div>

            }
            </>
            
    );
};

export default CardDetails;