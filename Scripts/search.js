const foods = [
    {
        nombre: 'Arroz con pollo',
        ingredientes: ['arroz', 'pollo', 'caldo', 'morron', 'cebolla', 'ajo', 'pure de tomate', 'sal', 'pimienta']

    },

    {
        nombre: 'Arroz Frito con Camarones',
        ingredientes: ['aceite', 'camarones', 'ajo', 'cebolla de verdeo', 'jengibre', 'huevos', 'arvejas', 'arroz', 'salsa de soja']
    },

    {
        nombre: 'Estofado de carne: ',
        ingredientes: ['Carne', 'tomate', 'morron', 'cebolla', 'ajo', 'vino', 'perejil', 'laurel', 'sal', 'pimienta']
    },

    {
        nombre: 'Kebab de carne con hierbas',
        ingredientes: ['carne picada', 'perejil', 'ajo', 'sal', 'pimienta', 'comino', 'aceite'
        ]
    },
    {
        nombre: 'Pasta a la carbonara',
        ingredientes: ['pasta', 'queso parmesano', 'yema de huevo', 'pimienta negra', 'panceta']
    },
    {
        nombre: 'Sorrentinos de jamon, queso y ricota',
        ingredientes: ['harina', 'aceite', 'sal', 'huevo', 'jamin', 'ricota', 'queso rallado', 'mozzarella', 'pimienta', 'nuez moscada']
    },
    {
        nombre: 'Tarta de atun',
        ingredientes: ['morron', 'cebolla', 'ajo', 'cebolla de verdeo', 'aceite de oliva', 'sal', 'pimienta', 'huevos', 'atun', 'queso rallado', 'tapas de tarta', 'pan rallado']
    },
    {
        nombre: 'Tarta de pollo',
        ingredientes: ['pollo', 'sal', 'pimienta', 'zanahoria', 'morron', 'cebolla', 'cebolla de verdeo', 'ajo', 'aceite de oliva', 'huevos', 'queso rallado', 'tapas de tarta', 'pan rallado']
    },
    {
        nombre: 'Sandwich BLT',
        ingredientes: ['bacon', 'pan', 'mayonesa', 'tomate', 'lechuga', 'sal' , 'pimienta', 'palta']
    },
    {
        nombre: 'Sandwich de pollo con salsa cesar',
        ingredientes: ['pan', 'manteca', 'pollo', 'huevo', 'pan rallado', 'sal', 'pimienta', 'lechuga', 'queso parmesano', 'salsa cesar']
    },
    {
        nombre: 'Cebollitas francesas glaseadas',
        ingredientes: [ 'cebollines', 'manteca', 'aceite de oliva', 'sal', 'azucar', 'vinagre', 'vino dulce', 'agua']
    },
    {
        nombre: ' Champiñones con jamón y ajo salteados',
        ingredientes: ['champiñones', 'ajo', 'aceite de oliva', 'jamon serrano', 'pimienta', 'sal', 'perejil']
    },
    {
        nombre: 'Budin de zanahoria',
        ingredientes: [ 'leche condensada', 'harina', 'zanahoria',' aceite', 'levadura quimica', 'huevos', 'canela', 'jengibre', 'nuez moscada']
    },
    {
        nombre: 'Brownie de limon',
        ingredientes: ['manteca', 'azucar', 'huevos', 'harina', 'jugo de limon', 'ralladura de limon', 'limon', 'azucar glas']
    },
    {
        nombre: 'Pan de leche',
        ingredientes: [ 'agua', 'levadura seca', 'leche', 'azucar', 'sal', 'manteca', 'harina']
    },
    {
        nombre: 'Torta Oreo',
        ingredientes: [ 
            'oreos', 'manteca', 'gelatina', 'crema para batir', 'queso crema', 'azucar']
    }
    
]

const foodsClone = [...structuredClone(recetas)]

inputValue = document.getElementById('search').value 

const filteredFoods = foodsClone.filter ( (food) => {
    let resultadoingredientes = foodsClone.ingredientes.tolowerCase().incluse(inputValue.tolowerCase())
    let resultadonombres = foodsClone.ingredientes.tolowerCase().incluse(inputValue.tolowerCase())
})

