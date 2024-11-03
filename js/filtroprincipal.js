document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buscador').addEventListener('click', function() {

        const tipoOperacion = document.getElementById('tipop').value;
        const tipoInmueble = document.getElementById('tipoi').value;


        let baseUrl = '';
        if (tipoOperacion === 'Alquilar') {
            baseUrl = '/templates/alquileres.html';
        } else if (tipoOperacion === 'Comprar') {
 
            if (tipoInmueble === 'Lote') {
                baseUrl = '/templates/lotes.html';
            } else {
                baseUrl = '/templates/compra.html';
            }
        } else {

            alert('Por favor, selecciona Comprar o Alquilar.');
            return;
        }


        const params = new URLSearchParams({
            tipoInmueble,
        });


        window.location.href = `${baseUrl}?${params.toString()}`;
    });
});
