let arrPaseadoresEste = [
  {ciudad: "San Martin", nombre: "Juan", src: "./imagenes/juan.jpg", p1: "Edad: 31 años", p2: "3 años de experiencia"},
  {ciudad: "La Paz", nombre: "Sara", src: "./imagenes/sara.jpg", p1: "Edad: 28 años", p2: "5 años de experiencia"},
  {ciudad: "Rivadavia", nombre: "Denis", src: "./imagenes/denis.jpg", p1: "Edad: 30 años", p2: "2 años de experiencia"}
]
let paseadoresCiudad = {ciudad: "Ciudad de Mendoza", nombre: "Fabián y Nicolás", src: "./imagenes/fabian-y-nicolas.jpg", p1: "Edad: 29 años", p2: "4 años de experiencia"};
let paseadoresGodoyCruz = {ciudad: "Godoy Cruz", nombre: "Sabrina", src: "./imagenes/sabrina.jpg", p1: "19 años", p2: "Primer año de experiencia"}
let paseadoresMaipu = {ciudad: "Maipú", nombre: "Ruben", src: "./imagenes/ruben.jpg", p1: "32 años", p2: "2 años de experiencia"}
let arrPaseadoresGuaymallen = [
  {ciudad: "Guaymallén", nombre: "Dario", src: "./imagenes/dario.png", p1: "Edad: 34 años", p2: "5 años de experiencia"},
  {ciudad: "Guaymallén", nombre: "Nicolás", src: "./imagenes/nicolas.jpg", p1: "Edad: 25 años", p2: "Primer año de experiencia"}
]
let paseadoresSanRafael = {ciudad: "San Rafael", nombre: "Florencia", src: "./imagenes/florencia.jpg", p1: "Edad 25 años", p2: "3 años de experiencia"}
let paseadoresLujan = {ciudad: "Luján", nombre: "Federico", src: "./imagenes/federico.jpeg", p1: "30 años", p2: "2 años de experiencia"}
let paseadoresLasHeras = {ciudad: "Las Heras", nombre: "Sebastian", src: "./imagenes/sebastian.jpg", p1: "26 años", p2: "2 años de experiencia"}

let arrPaseadores = [...arrPaseadoresEste, paseadoresCiudad, paseadoresGodoyCruz, paseadoresMaipu, ...arrPaseadoresGuaymallen, paseadoresSanRafael, paseadoresLujan, paseadoresLasHeras]


let paseadores = document.getElementById("paseadores")
let cartaPaseadores = document.createElement("div")
// cartaPaseadores.className = ("cartaPaseadores");

