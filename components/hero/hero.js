function loadHero() {
    fetch('components/hero/hero.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('hero-section').innerHTML = html;
            updateCurrentYear();
            animateHero();
        })
        .catch(error => console.error('Error loading hero:', error));
}

function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

function animateHero() {
    const title = document.querySelector('.hero-title');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            title.style.transition = 'all 0.8s ease-out';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 100);
    }
}

loadHero();