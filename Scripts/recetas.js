// Definimos un objeto para almacenar la información de las recetas
const recetas = [
    {
        nombre: "Tarta de manzana",
        ingredientes: ["manzanas", "azúcar", "harina", "mantequilla"],
        categorias: ["postres", "tartas"],
        preparacion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        detalles: "Tiempo de preparación: 45 minutos",
        imagen: "ruta/a/la/imagen1.jpg" // Puedes almacenar la ruta de la imagen aquí
    },
    {
        nombre: "Espaguetis a la bolognesa",
        ingredientes: ["espaguetis", "carne picada", "salsa de tomate", "cebolla"],
        categorias: ["pastas", "carnes"],
        preparacion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        detalles: "Tiempo de preparación: 30 minutos",
        imagen: "ruta/a/la/imagen2.jpg"
    },
    // Puedes agregar más objetos de recetas según sea necesario
];

// Función para mostrar las recetas en las tarjetas
function mostrarRecetas() {
    const contenedorRecetas = document.getElementById("contenedor-recetas");

    // Limpiamos el contenedor de recetas antes de agregar nuevas
    contenedorRecetas.innerHTML = "";

    // Iteramos sobre el array de recetas y creamos una tarjeta para cada una
    recetas.forEach(receta => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Creamos elementos para mostrar la información de la receta en la tarjeta
        const imagen = document.createElement("img");
        imagen.src = receta.imagen;
        const nombre = document.createElement("h2");
        nombre.textContent = receta.nombre;
        const ingredientes = document.createElement("p");
        ingredientes.textContent = "Ingredientes: " + receta.ingredientes.join(", ");
        const preparacion = document.createElement("p");
        preparacion.textContent = "Preparación: " + receta.preparacion;
        const detalles = document.createElement("p");
        detalles.textContent = receta.detalles;

        // Añadimos los elementos a la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(ingredientes);
        tarjeta.appendChild(preparacion);
        tarjeta.appendChild(detalles);

        // Añadimos la tarjeta al contenedor de recetas
        contenedorRecetas.appendChild(tarjeta);
    });
}

// Llamamos a la función para mostrar las recetas cuando se cargue la página
document.addEventListener("DOMContentLoaded", mostrarRecetas);