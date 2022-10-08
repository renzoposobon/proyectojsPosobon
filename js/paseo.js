let arrPaseadoresEste = [
    {ciudad: "San Martin", nombre: "Juan", src: "./imagenes/juan.jpg", p1: "Edad: 31 años", p2: "3 años de experiencia"},
    {ciudad: "La Paz", nombre: "Sara", src: "./imagenes/sara.jpg", p1: "Edad: 28 años", p2: "5 años de experiencia"},
    {ciudad: "Rivadavia", nombre: "Denis", src: "./imagenes/denis.jpg", p1: "Edad: 30 años", p2: "2 años de experiencia"}
]

let paseadoresCiudad = {nombre: "Fabián y Nicolás", src: "./imagenes/fabian-y-nicolas.jpg", p1: "Edad: 29 años", p2: "4 años de experiencia"};
let paseadoresGodoyCruz = {nombre: "Sabrina", src: "./imagenes/sabrina.jpg", p1: "19 años", p2: "Primer año de experiencia"}
let paseadoresMaipu = {nombre: "Ruben", src: "./imagenes/ruben.jpg", p1: "32 años", p2: "2 años de experiencia"}

let paseadores = document.getElementById("paseadores")
let cartaPaseadores = document.createElement("div")

const buscador = () => {
    for (const i of arrPaseadoresEste) {
        switch(dptos.options[dptos.selectedIndex].value) {
            case "San Martin":
            case "La Paz":
            case "Junin":
            case "Rivadavia":
            case "Santa Rosa":
                cartaPaseadores.className = ("cartaPaseadores");
                cartaPaseadores.innerHTML = `
                <div class="card">
                <img src="${i.src}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${i.nombre}</h5>
                  <p class="card-text">${i.p1}</p>
                  <p class="unidad"><small>${i.p2}</small></p>
                  <button class="btn btn-primary">Contactar</button>
                </div>
              </div>
              `;
                paseadores.append(cartaPaseadores)
                break;
            case "Ciudad de Mendoza":
                cartaPaseadores.className = ("cartaPaseadores");
                cartaPaseadores.innerHTML = `
                <div class="card">
                <img src="${paseadoresCiudad.src}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${paseadoresCiudad.nombre}</h5>
                  <p class="card-text">${paseadoresCiudad.p1}</p>
                  <p class="unidad"><small>${paseadoresCiudad.p2}</small></p>
                  <button class="btn btn-primary">Contactar</button>
                </div>
              </div>
              `;
                paseadores.append(cartaPaseadores)
                break;
            case "Godoy Cruz":
                cartaPaseadores.className = ("cartaPaseadores");
                cartaPaseadores.innerHTML = `
                <div class="card">
                <img src="${paseadoresGodoyCruz.src}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${paseadoresGodoyCruz.nombre}</h5>
                  <p class="card-text">${paseadoresGodoyCruz.p1}</p>
                  <p class="unidad"><small>${paseadoresGodoyCruz.p2}</small></p>
                  <button class="btn btn-primary">Contactar</button>
                </div>
              </div>
              `;
                paseadores.append(cartaPaseadores)
                break;
                case "Maipu":
                    cartaPaseadores.className = ("cartaPaseadores");
                    cartaPaseadores.innerHTML = `
                    <div class="card">
                    <img src="${paseadoresMaipu.src}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${paseadoresMaipu.nombre}</h5>
                      <p class="card-text">${paseadoresMaipu.p1}</p>
                      <p class="unidad"><small>${paseadoresMaipu.p2}</small></p>
                      <button class="btn btn-primary">Contactar</button>
                    </div>
                  </div>
                  `;
                    paseadores.append(cartaPaseadores)
                    break;
            default:
                cartaPaseadores.className = ("cartaSinPaseadores");
                cartaPaseadores.innerHTML = `
                <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                    <div class="card-header">😕</div>
                        <div class="card-body">
                            <h5 class="card-title">SIN PASEADORES DISPONIBLES</h5>
                            <p class="card-text">Lo siento, en este Departamento no hay paseadores disponibles. ¡Intenta con el próximo más cercano!</p>
                        </div>
                    </div>
                `;
                paseadores.append(cartaPaseadores)
                break;
        } 
    }
}

addEventListener("change", buscador);

