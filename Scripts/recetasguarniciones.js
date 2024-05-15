const recetas = [
    {
        nombre: "Cebollitas francesas glaseadas",
        nombre: "Cebollitas francesas glaseadas",
        imagen: "../images/Guarniciones/cebollitas-francesas-glaseadas.webp",
        tiempoPreparacion: "30 minutos"
    },
    {
        nombre: "Champignones salteados con jamon y ajo",
        imagen: "../images/Guarniciones/champinones-salteados-con-jamon-y-ajo.webp",
        tiempoPreparacion: "45 minutos"
    },
    // mas recetas
];
document.addEventListener("DOMContentLoaded", function() {
    const recipesContainer = document.getElementById("recipes-container");

    recetas.forEach(receta => {
        // crea un div para la tarjeta de receta
        const card = document.createElement("div");
        card.classList.add("card");

        // crea img para la imagen de la receta
        const imagen = document.createElement("img");
        imagen.src = receta.imagen;
        imagen.alt = "Imagen de la receta";

        // Crea un div para los datos de la receta
        const detailsRecipe = document.createElement("div");
        detailsRecipe.classList.add("details-recipe");

        // Crea un h2 para el nombre de la receta
        const nombreReceta = document.createElement("h2");
        nombreReceta.textContent = receta.nombre;

        // Crea un p para el tiempo de preparación
        const tiempoPreparacion = document.createElement("p");
        tiempoPreparacion.textContent = "Tiempo de preparación: " + receta.tiempoPreparacion;

        // Agrega la imagen, el nombre y el tiempo de preparación a la tarjeta de receta
        card.appendChild(imagen);
        detailsRecipe.appendChild(nombreReceta);
        detailsRecipe.appendChild(tiempoPreparacion);
        card.appendChild(detailsRecipe);

        // Agrega la tarjeta de receta al contenedor de recetas
        recipesContainer.appendChild(card);
    });
});