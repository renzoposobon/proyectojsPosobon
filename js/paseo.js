// let ciudad = document.getElementById("ciudad")
// let godoyCruz = document.getElementById("godoyCruz")
// let guaymallen = document.getElementById("guaymallen")
// let maipu = document.getElementById("maipu")
// let lujan = document.getElementById("lujan")
// let lasHeras = document.getElementById("lasHeras")
// let sanMartin = document.getElementById("sanMartin")
// let sanRafael = document.getElementById("sanRafael")
// let junin = document.getElementById("junin")
// let rivadavia = document.getElementById("rivadavia")
// let lavalle = document.getElementById("lavalle")
// let laPaz = document.getElementById("laPaz")
// let santaRosa = document.getElementById("santaRosa")
// let tunuyan = document.getElementById("tunuyan")
// let tupungato = document.getElementById("tupungato")
// let generalAlvear = document.getElementById("generalAlvear")
// let malargue = document.getElementById("malargue")
// let sanCarlos = document.getElementById("ciudad")

let arrPaseadores = [
    {ciudad: "San Martin", nombre: "Juan", src: "./imagenes/juan.jpg", p1: "Edad: 31 años", p2: "3 años de experiencia"},
    {ciudad: "La Paz", nombre: "Sara", src: "./imagenes/sara.jpg", p1: "Edad: 28 años", p2: "5 años de experiencia"},
    {ciudad: "Rivadavia", nombre: "Denis", src: "./imagenes/denis.jpg", p1: "Edad: 30 años", p2: "2 años de experiencia"}
]

let paseadores = document.getElementById("paseadores")
let cartaPaseadores = document.createElement("div")

const buscador = () => {
    for (const i of arrPaseadores) {
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
            case "Lavalle":
            case "Tupungato":
            case "Tunuyán":
            case "General Alvear":
            case "Malargüe":
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
            default:
                cartaPaseadores.innerHTML = `
                <h6>David</h6>
                `
                paseadores.append(cartaPaseadores)
                break
        } 
    }
}

addEventListener("change", buscador);

