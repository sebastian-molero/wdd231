export const toggleHamburgerMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('show');
        nav.classList.toggle('show');
    });
};