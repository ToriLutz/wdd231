const api = "0807d830d90d35b0bfded260898c582e"; 
const city = 'timbuktu';

const days = {
    today: document.querySelector('.today'),
    tomorrow: document.querySelector('.tomorrow'),
    day3: document.querySelector('.day3'),
    day4: document.querySelector('.day4'),
    day5: document.querySelector('.day5'),
};

const getData = async () => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`; 
    try {
        const res = await fetch(urlWeather);
        const data = await res.json();
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        getDataFor7days(lat, lon);
    } catch (error) {
        console.log(error);
    }
};

const getDataFor7days = async (lat, lon) => {
    const urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${api}`;
    try {
        const res = await fetch(urlForecast);
        const data = await res.json();
        updateForecast(data);
    } catch (error) {
        console.log(error);
    }
};

function updateForecast(data) {
    console.log('Forecast data:', data);

    const forecastDays = data.daily;
    if (forecastDays && forecastDays.length >= 5) {
        days.today.textContent = forecastDays[0].temp.day.toFixed(1) + " °F";
        days.tomorrow.textContent = forecastDays[1].temp.day.toFixed(1) + " °F";
        days.day3.textContent = forecastDays[2].temp.day.toFixed(1) + " °F";
        days.day4.textContent = forecastDays[3].temp.day.toFixed(1) + " °F";
        days.day5.textContent = forecastDays[4].temp.day.toFixed(1) + " °F";
    } else {
        console.log('Forecast days data missing or incomplete');
    }
}

getData();