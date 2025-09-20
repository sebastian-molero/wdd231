const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=3ad7f370495c124e15c296285361ea3d&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const description = data.weather[0].description
    weatherIcon.setAttribute('src', iconSrc)
    weatherIcon.setAttribute('alt', description)
    captionDesc.textContent = description
}
apiFetch();

