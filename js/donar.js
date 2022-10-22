/*SECCION DONAR*/

let objetoDonacion = [
  {id: 1, nombre: "Alimento de perro adulto raza mediana y grande", precio: 578, unidad: "1 kg", src: "comida-perro-raza-mediana-y-grande"},
  {id: 2, nombre: "Alimento de perro adulta raza pequeña", precio: 1030, unidad: "1 kg", src: "comida-perro-raza-pequeña"},
  {id: 3, nombre: "Alimento de perro cachorro", precio: 276, unidad: "1 kg", src: "comida-perro-cachorro"},
  {id: 4, nombre: "Alimento de gato adulto", precio: 260, unidad: "1 kg", src: "comida-gato-adulto"},
  {id: 5, nombre: "Alimento de gato kitten", precio: 887, unidad: "1 kg", src: "comida-gato-kitten"},
  {id: 6, nombre: "Snacks perro", precio: 151, unidad: "1", src: "snack-perro"},
  {id: 7, nombre: "Snacks gato", precio: 148, unidad: "1", src: "snack-gato"},
  {id: 8, nombre: "Bidon de piedras", precio: 686, unidad: "5.3 kg", src: "bidon-piedras"},
  {id: 9, nombre: "Kit sanitario", precio: 922, unidad: "1", src: "kit-sanitario"},
  {id: 10, nombre: "Comedero / Bebedero ", precio: 300, unidad: "1", src: "comedero-bebedero"},
  // {id: 99, descripcion: "Donación sin destino"}
];

let donacion = document.getElementById("cartasObjetos");

// const traerDatosObjetos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(objetoDonacion);
//     }, 2000);
//   });
// };

// traerDatosObjetos()
// .then(response => {
//   response.forEach(i => {
//     let cartaObjetosDonacion = document.createElement("div");
//     if (i.id !== 99){
//       cartaObjetosDonacion.innerHTML = `
//       <div class="card">
//         <img src="./imagenes/${i.src}.JPG" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${i.nombre}</h5>
//           <p class="card-text">$${i.precio}</p>
//           <p class="unidad">Unidad: ${i.unidad}</p>
//           <button onclick='clickDonar(${i.id})' id="botonDonar${i.id}" class="btn btn-primary">Agregar</button>
//         </div>
//       </div>
//       `;
//         donacion.append(cartaObjetosDonacion);
//     } else if (i.id === 99){
//         cartaObjetosDonacion.innerHTML = `<section id="donacionSinDestino">
//                                             <label>DONACIÓN SIN DESTINO</label>
//                                             <input type="number" placeholder="INGRESE MONTO" id="valorDonacion">
//                                             <input type="submit" id="donacionSinDestino" onclick="donarSinDestino(${i.id})" class="btn btn-primary">
//                                             <div class="alert alert-primary d-flex align-items-center" role="alert">
//                                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
//                                                 <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//                                               </svg>
//                                               <div>
//                                                 El refugio de animales determinará el destino de su donación.
//                                               </div>
//                                             </div>
//                                           </section>
//         `;
//         donacion.append(cartaObjetosDonacion)
//     }
//   });
// })
// .catch(error => console.log(error));

// const donarSinDestino = () => {
//   localStorage.setItem("Donación libre", document.getElementById("valorDonacion").value);
//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: '¡Gracias por donar a nuestros refugios de animales!',
//     showConfirmButton: false,
//     timer: 3000
//   })
// }

// let arrObjeto = []

// let cuerpoTabla = document.getElementById("cuerpoTabla")
// let elementos = document.createElement("tr");
// let pieTabla = document.getElementById("pieTabla")
// let pie = document.createElement("tr")
// let nCantidad = Object.values(arrObjeto).reduce((acc, {cantidad})=> acc + cantidad, 0)
// let nPrecio = Object.values(arrObjeto).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

// const hacerPie = () => {
//   if(arrObjeto.length === 0) {
//     pie.innerHTML = `<th scope="row" colspan="5">Carro vacíoooo</th>`
//   } else {
//     pie.innerHTML = `
//   <th>Total productos</th>
//   <th></th>
//   <th>${nCantidad}</th>
//   <th>
//     <button id="vaciarTabla">VACIAR</button>
//     <button id="donarTabla">COMPRAR</button>
//   </th>
//   <th>$${nPrecio}</th>
//   `;
//   }
//   pieTabla.append(pie)
// }
// hacerPie()

// let clickBotonDonar = document.getElementsByTagName("botonDonar[objetoDonacion.id]");
// let DonarSinDestino = document.getElementsByTagName("donacionSinDestino[objetoDonacion.id]");

// const clickTabla = (id, nombre, cantidad, precio) => {
//       elementos.innerHTML= `
//       <th>${id}</th>
//       <th>${nombre}</th>
//       <th>${cantidad}</th>
//       <th>
//         <button id="botonRestar" onclick="">-</button>
//         <button id="botonSumar" onclick="">+</button>
//       </th>
//       <th>${precio}</th>
//       `;
//       cuerpoTabla.appendChild(elementos);
//       pieTabla.remove();
// }

// const clickDonar = (id) => {
//     const objeto = objetoDonacion.find((y) => y.id === id);
//     arrObjeto.push(objeto);
//     localStorage.setItem("Donacion", JSON.stringify(arrObjeto));

//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })  
//       Toast.fire({
//         icon: 'success',
//         title: 'Producto agregado'
//       });

//     clickTabla(objeto.id, objeto.nombre, 1, objeto.precio);
//     // var clon = elementos.content.cloneNode(true);
//     // document.body.appendChild(clon);
// };

// addEventListener("onclick", clickDonar);
// addEventListener("onclick", donarSinDestino);

//////////////
////////////
/////////////

let contenedorProductos = document.getElementById('contenedor-productos')
let contenedorCarrito = document.getElementById('carrito-contenedor')
let botonVaciar = document.getElementById('vaciar-carrito')
let donarCarrito = document.getElementById("donar-carrito")
let contadorCarrito = document.getElementById('contadorCarrito')
let cantidad = document.getElementById('cantidad')
let precioTotal = document.getElementById('precioTotal')
let cantidadTotal = document.getElementById('cantidadTotal')

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
  const div = document.createElement('div')
  div.classList = ("producto")
  div.innerHTML = `
  <img src="./imagenes/${i.src}.JPG" alt= "">
  <h3>${i.nombre}</h3>
  <p class="card-text">$${i.precio}</p>
  <p class="card-text"><small>Unidad: ${i.unidad}</small></p>
  <button id="agregar${i.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  `
  contenedorProductos.appendChild(div)
  const boton = document.getElementById(`agregar${i.id}`)
  boton.addEventListener('click', () => {
      agregarAlCarrito(i.id)
  })
})


const agregarAlCarrito = (prodId) => {
  const existe = carrito.some (prod => prod.id === prodId)
  if (existe){
      const prod = carrito.map (prod => {
          if (prod.id === prodId){
              prod.cantidad++
          }
      })
  } else {
      const item = objetoDonacion.find((prod) => prod.id === prodId)
      carrito.push(item)
  }
  actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)  
  actualizarCarrito() 
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""
  carrito.forEach((prod) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio: $${prod.precio}</p>
      <p>Cantidad: <span id="cantidad"> ${prod.cantidad} </span></p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
      `
      contenedorCarrito.appendChild(div)
      localStorage.setItem('carrito', JSON.stringify(carrito))
  })
  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}