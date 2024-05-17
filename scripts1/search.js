const foods = [
    {
        nombre: 'Arroz con pollo',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['arroz', 'pollo', 'caldo', 'morron', 'cebolla', 'ajo', 'pure de tomate', 'sal', 'pimienta']

    },

    {
        nombre: 'Arroz Frito con Camarones',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['aceite', 'camarones', 'ajo', 'cebolla de verdeo', 'jengibre', 'huevos', 'arvejas', 'arroz', 'salsa de soja']
    },

    {
        nombre: 'Estofado de carne: ',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['Carne', 'tomate', 'morron', 'cebolla', 'ajo', 'vino', 'perejil', 'laurel', 'sal', 'pimienta']
    },

    {
        nombre: 'Kebab de carne con hierbas',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['carne picada', 'perejil', 'ajo', 'sal', 'pimienta', 'comino', 'aceite'
        ]
    },
    {
        nombre: 'Pasta a la carbonara',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['pasta', 'queso parmesano', 'yema de huevo', 'pimienta negra', 'panceta']
    },
    {
        nombre: 'Sorrentinos de jamon, queso y ricota',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['harina', 'aceite', 'sal', 'huevo', 'jamin', 'ricota', 'queso rallado', 'mozzarella', 'pimienta', 'nuez moscada']
    },
    {
        nombre: 'Tarta de atun',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['morron', 'cebolla', 'ajo', 'cebolla de verdeo', 'aceite de oliva', 'sal', 'pimienta', 'huevos', 'atun', 'queso rallado', 'tapas de tarta', 'pan rallado']
    },
    {
        nombre: 'Tarta de pollo',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['pollo', 'sal', 'pimienta', 'zanahoria', 'morron', 'cebolla', 'cebolla de verdeo', 'ajo', 'aceite de oliva', 'huevos', 'queso rallado', 'tapas de tarta', 'pan rallado']
    },
    {
        nombre: 'Sandwich BLT',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['bacon', 'pan', 'mayonesa', 'tomate', 'lechuga', 'sal' , 'pimienta', 'palta']
    },
    {
        nombre: 'Sandwich de pollo con salsa cesar',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['pan', 'manteca', 'pollo', 'huevo', 'pan rallado', 'sal', 'pimienta', 'lechuga', 'queso parmesano', 'salsa cesar']
    },
    {
        nombre: 'Cebollitas francesas glaseadas',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: [ 'cebollines', 'manteca', 'aceite de oliva', 'sal', 'azucar', 'vinagre', 'vino dulce', 'agua']
    },
    {
        nombre: ' Champiñones con jamón y ajo salteados',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['champiñones', 'ajo', 'aceite de oliva', 'jamon serrano', 'pimienta', 'sal', 'perejil']
    },
    {
        nombre: 'Budin de zanahoria',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: [ 'leche condensada', 'harina', 'zanahoria',' aceite', 'levadura quimica', 'huevos', 'canela', 'jengibre', 'nuez moscada']
    },
    {
        nombre: 'Brownie de limon',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: ['manteca', 'azucar', 'huevos', 'harina', 'jugo de limon', 'ralladura de limon', 'limon', 'azucar glas']
    },
    {
        nombre: 'Pan de leche',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: [ 'agua', 'levadura seca', 'leche', 'azucar', 'sal', 'manteca', 'harina']
    },
    {
        nombre: 'Torta Oreo',
        img: 'images/Arroz/arroz-con-pollo.jpg',
        tiempoPreparacion: '30 min',
        ingredientes: [ 'oreos', 'manteca', 'gelatina', 'crema para batir', 'queso crema', 'azucar']
    }
    
]
document.addEventListener('DOMContentLoaded', function() {
    const botonBuscar = document.getElementById('boton-buscar');

    botonBuscar.addEventListener('click', function() {
        // Obtener el valor de búsqueda
        const inputValue = document.getElementById('search').value.toLowerCase();
        const foodsClone = [...foods];
        
        const filteredFoods = foodsClone.filter((food) => {
            const resultadoNombres = food.nombre.toLowerCase().includes(inputValue);
            const resultadoIngredientes = food.ingredientes.some((ingrediente) => {
                return ingrediente.toLowerCase().includes(inputValue);
            });
            return resultadoNombres || resultadoIngredientes;

        });
        mostrarResultadosBusqueda(filteredFoods);
    });
});
        
function mostrarResultadosBusqueda(filteredFoods) {
    const resultadosBusqueda = document.getElementById('resultados-busqueda');
    resultadosBusqueda.innerHTML = '';
    resultadosBusqueda.classList.remove('oculto');
            
    if (filteredFoods.length === 0) {
        resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
        } else {
            foods.forEach(food => {
            // crea un div para la tarjeta de receta
            const card = document.createElement("div");
            card.classList.add("card-receta");
                    
            // crea img para la imagen de la receta
            const imagen = document.createElement("img");
            imagen.src = food.img;
            imagen.alt = "Imagen de la receta";
                    
            // Crea un div para los datos de la receta
            const detailsRecipe = document.createElement("div");
            detailsRecipe.classList.add("details-recipe");
                    
            // Crea un h2 para el nombre de la receta
            const nombreReceta = document.createElement("h2");
            nombreReceta.textContent = food.nombre;
                    
            // Crea un p para el tiempo de preparación
            const tiempoPreparacion = document.createElement("p");
            tiempoPreparacion.textContent = "Tiempo de preparación: " + food.tiempoPreparacion;
                    
            // Agrega la imagen, el nombre y el tiempo de preparación a la tarjeta de receta
            card.appendChild(imagen);
            detailsRecipe.appendChild(nombreReceta);
            detailsRecipe.appendChild(tiempoPreparacion);
            card.appendChild(detailsRecipe);
                    
            // Agrega la tarjeta de receta al contenedor de recetas
            resultadosBusqueda.appendChild(card);
            resultadosBusqueda.classList.remove('oculto')
            });
    }
}