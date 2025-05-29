const API_KEY = 'AMPGFUJ6MD88ZXE7RMXN684FG'
let data

const button = document.getElementById("button");
const formLocation = document.getElementById("formLocation");
const weatherContainer = document.getElementById("weatherDisplayContainer")

document.querySelector('form').addEventListener('submit', async(event) => {
    event.preventDefault();
    weatherContainer.innerHTML= ""
    const location = document.getElementById('formLocation').value
    if (!location) return;

    await getWeatherData(location, API_KEY);
    displayWeather(location);

    formLocation.value= "";
})

async function getWeatherData(location, API_KEY) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
        data = await response.json()
        console.log(data);
    }catch (error) {
        console.log(error)
    }
}

function displayWeather(location) {
    if(data) {
        const locationTitle = document.createElement("h3")
        locationTitle.innerText= `Weather forecast for ${location}:`
        weatherContainer.appendChild(locationTitle);
        
        data.days.forEach(day => {
        const dayContainer = document.createElement("div")
        dayContainer.style.border = "2px solid blue";
        const temp = document.createElement("p");
        const tempmax = document.createElement("p");
        const tempmin = document.createElement("p");
        const precip = document.createElement("p");
            temp.innerHTML= `The average temperature on this day is: ${day.temp}`;
            tempmax.innerHTML= `The maximum temperature on this day is: ${day.tempmax}`;
            tempmin.innerHTML= `The minimum temperature on this day is: ${day.tempmin}`;
            precip.innerHTML= `There is a ${day.precipprob}% chance of ${day.preciptype}`
        weatherContainer.appendChild(dayContainer);
        dayContainer.appendChild(temp);
        dayContainer.appendChild(tempmax);
        dayContainer.appendChild(tempmin);
        dayContainer.appendChild(precip);
        })

    }
}