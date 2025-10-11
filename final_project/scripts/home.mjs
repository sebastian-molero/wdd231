import { toggleHamburgerMenu } from "./menu.mjs";
import { fetchTestimonials } from './testimonials.mjs';

const testimonialsUrl = 'data/testimonials.json';
const testimonialContainer = document.getElementById('testimonials');

// Toggle hamburger menu
toggleHamburgerMenu();

// Fetch and display testimonials
fetchTestimonials(testimonialsUrl, testimonialContainer);

// Set current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Welcome Message
const welcome = localStorage.getItem('welcome');
const welcomeMessage = document.getElementById('welcome');
const storedName = localStorage.getItem('userName');
if (!welcome && !storedName) {
    welcomeMessage.textContent = "!Welcome to our pet adoption page!";

    localStorage.setItem('welcome', 'true');
}
else if (welcome && !storedName) {
    welcomeMessage.textContent = "Welcome back! We're glad to see you again.";
}
else {
    welcomeMessage.textContent = `Welcome back ${storedName}! We're glad to see you again.`;
}