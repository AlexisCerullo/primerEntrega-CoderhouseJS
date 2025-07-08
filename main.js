const productos = [{
    nombre: "Simple", precio: 9000
}, {
    nombre: "Doble", precio: 13000
}, {
    nombre: "Cheddar", precio: 10000
}, {
    nombre: "Completa", precio: 12000
}, {
    nombre: "Pollo", precio: 9000
}, {
    nombre: "Veggie", precio: 10000
}]

let producto;
let cantidad;

const calcularTotal = (precio, cantidad) => precio * cantidad;

const compra = (cantidad, producto, total) => `Tu pedido son ${cantidad} hamburguesa/s de la variedad ${producto}, el total seria $${total}`;
const resumenCompra = (posicion) => alert(compra(cantidad, productos[posicion].nombre, calcularTotal(productos[posicion].precio, cantidad)));

function iniciarCompra() {
    producto = prompt(`Bienvenido a la Hamburgueseria!
    Escribe que hamburguesa, pueden ser: 
    -Simple
    -Doble
    -Cheddar
    -Completa
    -Pollo
    -Veggie`).toLowerCase();

    if (producto) {
        cantidad = parseInt(prompt("Escribe cuantas hamburguesas queres de esa variedad"));
    }

    if (producto && cantidad >= 1) {
        switch (producto) {
            case productos[0].nombre.toLowerCase(): resumenCompra(0)
                break;
            case productos[1].nombre.toLowerCase(): resumenCompra(1)
                break;
            case productos[2].nombre.toLowerCase(): resumenCompra(2)
                break;
            case productos[3].nombre.toLowerCase(): resumenCompra(3)
                break;
            case productos[4].nombre.toLowerCase(): resumenCompra(4)
                break;
            case productos[5].nombre.toLowerCase(): resumenCompra(5)
                break;
            default: alert("Escribiste un producto invalido, volvé a intentar")
                iniciarCompra();
                break;
        }

    } else {
        alert("Escribiste un producto y/o una cantidad de productos invalida, volvé a intentar")
        iniciarCompra();
    }
}

iniciarCompra();


