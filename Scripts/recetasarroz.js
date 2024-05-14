const recetas = [
    {
        nombre: "Arroz con pollo",
        imagen: "../images/arroz-con-pollo.jpg",
        tiempoPreparacion: "30 minutos"
    },
    {
        nombre: "Arroz frito con camarones",
        imagen: "../images/arroz-frito-con-camarones.jpg",
        tiempoPreparacion: "45 minutos"
    },
    // mas recetas
];
document.addEventListener("DOMContentLoaded", function() {
    const contenedorRecetas = document.getElementById("contenedor-recetas");

    recetas.forEach(receta => {
        // Crea un div para la tarjeta de receta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Crea img para la imagen de la receta
        const imagen = document.createElement("img");
        imagen.src = receta.imagen;
        imagen.alt = "Imagen de la receta";

        // Crea un div para los datos de la receta
        const datosReceta = document.createElement("div");
        datosReceta.classList.add("datos-receta");

        // Crea un h2 para el nombre de la receta
        const nombreReceta = document.createElement("h2");
        nombreReceta.textContent = receta.nombre;

        // Crea un p para el tiempo de preparación
        const tiempoPreparacion = document.createElement("p");
        tiempoPreparacion.textContent = "Tiempo de preparación: " + receta.tiempoPreparacion;

        // Agrega la imagen, el nombre y el tiempo de preparación a la tarjeta de receta
        tarjeta.appendChild(imagen);
        datosReceta.appendChild(nombreReceta);
        datosReceta.appendChild(tiempoPreparacion);
        tarjeta.appendChild(datosReceta);

        // Agrega la tarjeta de receta al contenedor de recetas
        contenedorRecetas.appendChild(tarjeta);
    });
});