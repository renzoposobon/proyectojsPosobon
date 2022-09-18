// SECCION ADOPTAR
let mascotasEnAdopcion = [
    {id: 1, nombre: "Rocco", edad: "10 años", ciudad: "Godoy Cruz"},
    {id: 2, nombre: "Luna", edad: "7 años", ciudad: "Godoy Cruz"},
    {id: 3, nombre: "Simur", edad: "11 años", ciudad: "Guaymallen"},
    {id: 4, nombre: "Pelu", edad: "45 días", ciudad: "Las Heras"},
    {id: 5, nombre: "Milaneso", edad: "6 años", ciudad: "Las Heras" },
    {id: 6, nombre: "Memonia", edad: "2 años", ciudad: "Las Heras" },
    {id: 7, nombre: "Felisa", edad: "1 año y medio", ciudad: "Ciudad" }
];

// let gatos = [

// ];

let divPerros = document.getElementById("cartasMascotas");

for (const i of mascotasEnAdopcion) {
    let cartaPerro = document.createElement("div");
    cartaPerro.innerHTML = `<img src="./imagenes/${i.nombre}.jpeg"></img>
                            <h4>${i.nombre}</h4>
                            <b>${i.edad}</b>
                            <p>${i.ciudad}</p>
                            <button onclick='clickAdoptar(${i.id})' id="botonAdoptar${i.id}">Adoptar</button>

    `;
    divPerros.append(cartaPerro);
};

function clickAdoptar(id) {
    const mascota = mascotasEnAdopcion.find((x) => x.id === id)
    alert(`Gracias por adoptar a ${mascota.nombre}!`);
    localStorage.setItem("Adopcion", JSON.stringify(mascota));
};

let clickBotonAdoptar = document.getElementsByTagName("botonAdoptar[perros.id]");
clickBotonAdoptar.addEventListener("click", clickAdoptar);