// Fetch and render CHANGELOG.md
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('changelog-container');
    
    fetch('CHANGELOG.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load CHANGELOG.md');
            }
            return response.text();
        })
        .then(markdown => {
            // Parse markdown to HTML using marked.js
            if (typeof marked !== 'undefined') {
                const html = marked.parse(markdown);
                container.innerHTML = html;
            } else {
                throw new Error('Marked.js library not loaded');
            }
        })
        .catch(error => {
            console.error('Error loading changelog:', error);
            container.innerHTML = '<p class="error">Failed to load changelog. Please try again later.</p>';
        });
});

