const hamburger = document.getElementById('ham-Btn');
const navigation = document.getElementById('nav-bar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('show');
    navigation.classList.toggle('show');
});



const places = "data/places.json";

const fetchData = async () => {
    try {
        const response = await fetch(places);

        if (!response.ok) {
            throw new Error("Could not charge archive");
        }
        const data = await response.json();
        console.log(data)
        displayPlaces(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData()

const grid = document.getElementById('grid');

const displayPlaces = data => {
    data.forEach(place => {
        const section = document.createElement('section');
        section.classList.add('place');

        section.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <p class="address"><strong>Address: </strong>${place.address}</p>
        <p class="description"><strong>Description: </strong>${place.description}</p>
        <button>Learn More</button>`;
        
        grid.appendChild(section);
    });
}

const lastVisited = document.getElementById('lastVisited');
const lastVisit = Number(localStorage.getItem('lastVisit'));
const now = Date.now()

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions."
} else {
    const difference = now - lastVisit;
    const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
        message = "Back so soon! Awesome!";
    }
    else {
        message = `You last visited ${daysPassed} days ago`
    }
}

lastVisited.textContent = message;

localStorage.setItem('lastVisit', now);