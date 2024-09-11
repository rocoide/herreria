export async function carta(elemento)
{
    return  `
            <div class="contenedor-carta">
                <div class="poster-carta">   
                    <img class="header-img_fondo" src="${elemento.imagen}" alt="imagen producto">
                </div>
                <div class="descripcion-carta">
                    <h2>Leñero</h2>
                </div>
                <div class="descripcion-carta">
                    <p>Leñero de 80 cm de alto por 30 de lago</p>
                </div>
                <div class="descripcion-carta">
                    <button class="boton">comprar</button>
                </div>
            </div>
            `
}    