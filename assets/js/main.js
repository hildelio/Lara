/**
 * LARA ROCHA - PSICÓLOGA
 * Homepage Interactive Features
 * 
 * Features:
 * - Mobile menu toggle
 * - Smooth scrolling navigation
 * - Header scroll effects
 * - Image carousel
 * - Scroll animations
 * - Accessibility improvements
 */

(function() {
    'use strict';

    // ---- CONFIGURATION ----
    const CONFIG = {
        CAROUSEL_INTERVAL: 5000, // 5 seconds
        SCROLL_OFFSET: 20,
        ANIMATION_THRESHOLD: 0.1
    };

    // ---- DOM ELEMENTS ----
    const elements = {
        mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
        mobileMenu: document.querySelector('.mobile-menu'),
        mobileNavLinks: document.querySelectorAll('.mobile-menu a'),
        header: document.querySelector('.header'),
        carouselSlides: document.querySelectorAll('.carousel-slide'),
        sections: document.querySelectorAll('section:not(#hero)'),
        smoothScrollLinks: document.querySelectorAll('a[href^="#"]')
    };

    // ---- MOBILE MENU ----
    function initMobileMenu() {
        if (!elements.mobileMenuToggle || !elements.mobileMenu) return;

        // Toggle mobile menu
        elements.mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });

        // Close mobile menu when link is clicked
        elements.mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!elements.mobileMenu.contains(e.target) && 
                !elements.mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close mobile menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && elements.mobileMenu.classList.contains('active')) {
                closeMobileMenu();
                elements.mobileMenuToggle.focus();
            }
        });
    }

    function toggleMobileMenu() {
        const isActive = elements.mobileMenuToggle.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        elements.mobileMenuToggle.classList.add('active');
        elements.mobileMenu.classList.add('active');
        elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus first menu item
        const firstMenuItem = elements.mobileMenu.querySelector('a');
        if (firstMenuItem) {
            setTimeout(() => firstMenuItem.focus(), 100);
        }
    }

    function closeMobileMenu() {
        elements.mobileMenuToggle.classList.remove('active');
        elements.mobileMenu.classList.remove('active');
        elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    // ---- HEADER SCROLL EFFECTS ----
    function initHeaderEffects() {
        if (!elements.header) return;

        let ticking = false;

        function updateHeader() {
            const scrollY = window.pageYOffset;
            
            if (scrollY > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
            
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // ---- SMOOTH SCROLLING ----
    function initSmoothScrolling() {
        elements.smoothScrollLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                // Skip if it's just a hash
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerHeight = elements.header ? elements.header.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - CONFIG.SCROLL_OFFSET;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }
                }
            });
        });
    }

    // ---- CAROUSEL ----
    function initCarousel() {
        if (elements.carouselSlides.length === 0) return;

        let currentSlide = 0;
        let carouselInterval;

        // Initialize first slide
        elements.carouselSlides[0].classList.add('active');

        function nextSlide() {
            // Remove active class from current slide
            elements.carouselSlides[currentSlide].classList.remove('active');
            
            // Move to next slide
            currentSlide = (currentSlide + 1) % elements.carouselSlides.length;
            
            // Add active class to new slide
            elements.carouselSlides[currentSlide].classList.add('active');
        }

        function startCarousel() {
            carouselInterval = setInterval(nextSlide, CONFIG.CAROUSEL_INTERVAL);
        }

        function stopCarousel() {
            if (carouselInterval) {
                clearInterval(carouselInterval);
            }
        }

        // Start carousel
        startCarousel();

        // Pause carousel when page is not visible
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopCarousel();
            } else {
                startCarousel();
            }
        });

        // Pause carousel on focus/hover for accessibility
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopCarousel);
            heroSection.addEventListener('mouseleave', startCarousel);
            heroSection.addEventListener('focusin', stopCarousel);
            heroSection.addEventListener('focusout', startCarousel);
        }
    }

    // ---- SCROLL ANIMATIONS ----
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers
            elements.sections.forEach(section => {
                section.classList.add('visible');
            });
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: CONFIG.ANIMATION_THRESHOLD,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.sections.forEach(section => {
            observer.observe(section);
        });
    }

    // ---- FORM VALIDATION (if needed in future) ----
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[\d\s\(\)\-]+$/;
        return phoneRegex.test(phone);
    }

    // ---- PERFORMANCE OPTIMIZATIONS ----
    function lazyLoadImages() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading support
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        } else {
            // Fallback for older browsers
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // ---- ACCESSIBILITY IMPROVEMENTS ----
    function initAccessibility() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.classList.add('sr-only');
        skipLink.style.position = 'absolute';
        skipLink.style.top = '-40px';
        skipLink.style.left = '6px';
        skipLink.style.background = '#5A6349';
        skipLink.style.color = '#F8F6F2';
        skipLink.style.padding = '8px';
        skipLink.style.textDecoration = 'none';
        skipLink.style.zIndex = '10000';
        skipLink.style.borderRadius = '4px';

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Focus management for skip link
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });

        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });

        // Add main landmark
        const main = document.querySelector('main');
        if (main) {
            main.id = 'main';
        }

        // Set proper ARIA attributes
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.setAttribute('aria-controls', 'mobile-menu');
            elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
            elements.mobileMenuToggle.setAttribute('aria-label', 'Menu de navegação móvel');
        }

        if (elements.mobileMenu) {
            elements.mobileMenu.id = 'mobile-menu';
            elements.mobileMenu.setAttribute('role', 'navigation');
            elements.mobileMenu.setAttribute('aria-label', 'Menu principal');
        }
    }

    // ---- ANALYTICS (placeholder for future implementation) ----
    function trackEvent(category, action, label) {
        // Placeholder for analytics tracking
        console.log('Event tracked:', { category, action, label });
        
        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
    }

    // ---- ERROR HANDLING ----
    function handleError(error, context) {
        console.error(`Error in ${context}:`, error);
        
        // In production, you might want to send errors to a logging service
        // Example: Sentry, LogRocket, etc.
    }

    // ---- INITIALIZATION ----
    function init() {
        try {
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
                return;
            }

            // Initialize all features
            initMobileMenu();
            initHeaderEffects();
            initSmoothScrolling();
            initCarousel();
            initScrollAnimations();
            initAccessibility();
            lazyLoadImages();

            // Track page load
            trackEvent('Page', 'Load', window.location.pathname);

            console.log('🌿 Lara Rocha Homepage initialized successfully');

        } catch (error) {
            handleError(error, 'initialization');
        }
    }

    // ---- PUBLIC API (if needed) ----
    window.LaraRochaHomepage = {
        closeMobileMenu,
        trackEvent,
        validateEmail,
        validatePhone
    };

    // Start initialization
    init();

})();
