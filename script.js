// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    
    // Update button text based on current theme
    updateToggleButton(currentTheme);
    
    // Add click event listener to theme toggle button
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update the data-theme attribute
        html.setAttribute('data-theme', newTheme);
        
        // Save the preference to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update button text
        updateToggleButton(newTheme);
        
        // Add a subtle animation class
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 100);
    });
    
    function updateToggleButton(theme) {
        if (theme === 'dark') {
            themeToggle.textContent = '☀️';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggle.textContent = '🌙';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
    
    // Detect system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only apply system preference if user hasn't manually set a theme
    if (!localStorage.getItem('theme')) {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', systemTheme);
        updateToggleButton(systemTheme);
    }
    
    // Listen for system theme changes
    mediaQuery.addEventListener('change', function(e) {
        // Only apply if user hasn't manually set a theme
        if (!localStorage.getItem('theme')) {
            const systemTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', systemTheme);
            updateToggleButton(systemTheme);
        }
    });
});

// Smooth scrolling for anchor links (if you add any)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Toggle theme with Ctrl/Cmd + D
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        document.getElementById('theme-toggle').click();
    }
});

// Add subtle entrance animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.intro, .section');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});