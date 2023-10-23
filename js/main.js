const contenedorProductos = document.getElementById("contenedor-productos");


const botonesAgregarCarrito = document.querySelectorAll(".producto-botontes");
botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
});


function agregarAlCarrito(event) {
    const producto = JSON.parse(event.target.getAttribute("data-product"));
    const carrito = obtenerCarrito() || [];

    carrito.push(producto);
    guardarCarrito(carrito);

    alert("Producto agregado al carrito");
}


function obtenerCarrito() {
    const carritoJSON = localStorage.getItem("carrito");
    return JSON.parse(carritoJSON);
}

// Función para guardar el carrito en el Local Storage
function guardarCarrito(carrito) {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);
}