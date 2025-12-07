const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form validation
function validateForm() {
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim().length < 2) {
        showError('name-error', 'Name must be at least 2 characters long');
        isValid = false;
    } else {
        clearError('name-error');
    }
    
    // Email validation
    if (!emailRegex.test(emailInput.value.trim())) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError('email-error');
    }
    
    // Message validation
    if (messageInput.value.trim().length < 10) {
        showError('message-error', 'Message must be at least 10 characters long');
        isValid = false;
    } else {
        clearError('message-error');
    }
    
    return isValid;
}

function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
}

function clearError(errorId) {
    document.getElementById(errorId).textContent = '';
}

// Clear errors on input
nameInput.addEventListener('input', () => clearError('name-error'));
emailInput.addEventListener('input', () => clearError('email-error'));
messageInput.addEventListener('input', () => clearError('message-error'));

// Form submission handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const buttonText = submitButton.querySelector('.button-text');
        const buttonLoading = submitButton.querySelector('.button-loading');
        
        buttonText.style.display = 'none';
        buttonLoading.style.display = 'inline';
        submitButton.disabled = true;
        
        // Simulate form submission (since no backend)
        setTimeout(() => {
            // Hide loading, show success
            buttonText.style.display = 'inline';
            buttonLoading.style.display = 'none';
            submitButton.disabled = false;
            
            // Show success message
            document.getElementById('form-success').style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('form-success').style.display = 'none';
            }, 5000);
        }, 1500);
    }
});

// ===================================
// INSPIRATIONAL QUOTES API
// ===================================

const quoteContainer = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Using Quotable API - Free quotes API
const QUOTE_API = 'https://api.quotable.io/random?tags=inspirational|motivational|courage|hope';

// Alternative API fallback
const ALTERNATIVE_API = 'https://zenquotes.io/api/random';

async function fetchQuote() {
    try {
        showLoading();
        
        const response = await fetch(QUOTE_API);
        
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        
        const data = await response.json();
        displayQuote(data.content, data.author);
        
    } catch (error) {
        console.error('Primary API failed, trying alternative:', error);
        try {
            // Try alternative API
            const response = await fetch(ALTERNATIVE_API);
            const data = await response.json();
            displayQuote(data[0].q, data[0].a);
        } catch (altError) {
            console.error('Alternative API also failed:', altError);
            displayQuote(
                'You are braver than you believe, stronger than you seem, and smarter than you think.',
                'A.A. Milne'
            );
        }
    }
}

function showLoading() {
    quoteContainer.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading inspirational quote...</p>
        </div>
    `;
}

function displayQuote(text, author) {
    quoteContainer.innerHTML = `
        <div class="quote-content">
            <p class="quote-text">${text}</p>
            <p class="quote-author">— ${author}</p>
        </div>
    `;
}

// Load initial quote when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchQuote();
});

// Get new quote button
newQuoteBtn.addEventListener('click', () => {
    fetchQuote();
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================

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

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .contact-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%cCancer Awareness & Support', 'color: #e91e63; font-size: 24px; font-weight: bold;');
console.log('%cBuilt for spreading awareness and hope', 'color: #9c27b0; font-size: 14px;');
console.log('%cTogether we can make a difference!', 'color: #e91e63; font-size: 14px; font-weight: bold;');
