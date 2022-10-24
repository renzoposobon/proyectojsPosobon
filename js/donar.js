/*SECCION DONAR*/

let objetoDonacion = [
  {id: 1, nombre: "Alimento de perro adulto raza mediana y grande", precio: 578, unidad: "1 kg", src: "comida-perro-raza-mediana-y-grande.png", cantidad: 1},
  {id: 2, nombre: "Alimento de perro adulta raza pequeña", precio: 1030, unidad: "1 kg", src: "comida-perro-raza-pequeña.png", cantidad: 1},
  {id: 3, nombre: "Alimento de perro cachorro", precio: 276, unidad: "1 kg", src: "comida-perro-cachorro.png", cantidad: 1},
  {id: 4, nombre: "Alimento de gato kitten", precio: 887, unidad: "1 kg", src: "comida-gato-kitten.png", cantidad: 1},
  {id: 5, nombre: "Alimento de gato adulto", precio: 260, unidad: "1 kg", src: "comida-gato-adulto.png", cantidad: 1},
  {id: 6, nombre: "Snacks perro", precio: 151, unidad: "1", src: "snack-perro.png", cantidad: 1},
  {id: 7, nombre: "Snacks gato", precio: 148, unidad: "1", src: "snack-gato.png", cantidad: 1},
  {id: 8, nombre: "Bidon de piedras", precio: 686, unidad: "5.3 kg", src: "bidon-piedras.png", cantidad: 1},
  {id: 9, nombre: "Kit sanitario", precio: 922, unidad: "1", src: "kit-sanitario.png", cantidad: 1},
  {id: 10, nombre: "Comedero / Bebedero ", precio: 300, unidad: "1", src: "comedero-bebedero.png", cantidad: 1},
  // {id: 99, descripcion: "Donación sin destino"}
];

let donacion = document.getElementById("cartasObjetos");

let contenedorProductos = document.getElementById('contenedor-productos')
let contenedorCarrito = document.getElementById('carrito-contenedor')
let botonVaciar = document.getElementById('vaciar-carrito')
let donarCarrito = document.getElementById("donar-carrito")
let contadorCarrito = document.getElementById('contadorCarrito')
let cantidad = document.getElementById('cantidad')
let precioTotal = document.getElementById('precioTotal')
let cantidadTotal = document.getElementById('cantidadTotal')
let palabras = document.getElementById("desc")

palabras.innerText = `
    Si querés ayudar a perros o gatos sin hogar, también tenés la opción de donar algun producto de primera necesidad a algún refugio de animales.\nEs muy sencillo: Simplemente elegí el producto, hacé click en relación a la cantidad que quieras donar, luego dirígite hacia el carrito (en el menú) y doná.
`

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})
donarCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Carrito vacío',
      text: 'Por favor, agrega un producto',
   })
  } else {
    Swal.fire({
     title: '¡Gracias por donar a nuestros refugios de animales!',
      width: 600,
      padding: '3em',
      color: '#716add',
     background: '#fff',
     backdrop: `
       rgba(0,0,123,0.4)
        url("https://media.tenor.com/Y4AzOUrW5GQAAAAd/gato-moviendo-la-cabeza-al-ritmo-de-la-musica.gif")
       left top
       repeat
     `,
     })
   }
})

objetoDonacion.forEach((i) => {
  let div = document.createElement('div')
  div.classList = ("producto")
  div.innerHTML = `
    <img src="./imagenes/${i.src}" alt= "">
    <h3>${i.nombre}</h3>
    <p class="card-text textoProductos"><small>Unidad: ${i.unidad}</small></p>
    <p class="card-text textoProductos">$${i.precio}</p>
    <button id="agregar${i.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  `;
  contenedorProductos.appendChild(div)
  let boton = document.getElementById(`agregar${i.id}`)
  boton.addEventListener('click', () => {
      agregarAlCarrito(i.id)
  })
})


const agregarAlCarrito = (prodId) => {
  let existe = carrito.some (prod => prod.id === prodId)
  if (existe){
      let prod = carrito.map (prod => {
          if (prod.id === prodId){
              prod.cantidad++
          }
      })
  } else {
      let item = objetoDonacion.find((prod) => prod.id === prodId)
      carrito.push(item)
  }
  actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
  let item = carrito.find((prod) => prod.id === prodId)
  let indice = carrito.indexOf(item)
  carrito.splice(indice, 1)  
  actualizarCarrito() 
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""
  carrito.forEach((prod) => {
      let div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio: $${prod.precio}</p>
      <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
      `
      contenedorCarrito.appendChild(div)
      localStorage.setItem('carrito', JSON.stringify(carrito))
  })
  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}