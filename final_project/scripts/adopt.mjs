import { toggleHamburgerMenu } from './menu.mjs';
import { fetchPets, displayPets } from './pets.mjs';

const petsUrl = 'data/pets.json';
const petsContainer = document.getElementById('petsContainer');
const dialog = document.getElementById('dialog');
const dialogText = document.querySelector('#dialogContent');
const closeButton = document.getElementById('closeButton');

// Toggle hamburger menu
toggleHamburgerMenu();

// Fetch and display pets
const init = async () => {
    try {
        const petsData = await fetchPets(petsUrl);
        displayPets(petsData, petsContainer, dialog, dialogText);
    } catch (error) {
        console.error('Error fetching and displaying pets:', error);
        dialogText.textContent = 'There was an error loading the pets data. Please try again later.';
        dialog.showModal();
    }
};

init();

// Close the dialog
closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (e) => {
    
    if (e.target === dialog) {
        dialog.close()
    }
})