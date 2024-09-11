import { carta } from "./mapeos/carta.js";
import { seccionCarrito } from "./mapeos/seccionCarrito.js";
import { initializeCarrito } from "./carrito.js";

window.onload = async function ()  {
    await mapearMain();
    initializeCarrito();
};

const mapearMain = async () => {
    let contenedor = document.getElementById("main");
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await carta();
    contenedor.innerHTML += await seccionCarrito();
};
