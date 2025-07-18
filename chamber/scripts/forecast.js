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
    const urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
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

    const days = data.daily;
    if (days && days.length >= 5) {
        content.today.textContent = days[0].temp.day.toFixed(1) + " °F";
        content.tomorrow.textContent = days[1].temp.day.toFixed(1) + " °F";
        content.day3.textContent = days[2].temp.day.toFixed(1) + " °F";
        content.day4.textContent = days[3].temp.day.toFixed(1) + " °F";
        content.day5.textContent = days[4].temp.day.toFixed(1) + " °F";
    } else {
        console.log('Forecast days data missing or incomplete');
    }
}
getData();