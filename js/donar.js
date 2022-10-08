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

const donarSinDestino = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '¡Gracias por donar a nuestros refugios de animales!',
    showConfirmButton: false,
    timer: 3000
  })
}

for (const j of objetoDonacion){
    let cartaObjetosDonacion = document.createElement("div");
    if (j.id !== 99){
      cartaObjetosDonacion.innerHTML = `
      <div class="card">
        <img src="./imagenes/${j.src}.JPG" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${j.nombre}</h5>
          <p class="card-text">$${j.precio}</p>
          <p class="unidad">Unidad: ${j.unidad}</p>
          <button onclick='clickDonar(${j.id})' id="botonDonar${j.id}" class="btn btn-primary">Agregar</button>
        </div>
      </div>
      `;
        donacion.append(cartaObjetosDonacion);
    } else if (j.id === 99){
        cartaObjetosDonacion.innerHTML = `<section id="donacionSinDestino">
                                            <label>DONACIÓN SIN DESTINO</label>
                                            <input type="number" placeholder="INGRESE MONTO">
                                            <input type="submit" id="donacionSinDestino" onclick="donarSinDestino(${j.id})" class="btn btn-primary">
                                            <div class="alert alert-primary d-flex align-items-center" role="alert">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                              </svg>
                                              <div>
                                                El refugio de animales determinará el destino de su donación.
                                              </div>
                                            </div>
                                          </section>
        `;
        donacion.append(cartaObjetosDonacion)
    }
}

let arrObjeto = []

function clickDonar(id) {
    const objeto = objetoDonacion.find((y) => y.id === id);
    arrObjeto.push(objeto)
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
};

let clickBotonDonar = document.getElementsByTagName("botonDonar[objetoDonacion.id]");
clickBotonDonar.addEventListener("onclick", clickDonar);


let DonarSinDestino = document.getElementsByTagName("donacionSinDestino[objetoDonacion.id]");
DonarSinDestino.addEventListener("onclick", donarSinDestino);

