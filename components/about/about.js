function loadAbout() {
    fetch('components/about/about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about-section').innerHTML = html;
            setupScrollAnimation();
        })
        .catch(error => console.error('Error loading about:', error));
}

function setupScrollAnimation() {
    const aboutSection = document.querySelector('.about');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    if (aboutSection) {
        aboutSection.style.opacity = '0';
        aboutSection.style.transform = 'translateY(50px)';
        aboutSection.style.transition = 'all 0.8s ease-out';
        observer.observe(aboutSection);
    }
}

loadAbout();