const buscador = () => {
  for (const i of arrPaseadoresEste) {
      switch(dptos.options[dptos.selectedIndex].value) {
          case "San Martín":
          case "La Paz":
          case "Junín":
          case "Rivadavia":
          case "Lavalle":
          case "Santa Rosa":
              cartaPaseadores.innerHTML = `
              <div class="card cartaPaseadores">
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
              cartaPaseadores.innerHTML = `
              <div class="card cartaPaseadores">
              <img src="${paseadoresCiudad.src}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${paseadoresCiudad.nombre}</h5>
                <p class="card-text">${paseadoresCiudad.p1}</p>
                <p class="unidad"><small>${paseadoresCiudad.p2}</small></p>
                <button class="btn btn-primary">Contactar</button>
              </div>
            </div>
            `;
              paseadores.append(cartaPaseadores);
              break;
          case "Godoy Cruz":
              cartaPaseadores.innerHTML = `
              <div class="card cartaPaseadores">
              <img src="${paseadoresGodoyCruz.src}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${paseadoresGodoyCruz.nombre}</h5>
                <p class="card-text">${paseadoresGodoyCruz.p1}</p>
                <p class="unidad"><small>${paseadoresGodoyCruz.p2}</small></p>
                <button class="btn btn-primary">Contactar</button>
              </div>
            </div>
            `;
              paseadores.append(cartaPaseadores);
              break;
              case "Maipú":
                  cartaPaseadores.innerHTML = `
                  <div class="card cartaPaseadores">
                  <img src="${paseadoresMaipu.src}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${paseadoresMaipu.nombre}</h5>
                    <p class="card-text">${paseadoresMaipu.p1}</p>
                    <p class="unidad"><small>${paseadoresMaipu.p2}</small></p>
                    <button class="btn btn-primary">Contactar</button>
                  </div>
                </div>
                `;
                  paseadores.append(cartaPaseadores);
                  break;
          case "Luján":
              cartaPaseadores.innerHTML = `
              <div class="card cartaPaseadores">
              <img src="${paseadoresLujan.src}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${paseadoresLujan.nombre}</h5>
                <p class="card-text">${paseadoresLujan.p1}</p>
                <p class="unidad"><small>${paseadoresLujan.p2}</small></p>
                <button class="btn btn-primary">Contactar</button>
              </div>
            </div>
            `;
              paseadores.append(cartaPaseadores);
              break;
          case "Las Heras":
              cartaPaseadores.innerHTML = `
              <div class="card cartaPaseadores">
              <img src="${paseadoresLasHeras.src}" class="card-img-top" alt="...">
              <div class="card">
                <h5 class="card-title">${paseadoresLasHeras.nombre}</h5>
                <p class="card-text">${paseadoresLasHeras.p1}</p>
                <p class="unidad"><small>${paseadoresLasHeras.p2}</small></p>
                <button class="btn btn-primary">Contactar</button>
              </div>
            </div>
            `;
              paseadores.append(cartaPaseadores);
              break;
          case "San Rafael":
              cartaPaseadores.innerHTML = `
              <div class="card cartaPaseadores">
              <img src="${paseadoresSanRafael.src}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${paseadoresSanRafael.nombre}</h5>
                <p class="card-text">${paseadoresSanRafael.p1}</p>
                <p class="unidad"><small>${paseadoresSanRafael.p2}</small></p>
                <button class="btn btn-primary">Contactar</button>
              </div>
            </div>
            `;
              paseadores.append(cartaPaseadores);
              break;
          case "Tunuyán":
          case "Tupungato":
          case "San Carlos":
          case "General Alvear":
          case "Malargüe":
            // cartaPaseadores.className = ("cartaSinPaseadores");
            cartaPaseadores.innerHTML = `
            <div class="card text-white bg-danger mb-3 cartaSinPaseadores" style="max-width: 18rem;">
                <div class="card-header">😕</div>
                    <div class="card-body">
                        <h5 class="card-title">SIN PASEADORES DISPONIBLES</h5>
                        <p class="card-text">Lo siento, en este Departamento no hay paseadores disponibles. ¡Intenta con el próximo más cercano!</p>
                    </div>
                </div>
            `;
            paseadores.append(cartaPaseadores);
            break;
          case "":
              break;
          default:
              // cartaPaseadores.className = ("cartaSinPaseadores");
              cartaPaseadores.innerHTML = `
              <div class="card text-white bg-danger mb-3 cartaSinPaseadores" style="max-width: 18rem;">
                  <div class="card-header">😕</div>
                      <div class="card-body">
                          <h5 class="card-title">SIN PASEADORES DISPONIBLES</h5>
                          <p class="card-text">Lo siento, en este Departamento no hay paseadores disponibles. ¡Intenta con el próximo más cercano!</p>
                      </div>
                  </div>
              `;
              paseadores.append(cartaPaseadores);
              break;
      } 
  }
  for (j = 0; j < arrPaseadoresGuaymallen.length; j++) {
      if(dptos.options[dptos.selectedIndex].value === "Guaymallén") {
          cartaPaseadores.innerHTML = `
          <div class="card cartaPaseadores">
          <img src="${arrPaseadoresGuaymallen[j].src}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${arrPaseadoresGuaymallen[j].nombre}</h5>
              <p class="card-text">${arrPaseadoresGuaymallen[j].p1}</p>
              <p class="unidad"><small>${arrPaseadoresGuaymallen[j].p2}</small></p>
              <button class="btn btn-primary">Contactar</button>
          </div>
          </div>
          <div class="card cartaPaseadores">
          <img src="${arrPaseadoresGuaymallen[j].src}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${arrPaseadoresGuaymallen[j].nombre}</h5>
              <p class="card-text">${arrPaseadoresGuaymallen[j].p1}</p>
              <p class="unidad"><small>${arrPaseadoresGuaymallen[j].p2}</small></p>
              <button class="btn btn-primary">Contactar</button>
          </div>
          </div>
          `;
          paseadores.append(cartaPaseadores);
          cartaPaseadores.className = ("paseadores")
      }
  }
  localStorage.setItem("Departamento", dptos.options[dptos.selectedIndex].value)
}

addEventListener("change", buscador)