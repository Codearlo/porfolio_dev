document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initMobileMenu();
    initMouseGlow();
});

function initMouseGlow() {
    const mouseGlow = document.createElement('div');
    mouseGlow.id = 'mouse-glow';
    document.body.appendChild(mouseGlow);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        mouseGlow.style.left = currentX + 'px';
        mouseGlow.style.top = currentY + 'px';

        requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        mouseGlow.style.opacity = '0.7';
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

function initMobileMenu() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            document.body.classList.add('scroll-down');
        } else {
            document.body.classList.remove('scroll-down');
        }
        
        lastScroll = currentScroll;
    });
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});