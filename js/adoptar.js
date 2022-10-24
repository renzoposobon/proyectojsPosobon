// SECCION ADOPTAR
let mascotasEnAdopcion = [
    {nombre: "Rocco", edad: "10 años", ciudad: "Godoy Cruz", src: "Rocco.jpeg"},
    {nombre: "Luna", edad: "7 años", ciudad: "Godoy Cruz", src: "Luna.jpeg"},
    {nombre: "Simur", edad: "11 años", ciudad: "Guaymallen", src: "Simur.jpeg"},
    {nombre: "Pelu", edad: "5 años", ciudad: "Las Heras", src: "Pelu.jpeg"},
    {nombre: "Milaneso", edad: "6 años", ciudad: "Las Heras", src: "Milaneso.jpeg"},
    {nombre: "Memonia", edad: "2 años", ciudad: "Las Heras", src: "Memonia.jpeg"},
    {nombre: "Bob", edad: "3 años", ciudad: "Godoy Cruz", src: "Bob.jpeg"},
    {nombre: "Felisa", edad: "1 año", ciudad: "Ciudad", src: "Felisa.jpeg"},
    {nombre: "Munay", edad: "1 año", ciudad: "Maipú", src: "Munay.jpeg"},
    {nombre: "Munina", edad: "9 años", ciudad: "Maipú", src: "Munina.jpeg"},
    {nombre: "Chiquita", edad: "4 años", ciudad: "Maipú", src: "Chiquita.jpeg"},
    {nombre: "Odín", edad: "4 años", ciudad: "Ciudad", src: "Odin.jpeg"},
    {nombre: "Sirius", edad: "2 años", ciudad: "Maipú", src: "Sirius.jpg"},
    {nombre: "Catalina", edad: "8 años", ciudad: "Maipú", src: "Catalina.jpg"},
    {nombre: "Floricienta", edad: "1 años", ciudad: "Maipú", src: "Floricienta.jpg"},
    {nombre: "Juan", edad: "2 años", ciudad: "Maipú", src: "JuanG.jpg"},
    {nombre: "Apolo", edad: "1 año", ciudad: "Ciudad", src: "Apolo.jpeg"}
];

let divPerros = document.getElementById("cartasMascotas");

let sumGC = 0;
let sumLH = 0;
let sumG = 0;
let sumCM = 0;
let sumM = 0;

const data = fetch("./data.json")

// data
// .then(response => response.json())
// .then(data => {
//   data.forEach(i => {
//     let cartaPerro = document.createElement("div");
//     cartaPerro.innerHTML = `
//     <div class="card">
//         <img src="./imagenes/${i.src}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${i.nombre}</h5>
//           <p class="card-text">${i.edad}</p>
//           <button onclick='clickAdoptar(${i.id})' id="botonAdoptar${i.id}" class="btn btn-primary">Adoptar</button>
//         </div>
//       </div>
//     `;
//     divPerros.append(cartaPerro);
//   });
// })

const traerDatosObjetos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mascotasEnAdopcion);
      }, 2000);
    });
  };
  
traerDatosObjetos()
.then(data => {
  data.forEach(i => {
    let cartaPerro = document.createElement("div");
    cartaPerro.innerHTML = `
    <div class="card">
        <img src="./imagenes/${i.src}" class="card-img-top" alt="...">
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
.catch(error => console.log(error));

for (const i of mascotasEnAdopcion) {
  i.ciudad === "Maipú" ? sumM++ : i.ciudad === "Godoy Cruz" ? sumGC++ : i.ciudad === "Ciudad" ? sumCM++ : i.ciudad === "Las Heras" ? sumLH++ : i.ciudad === "Guaymallen" ? sumG++ : 0
}

let secSumador = document.createElement("seccion");
secSumador.className = ("seccionMascotas")
secSumador.innerHTML = `    <label>Godoy Cruz: ${sumGC}
                            <label>Maipú: ${sumM}
                            <label>Guaymallén: ${sumG}
                            <label>Ciudad: ${sumCM}
                            <label>Las Heras: ${sumLH}
`
divPerros.append(secSumador);

let mascotasZonaCentro = [];
mascotasZonaCentro.push(sumCM);
mascotasZonaCentro.push(sumGC);
mascotasZonaCentro.push(sumM);


let mascotasZonaRural = [];
mascotasZonaRural.push(sumG);
mascotasZonaRural.push(sumLH);

let mascotasZonasTotal = [...mascotasZonaCentro, ...mascotasZonaRural];
let numMascotas = mascotasZonasTotal.reduce((acc, el) => acc + el);

let textoCantidad = document.getElementById("cantidadMascotas");
textoCantidad.innerText = `Cantidad de mascotas a adoptar: ${numMascotas}`;


const clickAdoptar = async (id) => {
    // const mascota = mascotasEnAdopcion.find((x) => x.id === id)
    // localStorage.setItem("Adopcion", JSON.stringify(mascota));
    const { value: email } = await Swal.fire({
      title: 'Ingrese su email',
      input: 'email',
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
        title: `¿Está seguro que desea adoptar?`,
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
            'success',
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Adopción cancelada',
          )
        }
      })
};

let clickBotonAdoptar = document.getElementsByTagName("botonAdoptar[perros.id]");
addEventListener("onclick", clickAdoptar);