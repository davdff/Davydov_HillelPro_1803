const requestBtn = document.querySelector('.send_request')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const pressure = document.querySelector('.pressure')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const speed = document.querySelector('.speed')
const deg = document.querySelector('.deg')
const showWeather = document.querySelector('.showWeather')
const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19'


requestBtn.addEventListener('click', () => {
    sendRequest(requestURL);
});

function sendRequest(url) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.responseType = 'json';

    xhr.onload = function () {
        showInfo(xhr.response);
    };

    xhr.onerror = function () {
        console.log(xhr.response);
    };

    xhr.send();
}

function showInfo(response) {
    showWeather.innerHTML = `
    <div class="city">Місто: ${response.name}</div>
      <div class="temp">Температура: ${response.main.temp}</div>
      <div class="pressure">Тиск: ${response.main.pressure}</div>
      <div class="description">Опис погоди: ${response.weather[0].description}</div>
      <div class="humidity">Вологість: ${response.main.humidity}</div>
      <div class="speed">Швидкусть вітру: ${response.wind.speed}</div>
      <div class="deg">Напрям у градусах: ${response.wind.deg}</div>
      <img
        src="http://openweathermap.org/img/w/${response.weather[0].icon}.png"
        alt="weather_icon"
        class="icon"
      />
    `;
}