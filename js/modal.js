
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
let cabeza = document.querySelector("#cabeza")


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
    cabeza.classList = ("cabeza-carrito")
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
    cabeza.classList = ("cabeza-fuera")
})


let pulso = document.querySelector('.pulso');

pulso.addEventListener('animationend', () => {
    pulso.classList.remove('animate');
});

let ejecutarPulso = () => {
    setInterval(() => {
        pulso.classList.add('animate')
    },7000);
};

window.addEventListener('load',() =>{
    ejecutarPulso()
});