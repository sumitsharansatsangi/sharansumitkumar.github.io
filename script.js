document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    themeToggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            toggleIcon.textContent = '🌙';
        }
        else {
            toggleIcon.textContent = '🌞';
        }
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
