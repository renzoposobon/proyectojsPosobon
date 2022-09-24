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

for (const j of objetoDonacion){
    let cartaObjetosDonacion = document.createElement("div");
    if (j.id !== 99){
        cartaObjetosDonacion.innerHTML = `
                                        <img src="./imagenes/${j.src}.jpg"></img>
                                        <h4>${j.nombre}</h4>
                                        <p>$${j.precio}</p>
                                        <p class="unidad">Unidad: ${j.unidad}</p>
                                        <button onclick='restarCarrito(${j.id})' id="botonDonarA${j.id}">-</button>
                                        <button onclick='sumarCarrito(${j.id})' id="botonDonarB${j.id}">+</button>
        `;
        donacion.append(cartaObjetosDonacion);
    } else if (j.id === 99){
        cartaObjetosDonacion.innerHTML = `
                                            <label>DONACIÓN SIN DESTINO</label>
                                            <input type="number" placeholder="INGRESE MONTO">
                                            <input type="submit" id="donacionSinDestino" onclick="clickDonar(${j.id})">
        `;
        donacion.append(cartaObjetosDonacion)
    }
}

let arrObjeto = []

// function clickDonar(id) {
//     const objeto = objetoDonacion.find((y) => y.id === id);
//     alert(`Gracias por donar a nuestros refugios de animales!`);
//     arrObjeto.push(objeto)
//     localStorage.setItem("Donacion", JSON.stringify(arrObjeto));
// };

function sumarCarrito(id) {
    let sumado = objetoDonacion.find((z) => z.id === id);
    arrObjeto.push(sumado);
    localStorage.setItem("Donacion", JSON.stringify(arrObjeto));
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Producto agregado'
      })
}

function restarCarrito(id) {
    let restado = objetoDonacion.find((w) => w.id === id);
    indice = 
    arrObjeto.splice(indice, 0);
    localStorage.removeItem(restado)
}

let clickBotonDonarB = document.getElementsByTagName("botonDonarB[objetoDonacion.id]");
clickBotonDonarB.addEventListener("click", sumarCarrito);

let clickBotonDonarA = document.getElementsByTagName("botonDonarA[objetoDonacion.id]");
clickBotonDonarA.addEventListener("click", restarCarrito);



// for (const j of objetoDonacion){
//     let cartaObjetosDonacion = document.createElement("div")
//     cartaObjetosDonacion.innerHTML = `
//                                     <img src="./imagenes/${j.src}.jpg"></img>
//                                     <h4>${j.nombre}</h4>
//                                     <p>$${j.precio}</p>
//                                     <p class="unidad">Unidad: ${j.unidad}</p>
//                                     <button onclick='clickDonar(${j.id})' id="botonDonar${j.id}">Agregar</button>
//     `;
//     donacion.append(cartaObjetosDonacion);
// }


// let ingreso
// let costo;
// let producto;
// let codigoDescuento = 589125;

// class Personas {
//     constructor(producto, costo){
//         this.producto = producto,
//         this.costo = costo
//     }
// }

// var arr = []

// for (let i = 0; i < 3; i++) {
//     let ingreso = prompt(`Ingresar producto al carrito \n1- Combo perro \n2- Combo gato \n3-Combo mixto`);
//     if (ingreso == 1){
//         costo = 10;
//         producto = "Combo perro";
//         descuento()
//     } else if (ingreso == 2){
//         costo = 8;
//         producto = "Combo gato";
//         descuento()
//     } else if (ingreso == 3){
//         producto = "Combo mixto";
//         costo = 15;
//         descuento()
//     } else {
//         alert("Opcion incorrecta")
//     }
//     var objeto1 = new Personas(producto, costo)
//     arr.push(objeto1)
//     alert(`Su ${objeto1.producto} cuesta ${objeto1.costo}`)
// }


// for (let i = 0; i < arr.length; i++){
//     alert(`OBJETO ${i+1} \nPRODUCTO ${arr[i].producto} \nPRECIO ${arr[i].costo}`)
// }

// function descuento(){
//     let descuento = prompt("Posee algun descuento?")
//     if (descuento == 'si' || (descuento) == "SI" || (descuento) == "Si"){
//         let ingresoDescuento = parseInt(prompt("Ingrese codigo"))
//         if (ingresoDescuento == codigoDescuento){
//             alert("Su codigo ha sido aceptado!")
//             costo = costo - 2
//             // alert(`El ${producto} cuesta $${costo}`)
//         } else {
//             alert('codigo invalido')
//         }
//     } else if (descuento == 'no' || descuento == "NO" || descuento == "No"){
//         // alert(`El ${producto} cuesta $${costo}`)
//     }
//     else {
//         alert("Opcion incorrecta")
//     }
// }

// let precioTotal = arr.reduce((acc, e) => acc + e.costo, 0)
// alert(`El precio final es de su compra es de $${precioTotal}`)

// // DOM
// let donar = document.getElementById("donar")
// for (const i of arr) {
//     let contenedor = document.createElement("div")
//     contenedor.innerHTML = `<h3>${i.producto}</h3>
//                             <p class="textoDonar">${i.costo}</p>`
//     donar.append(contenedor)
// }

// let mensajePrecioTotal = document.createElement("h3")
// mensajePrecioTotal.innerText = `El costo total es de ${precioTotal}`
// donar.append(mensajePrecioTotal)

// // EVENTO SECCION DONAR
// let botonDonar = document.getElementById("botonDonar")
// botonDonar.addEventListener("click", clickDonar)
// function clickDonar(){
//     alert("Gracias por donar!");
// }

// // EVENTO SECCION SERVICIO DE PASEO DE PERROS
// let botonPaseo = document.getElementById("botonContactarPaseo")
// botonPaseo.addEventListener("click", clickPaseo)
// function clickPaseo (i) {
//     i.preventDefault()
//     alert("Gracias por elegir nuestro servicio de paseo")
// }

// // STORAGE
// localStorage.setItem("carrito", JSON.stringify(arr))

// let obtenerStorage = localStorage.getItem("carrito")
// console.log(JSON.parse(obtenerStorage));