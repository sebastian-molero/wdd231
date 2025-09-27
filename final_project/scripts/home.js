const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
})

const tst = "data/testimonials.json"
const testimonials = async () => {
    try {
        const testimonialContainer = document.getElementById('testimonials');
        const response = await fetch(tst);
        if (!response.ok) {
            throw new Error("Couldn't load testimonials");
        }
        const data = await response.json();
        console.log(data);

        const testimonialsList = data.testimonials;
        console.log(testimonialsList);

        const randomIndex = Math.floor(Math.random() * data.testimonials.length);
        const randomTestimonial = testimonialsList[randomIndex];

        testimonialContainer.innerHTML = `
            <p><q>${randomTestimonial.quote}</q></p>
            <p>${randomTestimonial.name}</p>
            <p>${randomTestimonial.date} - ${randomTestimonial.location}</p >
        `;
    }
    catch (error) {
        console.log(error)
    }
}

testimonials()


document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`