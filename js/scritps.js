// variables para el carrito y el total
let carrito = [];
let total = 0;

// función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
  // verifica si el producto ya esta en el carrito
  let productoExistente = carrito.find(item => item.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }

  // actualiza el carrito en la interfaz de usuario
  mostrarCarrito();
}

// función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
  let productoIndex = carrito.findIndex(item => item.id === id);

  if (productoIndex !== -1) {
    carrito[productoIndex].cantidad--;

    if (carrito[productoIndex].cantidad === 0) {
      carrito.splice(productoIndex, 1);
    }
  }

  // actualiza el carrito en la interfaz de usuario
  mostrarCarrito();
}

// función para mostrar el carrito en la interfaz de usuario
function mostrarCarrito() {
  let listaCarrito = document.getElementById('lista-carrito');
  let totalCarrito = document.getElementById('total-carrito');

  // limpia el contenido actual del carrito
  listaCarrito.innerHTML = '';

  // recorre el carrito y agrega cada producto
  carrito.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.nombre} x${item.cantidad} - S/ ${item.precio * item.cantidad}`;
    listaCarrito.appendChild(li);
  });

  // aca calculamos el total del carrito
  total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  totalCarrito.textContent = `S/ ${total}`;
}