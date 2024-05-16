document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    document.getElementById('theme-link').href = `../Styles/${currentTheme}.css`;
});