// Reihla Travel Landing Page - Main Script

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Simple toggle for demonstration purposes
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--bg-white)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '100';
            }
        });
    }

    // Search Tabs functionality
    const searchTabs = document.querySelectorAll('.search-tabs .tab');
    
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            searchTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Note: In a real application, this would also change the form fields below based on the selected tab
        });
    });

    // Why Choose Us features interaction
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Remove active class from all cards
            featureCards.forEach(c => c.classList.remove('active'));
            // Add active class to hovered card
            card.classList.add('active');
        });
    });

    // Simple smooth scrolling for anchor links if any are added later
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
