document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    document.getElementById('theme-link').href = `styles/${currentTheme}.css`;
});