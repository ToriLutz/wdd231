const apiKey = '0807d830d90d35b0bfded260898c582e';
const geoApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const content = {
    locationName: document.querySelector('.location'),
    temp: document.querySelector('.temp'),
    unit: document.querySelector('.unit'),
    desc: document.querySelector('.desc'),
    max: document.querySelector('.max'),
    min: document.querySelector('.min'),
};

async function fetchWeather() {
  const city = 'Timbuktu';
  const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
  const geoData = await geoResponse.json();
  if (!geoData.length) {
    console.error('Location not found');
    return;
  }
  const { lat, lon } = geoData[0];

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
  const weatherData = await weatherResponse.json();

  updateWeather(weatherData);
}

function updateWeather(data) {
  document.querySelector('.temp').textContent = data.main.temp.toFixed(1);
  document.querySelector('.desc').textContent = data.weather[0].description;
  document.querySelector('.max').textContent = data.main.temp_max.toFixed(1);
  document.querySelector('.min').textContent = data.main.temp_min.toFixed(1);
  document.querySelector('img');

  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const weatherImg = document.querySelector('.weather');
  weatherImg.src = iconUrl;
  weatherImg.alt = data.weather[0].description;
}



fetchWeather();