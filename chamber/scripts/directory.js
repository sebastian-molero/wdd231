const hamburger = document.getElementById('ham-Btn');
const navigation = document.getElementById('nav-bar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('show');
    navigation.classList.toggle('show');
});


const directory = document.getElementById('directory');
const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');

const membersJson = "data/members.json";

async function getMembers(membersJson) {
    const response = await fetch(membersJson);
    const data = await response.json();
    displayMembers(data.members);
};

const displayMembers = (members => {
    directory.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement('section');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const address = document.createElement('p');
        const contact = document.createElement('p');
        const website = document.createElement('p');

        card.classList.add('member-card');

        img.setAttribute('src', `${member.image}`);
        img.setAttribute('alt', '');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '100');

        h2.textContent = `${member.name}`;
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;
        contact.innerHTML = `<strong>Phone Number:</strong><br> ${member.phone}`;
        website.innerHTML = `<strong>Website: </strong><a href="${member.website}" target="_blank">${member.name}</a>`;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(website);

        directory.appendChild(card);
    });
})

gridBtn.addEventListener('click', function () {
    directory.classList.add('directory-grid');
    directory.classList.remove('directory-list');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', function () {
    directory.classList.add('directory-list');
    directory.classList.remove('directory-grid');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
})


getMembers(membersJson)

document.getElementById('year').textContent = new Date().getFullYear()
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`