function cambiarTema() {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    const newTheme = currentTheme === 'lightmode' ? 'darkmode' : 'lightmode';
    document.getElementById('theme-link').href = `styles/${newTheme}.css`;
    sessionStorage.setItem('theme', newTheme);
    aplicarTema(newTheme);
}

function aplicarTema(theme) {
    document.getElementById('theme-link').href = `styles/${theme}.css`;
    document.getElementById('theme-button').textContent = theme === 'darkmode' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    }

document.getElementById('theme-button').addEventListener('click', cambiarTema);

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    aplicarTema(currentTheme);
});

