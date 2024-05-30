document.addEventListener('DOMContentLoaded', () => {
    const receta = {
        nombre: "Sandwich de pollo con salsa César",
        imagen: "images/Sandwiches/sandwich-de-pollo-con-salsa-cesar.jpg",
        tiempoPreparacion: "30 minutos",
        ingredientes: [
            "Pan de molde con semillas o integral",
            "Manteca",
            "Una pechuga de pollo",
            "Un huevo",
            "Pan rallado",
            "Lechuga",
            "Queso parmesano en fetas",
            "Sal",
            "Pimienta",
            "Salsa César"
        ],
        preparacion: [
            "Cortar la pechuga de pollo en filetes y salpimentar.",
            "Pasar la pechuga por el huevo batido condimentado y por el pan rallado. Freir y reservar.",
            "Untar el pan con un poquito de manteca y tostar en la plancha o sarten hasta que se dore.",
            "Finalmente, montar los sandwiches, poniendo entre dos rebanadas de pan el pollo, un puñadito de lechuga finamente cortada, las fetas de queso parmesano y un poco de salsa."
        ],
        url: 'sandwich_de_pollo_cesar.html'
    };
    const recetaContainer = document.getElementById('receta');
    
    const nombreReceta = document.createElement('h1');
    nombreReceta.textContent = receta.nombre;
    nombreReceta.classList.add('title');
    recetaContainer.appendChild(nombreReceta);
    
    const imagenReceta = document.createElement('img');
    imagenReceta.src = receta.imagen;
    imagenReceta.alt = `Imagen de ${receta.nombre}`;
    recetaContainer.appendChild(imagenReceta);
    
    
    const tiempoPreparacionReceta = document.createElement('p');
    tiempoPreparacionReceta.innerHTML = `<strong>Tiempo de preparación:</strong> ${receta.tiempoPreparacion}`;
    tiempoPreparacionReceta.classList.add('tiempoPreparacionReceta');
    recetaContainer.appendChild(tiempoPreparacionReceta);
    
    
    const ingredientesTitulo = document.createElement('h2');
    ingredientesTitulo.textContent = 'Ingredientes';
    ingredientesTitulo.classList.add('ingredientesTitulo');
    recetaContainer.appendChild(ingredientesTitulo);
    
    const ingredientesLista = document.createElement('ul');
    ingredientesLista.classList.add('ingredientesLista');
    receta.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientesLista.appendChild(li);
        li.classList.add('li');
    });
    recetaContainer.appendChild(ingredientesLista);
    
    
    const preparacionTitulo = document.createElement('h2');
    preparacionTitulo.textContent = 'Preparación';
    preparacionTitulo.classList.add('preparacionTitulo');
    recetaContainer.appendChild(preparacionTitulo);
    
    const preparacionLista = document.createElement('ol');
    receta.preparacion.forEach(paso => {
        const li = document.createElement('li');
        li.textContent = paso;
        li.classList.add('li');
        preparacionLista.appendChild(li);
    });
    recetaContainer.appendChild(preparacionLista);
});