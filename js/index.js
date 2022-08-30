/*CARRITO DE COMPRAS {}*/

let ingreso = prompt(`Ingresar producto al carrito \n1- Combo perro \n2- Combo gato \n3-Combo mixto`);
let costo;
let producto;
let codigoDescuento = 589125;

function descuento(){
    let descuento = prompt("Posee algun descuento?")
    if (descuento == 'si' || (descuento) == "SI" || (descuento) == "Si"){
        let ingresoDescuento = parseInt(prompt("Ingrese codigo"))
        if (ingresoDescuento == codigoDescuento){
            alert("Su codigo ha sido aceptado!")
            costo = costo - 2
            alert(`El ${producto} cuesta $${costo}`)
        } else {
            alert('codigo invalido')
        }
    } else if (descuento == 'no' || (descuento) == "NO" || (descuento) == "No"){
        alert(`El ${producto} cuesta $${costo}`)
    }
    else {
        alert("Opcion incorrecta")
    }
}

function agregar(ingreso) {
    if (ingreso == 1){
        costo = 10;
        producto = "Combo perro";
        descuento()
    } else if (ingreso == 2){
        costo = 8;
        producto = "Combo gato";
        descuento()
    } else if (ingreso == 3){
        producto = "Combo mixto";
        costo = 15;
        descuento()
    } else {
        alert("Opcion incorrecta")
    }
}

agregar(ingreso)