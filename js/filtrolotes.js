// Función para buscar y filtrar lotes
function BuscarLotes() {
    const localidad = document.getElementById('localidadlotes').value;
    const superficieSeleccionada = document.getElementById('superficie').value;
    const precioSeleccionado = document.getElementById('precio2').value;

    let superficieMin = 0;
    let superficieMax = Infinity;
    let precioMin = 0;
    let precioMax = Infinity;

    // Filtrar por rango de superficie
    switch (superficieSeleccionada) {
        case '1':
            superficieMax = 499;
            break;
        case '2':
            superficieMin = 500;
            superficieMax = 749;
            break;
        case '3':
            superficieMin = 750;
            superficieMax = 999;
            break;
        case '4':
            superficieMin = 1000;
            break;
        default:
            break;
    }

    // Filtrar por rango de precios
    switch (precioSeleccionado) {
        case 'rango1':
            precioMax = 9999;
            break;
        case 'rango2':
            precioMin = 10000;
            precioMax = 14999;
            break;
        case 'rango3':
            precioMin = 15000;
            precioMax = 19999;
            break;
        case 'rango4':
            precioMin = 20000;
            break;
        default:
            break;
    }

    const xhr = new XMLHttpRequest();
    const $lista = document.getElementById('listado2');

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            $lista.innerHTML = '';

            const lotesFiltrados = json.lotes.filter((lote) => {
                return (
                    (localidad === "" || lote.localidadlotes === localidad) &&
                    lote.superficie >= superficieMin &&
                    lote.superficie <= superficieMax &&
                    lote.precioif >= precioMin &&
                    lote.precioif <= precioMax
                );
            });

            if (lotesFiltrados.length > 0) {
                lotesFiltrados.forEach((lote) => {
                    $lista.innerHTML += `
                        <div class="contenedorinterno">
                            <img class="casa2" src="${lote.img}" alt="">
                            <h1 class="precio">${lote.precio}</h1>
                            <h2 class="tipo">${lote.tipo}</h2>
                            <h3 class="ubicacion">${lote.localidadlotes}</h3>
                            <p class="descripcion">${lote.descripcion}</p>
                        </div>`;
                });
            } else {
                $lista.innerHTML = `<p>No se encontraron resultados que coincidan con los filtros seleccionados.</p>`;
            }
        } else {
            console.error("Error en la carga de datos: ", xhr.status);
        }
    });

    xhr.open("GET", '../data/datoslotes.json'); // Verifica que la ruta sea correcta
    xhr.send();
}

    // Llama a la función BuscarLotes para mostrar todos los resultados
    BuscarLotes();


// Asignar eventos a los botones
document.getElementById("buscador2").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    BuscarLotes();
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buscador2").addEventListener("click", function(event) {
        event.preventDefault(); // Evita la recarga de la página
        BuscarLotes(); // Llama a la función para buscar lotes
    });

    document.getElementById("limpiarFiltros").addEventListener("click", function(event) {
        LimpiarFiltrosLotes();
    });
});