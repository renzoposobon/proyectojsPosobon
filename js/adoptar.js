// SECCION ADOPTAR
let mascotasEnAdopcion = [
    {id: 1, nombre: "Rocco", edad: "10 años", ciudad: "Godoy Cruz"},
    {id: 2, nombre: "Luna", edad: "7 años", ciudad: "Godoy Cruz"},
    {id: 3, nombre: "Simur", edad: "11 años", ciudad: "Guaymallen"},
    {id: 4, nombre: "Pelu", edad: "5 años", ciudad: "Las Heras"},
    {id: 5, nombre: "Milaneso", edad: "6 años", ciudad: "Las Heras" },
    {id: 6, nombre: "Memonia", edad: "2 años", ciudad: "Las Heras" },
    {id: 7, nombre: "Felisa", edad: "1 año y medio", ciudad: "Ciudad" }
];

let divPerros = document.getElementById("cartasMascotas");

// for (const i of mascotasEnAdopcion) {
//     let cartaPerro = document.createElement("div");
//     cartaPerro.className = ("card")
//     cartaPerro.innerHTML = `
//     <img src="./imagenes/${i.nombre}.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${i.nombre}</h5>
//       <p class="card-text">${i.edad}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>

//     `;
//     divPerros.append(cartaPerro);
// };

let sumGC = 0;
let sumLH = 0;
let sumG = 0;
let sumCM = 0;

fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(i => {
    let cartaPerro = document.createElement("div");
    cartaPerro.innerHTML = `
    <div class="card">
        <img src="./imagenes/${i.nombre}.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${i.nombre}</h5>
          <p class="card-text">${i.edad}</p>
          <button onclick='clickAdoptar(${i.id})' id="botonAdoptar${i.id}" class="btn btn-primary">Adoptar</button>
        </div>
      </div>
    `;
    divPerros.append(cartaPerro);
  });
})

// const traerDatos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(mascotasEnAdopcion);
//     }, 3000);
//   });
// };

// traerDatos()
// .then(response => {
//   response.forEach(i => {
//     let cartaPerro = document.createElement("div");
//     cartaPerro.innerHTML = `<img src="./imagenes/${i.nombre}.jpeg"></img>
//                                 <h4>${i.nombre}</h4>
//                                 <b>${i.edad}</b>
//                                  <p>${i.ciudad}</p>
//                                  <button onclick='clickAdoptar(${i.id})' id="botonAdoptar${i.id}">Adoptar</button>
    
//          `;

//          divPerros.append(cartaPerro);
//   });
// })
// .catch(error => console.log(error));

for (const i of mascotasEnAdopcion) {
    i.ciudad === "Godoy Cruz" ? sumGC++ : i.ciudad === "Ciudad" ? sumCM++ : i.ciudad === "Las Heras" ? sumLH++ : i.ciudad === "Guaymallen" ? sumG++ : 0
};

let secSumador = document.createElement("seccion");
secSumador.className = ("seccionMascotas")
secSumador.innerHTML = `    <label>Mascotas en Godoy Cruz: ${sumGC}
                            <label>Mascotas en Guaymallén: ${sumG}
                            <label>Mascotas en Ciudad: ${sumCM}
                            <label>Mascotas en Las Heras: ${sumLH}
`
divPerros.append(secSumador);

let mascotasZonaCentro = [];
mascotasZonaCentro.push(sumCM);
mascotasZonaCentro.push(sumGC);


let mascotasZonaRural = [];
mascotasZonaRural.push(sumG);
mascotasZonaRural.push(sumLH);

let mascotasZonasTotal = [...mascotasZonaCentro, ...mascotasZonaRural];
let numMascotas = mascotasZonasTotal.reduce((acc, el) => acc + el);

let textoCantidad = document.getElementById("cantidadMascotas");
textoCantidad.innerText = `Cantidad de mascotas a adoptar: ${numMascotas}`;


const clickAdoptar = async (id) => {
    const mascota = mascotasEnAdopcion.find((x) => x.id === id)
    localStorage.setItem("Adopcion", JSON.stringify(mascota));
    const { value: email } = await Swal.fire({
      title: 'Ingrese su email',
      input: 'email',
      // inputLabel: 'Your email address',
      inputPlaceholder: '@gmail.com'
    })
    
    if (email) {
      Swal.fire(`Entered email: ${email}`)
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: `¿Está seguro que desea adoptar a ${mascota.nombre}?`,
        // text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, deseo adoptar!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Usted ha adoptado una mascota ❤',
            '¡Un refugio de animales se contactará con usted!',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Adopción cancelada',
            // 'Your imaginary file is safe :)',
            // 'error'
          )
        }
      })
};

let clickBotonAdoptar = document.getElementsByTagName("botonAdoptar[perros.id]");
clickBotonAdoptar.addEventListener("click", clickAdoptar);
