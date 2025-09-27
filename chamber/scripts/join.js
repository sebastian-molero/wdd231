const hamburger = document.getElementById('ham-Btn');
const navigation = document.getElementById('nav-bar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('show');
    navigation.classList.toggle('show');
});


document.getElementById('timestamp').value = new Date().toISOString();


const openButton = document.querySelector('#openButton');
const dialogBox = document.getElementById('dialogBox');
const closeButton = document.getElementById('closeDialog');
const dialogText = document.querySelector('#dialogBox div');


openButton1.addEventListener('click', () => {
    dialogText.innerHTML = `
        <h3>NP Membership</h3>
        <p>Ideal for non-profit organizations looking to engage with the community and gain visibility. Enjoy free access to basic chamber benefits and events tailored for public service groups.</p>
        <a href="#">See Benefits</a>`;
    
    dialogBox.showModal();
});

openButton2.addEventListener('click', () => {
    dialogText.innerHTML = `
        <h3>Bronze Membership</h3>
        <p>Perfect for startups and small businesses. Gain access to networking events, member directories, and limited advertising options to help you grow your presence in the local business ecosystem.</p>
        <a href="#">See Benefits</a>`;
    
        dialogBox.showModal();
})

openButton3.addEventListener('click', () => {
    dialogText.innerHTML = `
        <h3>Silver Membership</h3>
        <p>Designed for growing businesses ready to expand their reach. Includes all Bronze benefits plus enhanced marketing exposure, event sponsorship opportunities, and increased visibility in chamber communications.</p>
        <a href="#">See Benefits</a>`;
    
        dialogBox.showModal();
})

openButton4.addEventListener('click', () => {
    dialogText.innerHTML = `    
        <h3>Gold Membership</h3>
        <p>Our most comprehensive membership. Gold members receive top-tier benefits including premium advertising placements, VIP event access, exclusive training sessions, and personalized business support services.</p>
        <a href="#">See Benefits</a>`;
        
    dialogBox.showModal();
})

closeButton.addEventListener('click', () => {
    dialogBox.close();
})


document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`