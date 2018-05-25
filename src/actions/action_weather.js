import axios from 'axios';
const API_KEY = '573ceafe8408ece5b21e181ff46adcf3';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},us`
    const request = axios.get(URL);
    // console.log('Request :', request);
    return {type: FETCH_WEATHER, payload: request};
}