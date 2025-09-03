const year = new Date().getFullYear();
const currentYear = document.getElementById("currentYear");
currentYear.textContent = year;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;