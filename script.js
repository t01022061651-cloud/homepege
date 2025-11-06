// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar Toggle for Mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(184, 169, 230, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(184, 169, 230, 0.1)';
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
    
    // Show success message (optional)
    showNotification('메일 클라이언트가 열렸습니다. 메시지를 보내주세요!');
});

// Notification Function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #B8A9E6, #A8D5BA);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(184, 169, 230, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-content p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Typing Effect for Home Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Activate typing effect
// const nameKo = document.querySelector('.name-ko');
// if (nameKo) {
//     typeWriter(nameKo, '김선엽', 150);
// }

// Parallax Effect for Home Section (Subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector('.home-section');
    
    if (homeSection && scrolled < window.innerHeight) {
        homeSection.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add Interactive Hover Effects for Project Cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Add Interactive Hover Effects for Award Cards
const awardCards = document.querySelectorAll('.award-card');
awardCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const year = this.querySelector('.award-year');
        if (year) {
            year.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const year = this.querySelector('.award-year');
        if (year) {
            year.style.transform = 'scale(1)';
        }
    });
});

// Progress Bar Animation on Scroll (if you want to add skill levels)
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = progress + '%';
        }
    });
}

window.addEventListener('scroll', animateProgressBars);

// Console Easter Egg
console.log('%c👋 안녕하세요! Welcome to my portfolio!', 'font-size: 20px; color: #B8A9E6; font-weight: bold;');
console.log('%c📧 연구 협업 및 문의사항은 언제든지 연락 주세요!', 'font-size: 14px; color: #A8D5BA;');

// Performance optimization - Throttle scroll events
let scrollTimeout;
function throttleScroll(callback, delay = 100) {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        callback();
        scrollTimeout = null;
    }, delay);
}

// Apply throttling to scroll events
window.addEventListener('scroll', () => {
    throttleScroll(updateActiveLink);
});