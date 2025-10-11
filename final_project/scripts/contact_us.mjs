import { toggleHamburgerMenu } from './menu.mjs';
import { toggleAdoptionForm,} from './adoption_form.mjs';

// Toggle hamburger menu
toggleHamburgerMenu();

document.getElementById('timestamp').value = new Date().toISOString();

// Toggle adoption form visibility
document.addEventListener('DOMContentLoaded', () => {
    toggleAdoptionForm();
    document.getElementById('reason').addEventListener('change', toggleAdoptionForm);
});

