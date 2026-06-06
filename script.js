// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Hamburger menu
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});
