function cambiarTema() {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
    const newTheme = currentTheme === 'lightmode' ? 'darkmode' : 'lightmode';
    document.getElementById('theme-link').href = `../Styles/${newTheme}.css`;
    sessionStorage.setItem('theme', newTheme);
    aplicarTema(newTheme);
}

function aplicarTema(theme) {
    document.getElementById('theme-link').href = `../Styles/${theme}.css`;
    document.getElementById('theme-button').textContent = theme === 'darkmode' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    }

document.getElementById('theme-button').addEventListener('click', cambiarTema);

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = sessionStorage.getItem('theme') || 'lightmode';
<<<<<<< HEAD
    document.getElementById('theme-link').href = `../Styles/${newTheme}.css`;
    document.getElementById('theme-button').textContent = currentTheme === 'darkmode' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
});

// Asignar el evento de clic al botón
document.getElementById('theme-button').addEventListener('click', cambiarTema);


=======
    aplicarTema(currentTheme);
});
>>>>>>> 24df3d51b5b0ef10cfc38db97bcaef1373602daf
