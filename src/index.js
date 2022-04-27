import './style.css';
import display from './display';
import weather from './weather';


const cityInput = document.getElementById('location');
const searchBtn = document.getElementById('button-addon2');

searchBtn.addEventListener('click', async () => {
    if (cityInput.value === '') return;
    const weatherData = await weather.getData(cityInput.value);
    display.setData(weatherData);
});