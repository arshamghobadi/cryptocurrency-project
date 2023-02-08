import React from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Coin.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {
    
    return (
        <Container>
            
            <Col>
            

                <Row className='row d-flex p-2 w-100'>
                    <Link className='text-decoration-none text-dark' to={`/coins/${name}`}>
                    <Card className='cards shadow'>
                        <div>
                            <Card.Img className='ms-3' src={image} alt={name} style={{width: "20px"}}/>
                        </div>
                        <div>
                            {name}
                        </div>
                        <div>
                            {symbol} 
                        </div>    
                        <div>
                            {price} £
                        </div>
                        <div className='marketcap'>
                            {marketCap} £
                        </div>
                        <div className='me-3'>
                        <Card.Text className={priceChange > 0 ? "text-success" : "text-danger"}>
                            {priceChange.toFixed(2)} %
                        </Card.Text>
                        </div>
                        
                    </Card>
                    </Link>
                </Row>
            </Col>
         
        </Container>
        
    );
};

export default Coin;