function loadSkills() {
    fetch('components/skills/skills.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('skills-section').innerHTML = html;
        })
        .catch(error => console.error('Error loading skills:', error));
}

loadSkills();