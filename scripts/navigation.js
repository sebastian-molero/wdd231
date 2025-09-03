const hamBtn = document.getElementById("ham-Btn");
const navBar = document.querySelector('#nav-bar');
hamBtn.addEventListener('click', function () {
    hamBtn.classList.toggle('show');
    navBar.classList.toggle('show');
});
