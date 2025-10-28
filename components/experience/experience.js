function loadExperience() {
    fetch('components/experience/experience.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('experience-section').innerHTML = html;
            animateTimeline();
        })
        .catch(error => console.error('Error loading experience:', error));
}

function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
}

loadExperience();