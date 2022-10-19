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
    {id: 99, descripcion: "Donación sin destino"}
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
const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
let donarCarrito = document.getElementById("donar-carrito")
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

donarCarrito.addEventListener("click", () => {
  // Swal.fire({
  //   title: '¡Gracias por donar a nuestros refugios de animales!',
  //   showClass: {
  //     popup: 'animate__animated animate__fadeInDown'
  //   },
  //   hideClass: {
  //     popup: 'animate__animated animate__fadeOutUp'
  //   }
  // })
  //   Swal.fire({
  //   position: 'top-end',
  //   icon: 'success',
  //   title: '¡Gracias por donar a nuestros refugios de animales!',
  //   showConfirmButton: false,
  //   timer: 3000
  // })
  Swal.fire({
    title: '¡Gracias por donar a nuestros refugios de animales!',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',

    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media.tenor.com/Y4AzOUrW5GQAAAAd/gato-moviendo-la-cabeza-al-ritmo-de-la-musica.gif")
      left top
      repeat
    `,
  })
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
objetoDonacion.forEach((i) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src="./imagenes/${i.src}.JPG" alt= "">
    <h3>${i.nombre}</h3>
    <h5 class="card-title">${i.nombre}</h5>
    <p class="card-text">$${i.precio}</p>
    <p class="unidad">Unidad: ${i.unidad}</p>
    <button id="agregar${i.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div)
    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${i.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(i.id)
        //
    })
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = objetoDonacion.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
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
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}