function BuscarProductos() {
    const cat = document.getElementById('catcasas').value;
    const localidad = document.getElementById('localidad').value;
    const habitaciones = document.getElementById('habitaciones').value;
    const precioSeleccionado = document.getElementById('precio').value;

    let precioMin = 0;
    let precioMax = Infinity;

    switch(precioSeleccionado) {
        case 'rango1':
            precioMax = 200;
            break;
        case 'rango2':
            precioMin = 200;
            precioMax = 300;
            break;
        case 'rango3':
            precioMin = 300;
            precioMax = 400;
            break;
        case 'rango4':
            precioMin = 400;
            break;
        default:
            break;
    }

    const xhr = new XMLHttpRequest();
    const $lista = document.getElementById('listado');

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            $lista.innerHTML = '';

            const propiedadesFiltradas = [];

            for (const p in json) {
                if (cat === "" || p === cat) {
                    json[p].forEach((el) => {
                        if (
                            (localidad === "" || el.localidad === localidad) &&
                            (habitaciones === "" || el.habitaciones.toString() === habitaciones) &&
                            el.precioif >= precioMin &&
                            el.precioif <= precioMax
                        ) {
                            propiedadesFiltradas.push(el);
                        }
                    });
                }
            }

            if (propiedadesFiltradas.length > 0) {
                propiedadesFiltradas.forEach((el) => {
                    $lista.innerHTML += `
                        <div class="contenedorinterno">
                            <img class="casa2" src="${el.img}" alt="">
                            <h1 class="precio">${el.precio}</h1>
                            <h2 class="tipo">${el.tipo}</h2>
                            <h3 class="ubicacion">${el.localidad}</h3>
                            <p class="descripcion">${el.descripcion}</p>
                            <p class="detalleinterno"><b>${el.detalleinterno}</b></p>
                        </div>`;
                });
            } else {
                $lista.innerHTML = `<p>No se encontraron resultados que coincidan con los filtros seleccionados.</p>`;
            }
        } else {
            console.error("Error en la carga de datos: ", xhr.status);
        }
    });

    xhr.open("GET", '../data/datosalquileres.json');
    xhr.send();
}

function LimpiarFiltros() {
    document.getElementById('catcasas').value = "";
    document.getElementById('localidad').value = "";
    document.getElementById('habitaciones').value = "";
    document.getElementById('precio').value = "";


    BuscarProductos();
}


document.getElementById("buscador1").addEventListener("click", BuscarProductos);
document.getElementById("limpiarFiltros").addEventListener("click", LimpiarFiltros);

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        tipoInmueble: params.get('tipoInmueble'),
        dormitorios: params.get('dormitorios'),
        zona: params.get('zona'),
        patio: params.get('patio'),
        cochera: params.get('cochera'),
    };
}
function obtenerParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        categoria: params.get('categoria') || '',
        localidad: params.get('localidad') || '',
        habitaciones: params.get('habitaciones') || '',
        precio: params.get('precio') || ''
    };
}

function inicializarBusqueda() {
    const filtros = obtenerParametrosURL();


    document.getElementById('catcasas').value = filtros.categoria;
    document.getElementById('localidad').value = filtros.localidad;
    document.getElementById('habitaciones').value = filtros.habitaciones;
    document.getElementById('precio').value = filtros.precio;


    BuscarProductos();
}


window.onload = inicializarBusqueda;
