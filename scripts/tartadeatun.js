document.addEventListener('DOMContentLoaded', () => {
    const receta = {
        nombre: "Tarta de atún",
        imagen: "images/Tartas/tarta-de-atun.webp",
        tiempoPreparacion: "60 minutos",
        ingredientes: [
            "400 gr de atún en conserva escurrido",
            "Una cebolla grande",
            "3 dientes de ajo",
            "Un morron rojo",
            "Un morron verde",
            "Una cebolla de verdeo",
            "4 huevos hervidos",
            "2 Pascualinas (Tapas de tarta)",
            "Un huevo batido para pintar",
            "Sal",
            "Pimienta"
        ],
        preparacion: [
            "Cortar los pimientos, la cebolla y el ajo en cubitos pequeños.",
            "En una sartén u olla, rehogar las verduras con un chorrito de aceite.",
            "Cuando la cebolla esté transparente, apagar el fuego y agregar los huevos hervidos cortados en cubitos.",
            "Salpimentar a gusto, incorporar el atún y mezclar bien.",
            "Precalentar el horno a temperatura media.",
            "En un molde o placa aceitada y enharinada, desplegar una de las masas de pascualina.",
            "Incorporar el relleno de verduras, huevos y atún.",
            "Cubrir con la otra masa de pascualina y hacer el repulgue en los bordes para sellar.",
            "Hacer unos pequeños agujeros con un tenedor en la parte superior de la tarta para permitir la salida del vapor durante la cocción.",
            "Llevar al horno precalentado y hornear durante 20 minutos o hasta que la masa esté dorada."
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