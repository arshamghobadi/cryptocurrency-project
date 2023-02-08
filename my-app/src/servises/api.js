import axios from "axios";

const BACE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const getCoin = async () => {
    const response = await axios.get(BACE_URL);
    return response.data;
}

export {getCoin};


const BACE_URL_Detail = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=30d%2C%20200d%2C%201y'

export const getCoinDetial = async () => {
    const response = await axios.get(BACE_URL_Detail)
    return response.data
}

