// Clase Producto que representa un producto en la tienda
class Producto {
    constructor(nombre="", precio=0, categoria="") {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

// Creación de algunos productos
const productos = [
    new Producto('Camisa', 35000, 'Ropa'),
    new Producto('Remera', 25000, 'Ropa'),
    new Producto('Buzo', 50000, 'Ropa'),
    new Producto('Zapatilla', 160000, 'Calzado'),
    new Producto('Gorra', 20000, 'Accesorio'),
];

// Carrito de compras del usuario
let carrito = [];

// Función para mostrar todos los productos disponibles
function mostrarProductos() {
    alert('Productos disponibles:\n' + productos.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n'));
}

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    let continuar;
    do {
        // Mostrar los productos y sus precios
        let listaProductos = productos.map((producto, index) => `${index + 1}. ${producto.nombre} - $${producto.precio}`).join('\n');
        const eleccion = prompt(`Selecciona el producto que deseas agregar al carrito:\n${listaProductos}\n\nIngresa el número del producto:`);

        // Validar que la opción ingresada sea un número válido
        const indexProducto = parseInt(eleccion) - 1;

        if (indexProducto >= 0 && indexProducto < productos.length) {
            const productoSeleccionado = productos[indexProducto];
            carrito.push(productoSeleccionado);
            alert(`¡${productoSeleccionado.nombre} ha sido agregado al carrito!`);
        } else {
            alert('Opción no válida. No se ha agregado ningún producto.');
        }

        // Preguntar si desea agregar más productos
        continuar = prompt('¿Deseas agregar otro producto al carrito? (sí/no)').toLowerCase();
    } while (continuar === 'sí' || continuar === 'si');
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    if (carrito.length > 0) {
        alert('Tu carrito contiene:\n' + carrito.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n'));
    } else {
        alert('Tu carrito está vacío.');
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito() {
    const nombreProducto = prompt('Ingresa el nombre del producto que deseas eliminar del carrito:');
    const index = carrito.findIndex(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());

    if (index !== -1) {
        const productoEliminado = carrito.splice(index, 1);
        alert(`¡${productoEliminado[0].nombre} ha sido eliminado del carrito!`);
    } else {
        alert('Producto no encontrado en el carrito.');
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    alert(`El total de tu carrito es: $${total}`);
}

// Función para filtrar productos por categoría
function filtrarPorCategoria() {
    const categoria = prompt('¿Qué categoría te interesa? (Electrónica, Ropa, Accesorios)');
    const productosFiltrados = productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());

    if (productosFiltrados.length > 0) {
        alert('Productos disponibles en la categoría ' + categoria + ':\n' + productosFiltrados.map(p => `${p.nombre} - $${p.precio}`).join('\n'));
    } else {
        alert('No se encontraron productos en esta categoría.');
    }
}

// Menú de opciones
function menu() {
    let opcion;
    do {
        opcion = parseInt(prompt(`
            Elige una opción:
            1. Ver productos disponibles
            2. Agregar producto al carrito
            3. Ver carrito
            4. Eliminar producto del carrito
            5. Calcular total del carrito
            6. Filtrar productos por categoría
            7. Salir
        `));

        switch(opcion) {
            case 1:
                mostrarProductos();
                break;
            case 2:
                agregarAlCarrito();
                break;
            case 3:
                mostrarCarrito();
                break;
            case 4:
                eliminarDelCarrito();
                break;
            case 5:
                calcularTotal();
                break;
            case 6:
                filtrarPorCategoria();
                break;
            case 7:
                alert('¡Gracias por tiempo!');
                break;
            default:
                alert('Opción no válida. Por favor, elige nuevamente.');
        }
    } while(opcion !== 7);
}

// Iniciar el menú
menu();