import "./style.css";
import display from "./display";
import weather from "./weather";

const cityInput = document.getElementById("location");

const searchBtn = document
    .getElementById("button-addon2")
    .addEventListener("click", async () => {
  if (cityInput.value === "") return;
  const weatherData = await weather.getData(cityInput.value, "imperial");
  display.setData(weatherData);
});


const fBtn = document
  .getElementById("fBtn")
  .addEventListener("click", async () => {
    const weatherData = await weather.getData(cityInput.value, "imperial");
    display.setData(weatherData);
  });

const cBtn = document
  .getElementById("cBtn")
  .addEventListener("click", async () => {
    const weatherData = await weather.getData(cityInput.value, "metric");
    display.setData(weatherData);
  });


document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await weather.getData('winston-salem', "imperial");
    display.setData(weatherData);
});