// Fetch pets data from JSON file
export const fetchPets = async (petsUrl) => {
    const response = await fetch(petsUrl);
    const data = await response.json();
    return data;
};


// Display pets in random order
export const displayPets = (data, petsContainer, dialog, dialogText) => {
    let randomSections = [];
    while (randomSections.length < data.length) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPet = data[randomIndex];

        if (!randomSections.includes(randomPet)) {
            randomSections.push(randomPet);
        }
    }

    petsContainer.innerHTML = "";

    randomSections.forEach(pet => {
        const section = document.createElement('section');
        section.setAttribute('class', 'pet');
        section.innerHTML = `
            <h2>${pet.name}</h2>
            <img src="${pet.img}" alt="${pet.name}" width="${pet.width}" height="${pet.height}" loading="lazy">
            <button id="openButton${pet.id}">${pet.gender === "Male" ? 'Meet Him' : "Meet Her"}</button>
        `;
        petsContainer.appendChild(section);

        const openButton = document.getElementById(`openButton${pet.id}`);
        openButton.addEventListener('click', () => {
            dialogText.innerHTML = `
                <h3 class="pet_name">${pet.name}</h3>
                <img class="pet_img" src="${pet.img}" alt="${pet.name}" loading="lazy">
                <p class="pet_description">${pet.description}</p>
                <ul class="pet_data">
                    <li><strong>Species:</strong> ${pet.species}</li>
                    <li><strong>Breed:</strong> ${pet.breed}</li>
                    <li><strong>Age:</strong> ${pet.age} ${pet.age === 1 ? 'year' : 'years'}</li>
                    <li><strong>Gender:</strong> ${pet.gender}</li>
                    <li><strong>Size:</strong> ${pet.size}</li>
                    <li><strong>Color:</strong> ${pet.color}</li>
                    <li><strong>Vaccinated:</strong> ${pet.vaccinated ? 'Yes' : 'No'}</li>
                    <li><strong>Neutered:</strong> ${pet.neutered ? 'Yes' : 'No'}</li>
                </ul>
            `;
            dialog.showModal();
        });
    });
};
