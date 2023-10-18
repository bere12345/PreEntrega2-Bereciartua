/* function calcularinteres (cantidadDeCuotas , tasaDeInteres){
    let interes1 = 0
    for ( let i = 0 ; i< cantidadDeCuotas; i++){
        interes1 += (interes1 * 1) * tasaDeInteres 
    }
    return interes1
}


function calcularInteres (cuotas){
    let valorInteres = 0
    if (cuotas === 1){
        valorInteres = 0
    } else if (cuotas === 2){
        valorInteres = 0.10;
    }else if (cuotas === 3){
        valorInteres = 0.15;
    }
    return valorInteres
}

// Función para calcular el interés compuesto
function calcularInteresCompuesto(cantidadCuotas, tasaInteres) {
    let interesAcumulado = 0;
    for (let i = 0; i < cantidadCuotas; i++) {
        interesAcumulado += (interesAcumulado + 1) * tasaInteres;
    }
    return interesAcumulado;
}
// Función para calcular la tasa de interés según la cantidad de cuotas
function calcularTasaInteres(cuotas) {
    let tasaInteres = 0; // Tasa de interés por defecto
    if (cuotas === 2) {
        tasaInteres = 0.10; // Tasa de interés para 2 cuotas
    } else if (cuotas === 3) {
        tasaInteres = 0.15; // Tasa de interés para 3 cuotas
    }
    return tasaInteres;
}


const productos = [
    { nombre: "remeras", precioUnitario: 5000 },
    { nombre: "buzos", precioUnitario: 10000 },
    { nombre: "pantalones", precioUnitario: 15000 },
];

// Función para obtener el precio unitario de un producto
function obtenerPrecioUnitario(producto) {
    const productoEncontrado = productos.find((p) => p.nombre === producto);
    return productoEncontrado ? productoEncontrado.precioUnitario : 0;
}

// Función de orden superior que calcula el precio total de la compra
function calcularPrecioTotal(producto, cantidad, cuotas) {
    const precioUnitario = obtenerPrecioUnitario(producto);

    if (precioUnitario === 0) {
        return 0; // Producto no válido
    }

    let tasaInteres = 0; // Tasa de interés por defecto
    if (cuotas === 2) {
        tasaInteres = 0.10; // Tasa de interés para 2 cuotas
    } else if (cuotas === 3) {
        tasaInteres = 0.15; // Tasa de interés para 3 cuotas
    }

    const precioTotal = precioUnitario * cantidad * (1 + calcularInteresCompuesto(cuotas, tasaInteres));

    return precioTotal;
}

// Función para buscar un producto por nombre
function buscarProducto(nombre) {
    return productos.find((producto) => producto.nombre === nombre);
}

// Función para filtrar productos por precio unitario
function filtrarProductosPorPrecio(precioMaximo) {
    return productos.filter((producto) => producto.precioUnitario <= precioMaximo);
}

// Función principal que maneja la compra
function comprarProducto() {
    const producto = prompt("Elija un producto: remeras, buzos o pantalones");
    const cantidad = parseInt(prompt("Ingrese la cantidad a comprar"));
    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (hasta 3)"));

    const precioTotal = calcularPrecioTotal(producto, cantidad, cuotas);

    if (precioTotal === 0) {
        alert("Producto no válido");
        return;
    }

    console.log(`Usted compró ${cantidad} ${producto} en ${cuotas} cuotas.`);
    console.log(`Precio unitario: ${obtenerPrecioUnitario(producto)}`);
    console.log(`Tasa de interés: ${(calcularTasaInteres(cuotas) * 100).toFixed(2)}%`);
    console.log(`Total a pagar: ${precioTotal.toFixed(2)}`);

    alert(`El total de su compra es: ${precioTotal.toFixed(2)}`);
}

// Ejemplos de uso de las funciones de búsqueda y filtrado
console.log(buscarProducto("remeras")); 
console.log(buscarProducto("buzos"));
console.log(buscarProducto("pantalones"));// Buscar información sobre las remeras
console.log(filtrarProductosPorPrecio(10000)); // Filtrar productos con precio menor o igual a 10000

comprarProducto(); */


let usuario1 = "tomas"
let usuario2 = null

if (usuario1){
    console.log(usuario1);
}else{
    console.log("usuario no existente");
}