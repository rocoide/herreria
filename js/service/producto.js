import { carta } from "../mapeos/carta.js";
import { seccionCarrito } from "../mapeos/seccionCarrito.js";
import { initializeCarrito } from "../carrito.js";
import { getProductos } from "../fetch/fetchProductos.js";

window.onload = async function ()  {
    let response = await getProductos();
    await mapearMain(response);
    initializeCarrito();
};

const mapearMain = async (response) => {
    let contenedor = document.getElementById("mainProducto");
    let result = await response.json();
    console.log(result[0]);
    console.log(result[0].imagen);
    for (let i = 0; i < result.length; i++) {
        contenedor.innerHTML += await carta(result[i]);
    }
    contenedor.innerHTML += await seccionCarrito();
};
