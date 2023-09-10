    // Función para calcular cuotas con intereses 
    function calcularInteresCompuesto(cantidadCuotas, tasaInteres) {
        let interesAcumulado = 0;
        for (let i = 0; i < cantidadCuotas; i++) {
            interesAcumulado += (interesAcumulado + 1) * tasaInteres;
        }
        return interesAcumulado;
    }

// Función principal que maneja la compra
function comprarProducto() {
    const producto = prompt("Elija un producto: remeras, buzos o pantalones");
    const cantidad = parseInt(prompt("Ingrese la cantidad a comprar"));
    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (hasta 3)"));

    let precioUnitario = 0; // Agregar esta línea

    switch (producto) {
        case "remeras":
            precioUnitario = 5000;
            break;
        case "buzos":
            precioUnitario = 10000;
            break;
        case "pantalones":
            precioUnitario = 15000;
            break;
        default:
            alert("Producto no válido");
            return;
    }

    if (cuotas < 1 || cuotas > 3) {
        alert("Número de cuotas no válido. Debe ser entre 1 y 3.");
        return;
    }

    // Define la tasa de interés según la cantidad de cuotas
    let tasaInteres = 0; // Tasa de interés por defecto
    if (cuotas === 2) {
        tasaInteres = 0.10; // Tasa de interés para 2 cuotas
    }  if (cuotas === 3) {
        tasaInteres = 0.15; // Tasa de interés para 3 cuotas
    }

    // Calcula el precio total con intereses compuestos
    const precioTotal = precioUnitario * cantidad * (1 + calcularInteresCompuesto(cuotas, tasaInteres));

    console.log (`Usted compró ${cantidad} ${producto} en ${cuotas} cuotas.`);
    console.log(`Precio unitario: ${precioUnitario}`);
    console.log(`Tasa de interés: ${(tasaInteres * 100).toFixed(2)}%`);
    console.log(`Total a pagar: ${precioTotal.toFixed(2)}`);

    alert(`El total de su compra es: ${precioTotal.toFixed(2)}`);
}

comprarProducto();
