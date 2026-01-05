/**
 * NOVALÉ Static Site JavaScript
 * For WordPress Integration
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initSmoothScroll();
  initFadeInAnimations();
  initAccordions();
  initFormValidation();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Fade In Animations on Scroll
 */
function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    fadeElements.forEach(el => el.classList.add('visible'));
  }
}

/**
 * Accordion/FAQ Toggle
 */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
      
      // Close all other accordions
      document.querySelectorAll('.accordion-content.active').forEach(item => {
        if (item !== content) {
          item.classList.remove('active');
          item.style.maxHeight = null;
          item.previousElementSibling.querySelector('.accordion-icon')?.classList.remove('rotate');
        }
      });
      
      // Toggle current accordion
      content.classList.toggle('active');
      if (content.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon?.classList.add('rotate');
      } else {
        content.style.maxHeight = null;
        icon?.classList.remove('rotate');
      }
    });
  });
}

/**
 * Form Validation
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        const errorMessage = field.parentElement.querySelector('.error-message');
        
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          if (errorMessage) {
            errorMessage.textContent = 'This field is required';
            errorMessage.style.display = 'block';
          }
        } else {
          field.classList.remove('error');
          if (errorMessage) {
            errorMessage.style.display = 'none';
          }
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            field.classList.add('error');
            if (errorMessage) {
              errorMessage.textContent = 'Please enter a valid email address';
              errorMessage.style.display = 'block';
            }
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      }
    });
    
    // Clear error on input
    form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', function() {
        this.classList.remove('error');
        const errorMessage = this.parentElement.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Image Lazy Loading (for browsers without native support)
 */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

/**
 * Filter Functionality for Projects
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
  .fade-in.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  
  .accordion-content.active {
    max-height: 500px;
  }
  
  .accordion-icon.rotate {
    transform: rotate(180deg);
  }
  
  .accordion-icon {
    transition: transform 0.3s ease;
  }
  
  input.error, textarea.error {
    border-color: var(--destructive);
  }
  
  .error-message {
    color: var(--destructive);
    font-size: 0.75rem;
    margin-top: 0.25rem;
    display: none;
  }
  
  .header.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .header.hidden {
    transform: translateY(-100%);
  }
  
  .header {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .mobile-menu {
    display: none;
  }
  
  .mobile-menu.active {
    display: block;
  }
  
  @media (max-width: 1023px) {
    .menu-toggle {
      display: block;
    }
    
    .desktop-nav {
      display: none;
    }
  }
`;
document.head.appendChild(style);
