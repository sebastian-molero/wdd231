const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
})


const pets = 'data/pets.json';

const fetchPets = async () => {
    const response = await fetch(pets);
    const data = await response.json();
    console.log(data);
    displayPets(data);
}

fetchPets()

const petsContainer = document.getElementById('petsContainer')
// const openButton = document.querySelector('#openButton');
const dialog = document.getElementById('dialog');
const dialogText = document.querySelector('#dialogContent');
const closeButton = document.getElementById('closeButton');

const displayPets = (data) => {
    randomSections = [];
    while (randomSections.length < data.length) {
        const randomIndex = Math.floor(Math.random() * data.length)
        const randomPet = data[randomIndex]

        if (!randomSections.includes(randomPet)) {
            randomSections.push(randomPet);
        }
    }

    petsContainer.innerHTML = "";

    console.log(randomSections)

    randomSections.forEach(pet => {

        const section = document.createElement('section')
        section.setAttribute('class', 'pet')
        section.innerHTML = `
        <h2>${pet.name}</h2>
        <img src=${pet.img} alt="" width="${pet.width}" height="${pet.height}" loading="lazy">
        <button id="openButton${pet.id}">${pet.gender == "Male" ? 'Meet Him' : "Meet Her"}</button>`

        petsContainer.appendChild(section);

        const openButton = document.getElementById(`openButton${pet.id}`)

        openButton.addEventListener('click', () => {
            dialogText.innerHTML = `
                <h3 class="pet_name">${pet.name}</h3>
                <img class="pet_img" src="${pet.img}" alt="${pet.name}">
                <p class="pet_description">${pet.description}</p>

                <ul class="pet_data">
                    <li class="pet_species"><strong>Species:</strong> ${pet.species}</li>
                    <li class="pet_breed"><strong>Breed:</strong> ${pet.breed}</li>
                    <li class="pet_age"><strong>Age:</strong> ${pet.age} ${pet.age === 1 ? 'year' : 'years'}</li>
                    <li class="pet_gender"><strong>Gender:</strong> ${pet.gender}</li>
                    <li class="pet_size"><strong>Size:</strong> ${pet.size}</li>
                    <li class="pet_color"><strong>Color:</strong> ${pet.color}</li>
                    <li class="pet_vaccinated"><strong>Vaccinated:</strong> ${pet.vaccinated ? 'Yes' : 'No'}</li>
                    <li class="pet_neutered"><strong>Neutered:</strong> ${pet.neutered ? 'Yes' : 'No'}</li>
                </ul>`;
            dialog.showModal();
        });
    })
}

closeButton.addEventListener('click', () => {
    dialog.close()
})

dialog.addEventListener('click', (e) => {
    
    if (e.target === dialog) {
        dialog.close()
    }
})