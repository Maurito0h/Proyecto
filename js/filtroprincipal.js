document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buscador').addEventListener('click', function() {
        // Obtener los valores seleccionados del formulario
        const tipoOperacion = document.getElementById('tipop').value;
        const tipoInmueble = document.getElementById('tipoi').value;

        // Inicializar la URL base según la operación seleccionada
        let baseUrl = '';
        if (tipoOperacion === 'Alquilar') {
            baseUrl = '/templates/alquileres.html';
        } else if (tipoOperacion === 'Comprar') {
            // Comprobar si el tipo de inmueble es 'Lotes'
            if (tipoInmueble === 'Lote') {
                baseUrl = '/templates/lotes.html';
            } else {
                baseUrl = '/templates/compra.html';
            }
        } else {
            // Salir si no se ha seleccionado una operación válida
            alert('Por favor, selecciona Comprar o Alquilar.');
            return;
        }

        // Construir los parámetros de búsqueda
        const params = new URLSearchParams({
            tipoInmueble,
        });

        // Redirigir a la página correspondiente con los parámetros
        window.location.href = `${baseUrl}?${params.toString()}`;
    });
});
