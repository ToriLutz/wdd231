const apiKey = '0807d830d90d35b0bfded260898c582e';
const baseApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const locationName = 'London';

const content = {
    locationName: document.querySelector('.location'),
    temp: document.querySelector('.temp'),
    unit: document.querySelector('.unit'),
    desc: document.querySelector('.desc'),
    max: document.querySelector('.max'),
    min: document.querySelector('.min'),
}

const onclick = document.querySelector('units');
onclick.addEventListener("click", onSearchForClick);


async function getWeather(unitType, locationName) {
    const apiUrl = `${baseApiUrl}?lat=${locationName}&appid=${apiKey}`&units=${unitType};
       return await fetchData.json();
}

async function onSearchForClick(){
    const isImperial = document.getElementById('unitType').checked === false;

    const unitType = isImperial ? 'imperial' : 'metric';
    try{
        const data = getWeather(locationName, unitType);
        console.log(data);
    }
    catch (error){
        console.error('Error on click', error);
    }

}

async function fetchData(apiUrl){
        try{
    const response = await fetch(apiUrl);
    return await response.json();
    } catch(error){
        console.error('Error fetching data.' , error);
        throw error;

    }


}

function displayWeatherData(data, isImperial){
    const{
        weather, main, wind, sys, name
    } = data;



    //setting units
    const tempUnit = isImperial ? 'F' : 'C';
    const windSpeedUnit = isImperial ? 'mph' : 'm/s';


    content.locationName = name; 
    content.temp.textContent = main.temp.toFixed(2); 
    content.unit.textContent = tempUnit;
    content.desc.textContent = weather[0].description;
    content.max.textContent = `${main.temp_max} ${tempUnit}`;
    content.min.textContent = `${main.temp_min} ${tempUnit}`;
    
}
