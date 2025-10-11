// Fetch and display random testimonial
export const fetchTestimonials = async (testimonialUrl, testimonialContainer) => {
    try {
        const response = await fetch(testimonialUrl);
        if (!response.ok) {
            throw new Error("Couldn't load testimonials");
        }

        const data = await response.json();

        if (!data.testimonials || !Array.isArray(data.testimonials) || data.testimonials.length === 0) {
            throw new Error("Testimonials data is invalid or empty");
        }

        const randomIndex = Math.floor(Math.random() * data.testimonials.length);
        const randomTestimonial = data.testimonials[randomIndex];

        testimonialContainer.innerHTML = `
            <p><q>${randomTestimonial.quote}</q></p>
            <p>${randomTestimonial.name}</p>
            <p>${randomTestimonial.date} - ${randomTestimonial.location}</p>
        `;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        testimonialContainer.innerHTML = `
            <p>Sorry, we couldn't load testimonials at this time.</p>
        `;
    }
};