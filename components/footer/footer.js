function loadFooter() {
    fetch('components/footer/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-section').innerHTML = html;
            updateYear();
        })
        .catch(error => console.error('Error loading footer:', error));
}

function updateYear() {
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `Copyright © ${currentYear}`;
    }
}

loadFooter();