// NAVIGATION

const hamBtn = document.getElementById('ham-Btn');
const navBar = document.getElementById('nav-bar');

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('show');
    navBar.classList.toggle('show');
})

const membersJson = "data/members.json";

const membersContainer = document.getElementById('members');

const getMembers = async (membersJson) => {
    const response = await fetch(membersJson);
    const data = await response.json();
    displayRandomMembers(data.members);
}



const displayRandomMembers = members => {
    
    const filteredMembers = members.filter(member => member.membership === 3 || member.membership === 2);

    const randomMembers = [];

    while (randomMembers.length < 3) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        const randomMember = filteredMembers[randomIndex];

        if (!randomMembers.includes(randomMember)) {
            randomMembers.push(randomMember);
        }
    }

    randomMembers.forEach(member => {
        const section = document.createElement('section');
        section.classList.add(member.membership === 3 ? "gold" : "silver");
        
        const h3 = document.createElement('h3');
        h3.textContent = `${member.name}`;

        const img = document.createElement('img');
        img.setAttribute('src', member.image.source);
        img.setAttribute('width', member.image.width)
        img.setAttribute('height', member.image.height);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', '');

        const p1 = document.createElement('p');
        p1.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
        
        const p2 = document.createElement('p');
        p2.innerHTML = `<strong>Address:</strong> ${member.address}`;

        const p3 = document.createElement('p');
        p3.innerHTML = `<strong>Website:</strong><a href="${member.website}" target="_blank">${member.name}</a>`;
        
        const p4 = document.createElement('p');
        p4.innerHTML = `<strong>Membership level:</strong> ${member.membership === 3? "Golden" : "Silver"}`;  
        section.appendChild(h3);
        section.appendChild(img);
        section.appendChild(p1)
        section.appendChild(p2)
        section.appendChild(p3)
        section.appendChild(p4)

        membersContainer.appendChild(section);
    })
    
}

getMembers(membersJson)



const key = '3ad7f370495c124e15c296285361ea3d';
const lat = 5.636243162550896;
const lon = -73.52774528651513;
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

const icon = document.createElement('img');
icon.setAttribute('id', 'weather-icon');

const dataList = document.createElement('ul');
dataList.setAttribute('id','weather-data');

const weatherInfo = document.getElementById('current__weather');
const forecastContainer = document.getElementById('forecast');

async function apiFetch() {
    try {
        const response1 = await fetch(urlWeather);
        const response2 = await fetch(urlForecast);
        
        if (response1.ok && response2.ok) {
            const dataWeather = await response1.json();
            const dataForecast = await response2.json();
            console.log(dataWeather);
            console.log(dataForecast);
            
            weatherInfo.innerHTML = '';
            displayResultsWeather(dataWeather);
            
            forecastContainer.innerHTML = '';
            displayResultsForecast(dataForecast);
        } else {
            throw new Error('Error al obtener los datos de las APIs');
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

function displayResultsWeather(data) {
    const temp = `${data.main.temp}&deg;C`;
    const description = data.weather[0].description;
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;
    const humidity = data.main.humidity;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', `${iconSrc}`);
    icon.setAttribute('alt', `${description}`);
    weatherInfo.appendChild(icon);

    const tempItem = document.createElement('li');
    tempItem.innerHTML = temp;

    const descItem = document.createElement('li');
    descItem.textContent = description.replace(/\b\w/g, l => l.toUpperCase());

    const maxItem = document.createElement('li');
    maxItem.textContent = `High: ${maxTemp}°C`;

    const minItem = document.createElement('li');
    minItem.textContent = `Low: ${minTemp}°C`;

    const humItem = document.createElement('li');
    humItem.textContent = `Humidity: ${humidity}%`;

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunriseItem = document.createElement('li');
    sunriseItem.textContent = `Sunrise: ${sunriseTime}`;

    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetItem = document.createElement('li');
    sunsetItem.textContent = `Sunset: ${sunsetTime}`;

    dataList.appendChild(tempItem);
    dataList.appendChild(descItem);
    dataList.appendChild(maxItem);
    dataList.appendChild(minItem);
    dataList.appendChild(humItem);
    dataList.appendChild(sunriseItem);
    dataList.appendChild(sunsetItem);

    weatherInfo.appendChild(dataList);
}

function displayResultsForecast(data) {
    const daysShown = [];
    
    for (let i = 0; i < data.list.length; i++) {
        const item = data.list[i];
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        
        if (daysShown.includes(day)) continue;

        const temp = item.main.temp.toFixed(1);
        const p = document.createElement('p');
        p.innerHTML = `<strong>${day}:</strong> ${temp}°C`;
        forecastContainer.appendChild(p);

        daysShown.push(day);

        if (daysShown.length === 3) break;
    }
}

apiFetch()