export async function carta(elemento)
{
    return  `
            <div class="contenedor-carta">
                <div class="poster-carta">   
                    <img class="header-img_fondo" src="${elemento.imagen}" alt="imagen producto">
                </div>
                <div class="descripcion-carta">
                    <h2>${elemento.titulo}</h2>
                </div>
                <div class="descripcion-carta">
                    <p>${elemento.descripcion}</p>
                </div>
                <div class="descripcion-carta">
                    <button class="boton">comprar</button>
                </div>
            </div>
            `
}    