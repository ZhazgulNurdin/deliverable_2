console.log("mango")
document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather() {
    const apiKey = '9ad00dbcadeca5527e5d3c52c92a7127';
    const city = 'Chicago'; 

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('An error occurred while fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById('weather-info');
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); 
    const description = data.weather[0].description;

    const weatherHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfoContainer.innerHTML = weatherHTML;
}