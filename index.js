// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Form Validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
        return false;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        formMessage.textContent = 'Please enter a valid email!';
        formMessage.style.color = 'red';
        return false;
    }

    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    document.getElementById('contact-form').reset();
    return true;
}

// Initialize slider
if (slides.length > 0) {
    showSlide(slideIndex);
}