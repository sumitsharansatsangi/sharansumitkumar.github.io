document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        saveThemePreference();
    });

    function saveThemePreference() {
        const isDarkMode = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    function loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    loadThemePreference();
});
