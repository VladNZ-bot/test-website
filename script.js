// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? '&#10005;' : '&#9776;';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = '&#9776;';
        }
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            product: formData.get('product'),
            message: formData.get('message')
        };

        console.log('Quote request submitted:', data);
        alert(`Thank you, ${data.name}! Your quote request has been received. We'll respond within 24 hours.`);
        this.reset();
    });
}

// Lightbox for gallery and portfolio images
document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imageUrl = this.getAttribute('href');

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Full size image';

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        // Close on click
        lightbox.addEventListener('click', () => lightbox.remove());

        // Close on escape
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        document.addEventListener('keydown', closeOnEscape);
    });
});
