const params = new URLSearchParams(document.location.search);

document.getElementById('name').textContent = params.get('name') || 'Not Provided';
document.getElementById('email').textContent = params.get('email') || 'Not Provided';
document.getElementById('phone').textContent = params.get('phone') || 'Not Provided';
document.getElementById('location').textContent = params.get('location') || 'Not Provided';
document.getElementById('reason').textContent = params.get('reason') || 'Not Provided';

const petNameP = document.getElementById('petNameP');
const petName = document.getElementById('petName');

const petNameValue = params.get('petName');

if (!petNameValue || petNameValue.trim() === "") {
    petNameP.style.display = "none";
} else {
    petName.textContent = petNameValue;
    petNameP.style.display = "block";
}

document.getElementById('timestamp').textContent = params.get('timestamp') || 'Not Available';

