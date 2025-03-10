// Theme Toggle
const body = document.body;
const modeToggle = document.querySelector('.mode-toggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = '☀️';
} else if (savedTheme === 'light') {
    body.classList.add('light-mode');
    modeToggle.textContent = '🌙';
}

// Toggle theme
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        modeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

mobileNavToggle.addEventListener('click', () => {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    mobileNavToggle.textContent = isExpanded ? '☰' : '✕'; // Toggle between hamburger and 'X'
    navLinks.classList.toggle('active'); // Toggle visibility of nav links
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would normally send the form data to a server
    // For demo purposes, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close mobile nav if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.textContent = '☰';
        }
    });
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .project-card, .about-content > div');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);