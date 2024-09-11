export async function seccionCarrito()
{
    return  `
            <section class="section">
                <div>
                    <div id="total" style="margin-top: 20px; font-size: 20px;">
                        Total: $0
                    </div>
                    <div id="cantidad" style="margin-top: 10px; font-size: 20px;">
                        Cantidad de productos seleccionados: 0
                    </div>
                </div>
            </section>
            `
}    