const params = new URLSearchParams(document.location.search);

document.getElementById('name').textContent = params.get('name') || 'Not Provided';
document.getElementById('email').textContent = params.get('email') || 'Not Provided';
document.getElementById('phone').textContent = params.get('phone') || 'Not Provided';
document.getElementById('location').textContent = params.get('location') || 'Not Provided';
document.getElementById('reason').textContent = params.get('reason') || 'Not Provided';
document.getElementById('petName').textContent = params.get('petName') || 'Not Provided';
document.getElementById('timestamp').textContent = params.get('timestamp') || 'Not Available';

