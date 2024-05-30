document.addEventListener('DOMContentLoaded', () => {
    const receta = {
        nombre: "Sandwich BLT",
        imagen: "images/Sandwiches/sandwich-blt.jpg",
        tiempoPreparacion: "10 minutos",
        ingredientes: [
            "6 fetas de bacon ahumado",
            "4 rebanadas de pan blanco",
            "4 cucharadas de mayonesa",
            "Un tomate",
            "Hojas de lechuga a gusto",
            "Rodajas finas de palta (opcional)",
            "Sal",
            "Pimienta"
        ],
        preparacion: [
            "Preparar el bacon a la sarten en su propia grasa o en el microondas.",
            "Tostar las rodajas de pan. Una vez tostado untar la mayonesa en su cara interior.",
            "Colocar las hojas de lechuga bien secas, pueden ponerse enteras o cortarlas en tiras.",
            "Cubrir la lechuga con unas rodajas finas de tomate y salpimentar.",
            "Terminar colocando las fetas de bacon y las rodajas de palta con unas gotitas de limon, si opta por añadirlo a la receta.",
            "Cerrar el sandwich con la otra rebanada de pan y listo."
        ],
        url: 'sandwich_blt.html'
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