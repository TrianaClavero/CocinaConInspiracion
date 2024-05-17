document.addEventListener('DOMContentLoaded', () => {
    const receta = {
        nombre: "Arroz con pollo",
        imagen: "images/Arroz/arroz-con-pollo.jpg",
        tiempoPreparacion: "30 minutos",
        ingredientes: [
            "200 gr de arroz",
            "600 gr de Pollo",
            "500 ml de Caldo",
            "Medio morron",
            "1 cebolla",
            "2 dientes de ajo",
            "100 ml de pure de tomate",
            "200 gr de arvejas",
            "Sal",
            "Pimienta"
        ],
        preparacion: [
            "Cortar en cubitos el morron, la cebolla y el ajo.",
            "Rehogar las verduras con un chorrito de aceite y cuando la cebolla esté transparente añadir el pollo.",
            "Salpimentar a gusto y una vez que el pollo esté cocido agregar el arroz con el caldo, el puré de tomate y las arvejas.",
            "Dejar cocinar durante 18 minutos a fuego medio y evitar que se seque agregando más caldo si es necesario."
        ],
        url: 'arroz_con_pollo.html'
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