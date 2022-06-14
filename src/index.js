import "./style.css";
import display from "./display";
import weather from "./weather";

const cityInput = document.getElementById("location");

document.getElementById("searchButton").addEventListener("click", async () => {
  if (cityInput.value === "") return;
  const weatherData = await weather.getData(cityInput.value, "imperial");
  display.setData(weatherData);
});

document.getElementById("searchButton").addEventListener("keydown", async () => {
  if (cityInput.value === "") return;
  const weatherData = await weather.getData(cityInput.value, "imperial");
  display.setData(weatherData);
});

document.getElementById("fBtn").addEventListener("click", async () => {
  const weatherData = await weather.getData(
    cityInput.value || "winston-salem",
    "imperial"
  );
  display.setData(weatherData);
});

document.getElementById("cBtn").addEventListener("click", async () => {
  const weatherData = await weather.getData(
    cityInput.value || "winston-salem",
    "metric"
  );
  display.setData(weatherData);
});

document.addEventListener("DOMContentLoaded", async () => {
  const weatherData = await weather.getData("winston-salem", "imperial");
  display.setData(weatherData);
});

