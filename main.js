// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial styles and observe elements
document.querySelectorAll('.section, .hero-content, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Mobile Menu Toggle (Basic)
const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        const isHidden = navLinks.style.display === 'none' || navLinks.style.display === '';
        navLinks.style.display = isHidden ? 'flex' : 'none';
        
        if (isHidden) {
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--bg-card)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        } else {
            navLinks.style.display = '';
            navLinks.style.position = '';
        }
    });
}
