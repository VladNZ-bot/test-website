// Mobile menu toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarToggle.innerHTML = navbarMenu.classList.contains('active') ? '&#10005;' : '&#9776;';
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggle.innerHTML = '&#9776;';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 66;
            const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});

// Contact form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.elements['name'].value;
        alert(`Thank you, ${name}! Your quote request has been received. We'll respond within 24 hours.`);
        this.reset();
    });
}

// Lightbox
document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';

        const img = document.createElement('img');
        img.src = this.href;

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => lightbox.remove());
        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.removeEventListener('keydown', handler);
            }
        });
    });
});
