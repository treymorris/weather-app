export default class UI {

    static loadInitLocation() {
        
        const today = document.getElementById("today");
        const feelsLike = document.getElementById("feels-like");
        const humidity = document.getElementById("humidity");
        const temp = document.getElementById("temp");
        let currentLoc = document.getElementById("current");
        let icon = document.getElementById("icon");

        currentLoc.textContent = "Winston-Salem";

        fetch('http://api.openweathermap.org/data/2.5/weather?q=Winston-Salem&units=imperial&APPID=ae3fc543a832cd1f3a7693a65cdb8c34', {mode: 'cors'})
            .then(function(response) {
                return (response.json());
            })
            .then(function(response) {
                console.log(response);
                
                today.textContent = response.weather[0].description;
                feelsLike.textContent = Math.round(response.main.feels_like);
                humidity.textContent = response.main.humidity;
                temp.textContent = Math.round(response.main.temp);
                icon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
                
            });
    }

    static changeLocation() {
        let item = document.getElementById('location').value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&units=imperial&APPID=ae3fc543a832cd1f3a7693a65cdb8c34`, {mode: 'cors'})
        .then(function(response) {
            return (response.json());
        })
        .then(function(response) {
            currentLoc.textContent = document.getElementById('location').value;
            today.textContent = response.weather[0].description;
            feelsLike.textContent = Math.round(response.main.feels_like);
            humidity.textContent = response.main.humidity;
            temp.textContent = Math.round(response.main.temp);
            icon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
        })
        .catch(function(err) {
            item = 'Winston-Salem';
        });
    }

    static selectFarenheit() {
        let item = document.getElementById('location').value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&units=imperial&APPID=ae3fc543a832cd1f3a7693a65cdb8c34`, {mode: 'cors'})
        .then(function(response) {
            return (response.json());
        })
        .then(function(response) {
            currentLoc.textContent = document.getElementById('location').value;
            today.textContent = response.weather[0].description;
            feelsLike.textContent = Math.round(response.main.feels_like);
            humidity.textContent = response.main.humidity;
            temp.textContent = Math.round(response.main.temp);
            icon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
        })
        .catch(function(err) {
            item = 'Winston-Salem';
        });
    }

    static selectCelsius() {
        let item = document.getElementById('location').value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&APPID=ae3fc543a832cd1f3a7693a65cdb8c34`, {mode: 'cors'})
        .then(function(response) {
            return (response.json());
        })
        .then(function(response) {
            currentLoc.textContent = document.getElementById('location').value;
            today.textContent = response.weather[0].description;
            feelsLike.textContent = Math.round(response.main.feels_like);
            humidity.textContent = response.main.humidity;
            temp.textContent = Math.round(response.main.temp);
            icon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
        })
        .catch(function(err) {
            item = 'Winston-Salem';
        });
    }

    static initButtons() {
        const submit = document.getElementById('button-addon2').addEventListener('click', UI.changeLocation)
        const fheit = document.getElementById('fheit').addEventListener('click', UI.selectFarenheit)
        const celsius = document.getElementById('celsius').addEventListener('click', UI.selectCelsius)
    }



}