const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
})


document.getElementById('timestamp').value = new Date().toISOString();


const displayAdoption = () => {
    const div = document.getElementById('adoption');
    const select = document.getElementById('reason');
    const animalName = document.getElementById('petName');
    const otherPetYes = document.getElementById('otherPet_yes');
    const otherPetNo = document.getElementById('otherPet_no');
    const kidsYes = document.getElementById('kids_yes');
    const kidsNo = document.getElementById('kids_no');

    const selectedValue = select.value;

    if (selectedValue === "adopt") {
        div.style.display = "block";
        animalName.setAttribute('required', '');
        otherPetYes.setAttribute('required', '');
        kidsYes.setAttribute('required', '');
    } else {
        div.style.display = "none";
        animalName.removeAttribute('required');
        otherPetYes.removeAttribute('required');
        kidsYes.removeAttribute('required');

        otherPetYes.checked = false;
        otherPetNo.checked = false;
        kidsYes.checked = false;
        kidsNo.checked = false;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    displayAdoption(); 
    document.getElementById('reason').addEventListener('change', displayAdoption);
});

