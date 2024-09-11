export function initializeCarrito() {
    $(document).ready(function() {
        let total = 0;
        let cantidadSeleccionada = 0;
        const precioProducto = 100; // Suponemos que cada producto cuesta 100

        // Cuando se hace clic en una imagen de producto
        $('.poster-carta img').click(function() {
            const $producto = $(this).closest('.contenedor-carta');
            
            // Si el producto ya está seleccionado (opacidad reducida)
            if ($(this).css('opacity') < 1) {
                $(this).css('opacity', '1'); // Restablecer opacidad al 100%
                $producto.css('background-color', ''); // Restablecer color de fondo
                total -= precioProducto; // Restar el precio del total
                cantidadSeleccionada--; // Disminuir la cantidad seleccionada
            } else {
                $(this).css('opacity', '0.6'); // Reducir opacidad al 60%
                $producto.css('background-color', 'gray'); // Cambiar color de fondo
                total += precioProducto; // Sumar el precio al total
                cantidadSeleccionada++; // Aumentar la cantidad seleccionada
            }

            // Actualizar el valor total y la cantidad de elementos seleccionados
            $('#total').text('Total: $' + total);
            $('#cantidad').text('Cantidad de productos seleccionados: ' + cantidadSeleccionada);
        });
    })
};