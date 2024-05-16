function cambiarTema() {
    const currentTheme = sessionStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.getElementById('theme-link').href = newTheme + '.css';
    sessionStorage.setItem('theme', newTheme);
    document.getElementById('theme-button').textContent = newTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
}

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = sessionStorage.getItem('theme') || 'light';
    document.getElementById('theme-link').href = currentTheme + '.css';
    document.getElementById('theme-button').textContent = currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
});

// Asignar el evento de clic al botón
document.getElementById('theme-button').addEventListener('click', cambiarTema);