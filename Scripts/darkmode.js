function cambiarTema() {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    const newTheme = currentTheme === 'lightmode' ? 'darkmode' : 'lightmode';
    document.getElementById('theme-link').href = `../Styles/${newTheme}.css`;
    sessionStorage.setItem('theme', newTheme);
    document.getElementById('theme-button').textContent = newTheme === 'darkmode' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
}

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    document.getElementById('theme-link').href = `../Styles/${newTheme}.css`;
    document.getElementById('theme-button').textContent = currentTheme === 'darkmode' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
});

// Asignar el evento de clic al botón
document.getElementById('theme-button').addEventListener('click', cambiarTema);


