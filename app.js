// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Mobile Menu Toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Mobile Menu Toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Set active nav item
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-links');
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Show/hide back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Initialize Swiper
const swiper = new Swiper('.project-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

// Animate skill bars
document.querySelectorAll('.skill-progress').forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {
        scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        width: width,
        duration: 1.5,
        ease: 'power3.out'
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
