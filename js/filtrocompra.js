function BuscarProductos1() {
    const cat = document.getElementById('catcompra').value;
    const localidad = document.getElementById('localidadcasas').value;
    const habitaciones = document.getElementById('habitacionescompra').value; 
    const precioSeleccionado = document.getElementById('precio1').value;

    let precioMin = 0;
    let precioMax = Infinity;

    switch(precioSeleccionado) {
        case 'rango1':
            precioMax = 19999;
            break;
        case 'rango2':
            precioMin = 20000;
            precioMax = 29999;
            break;
        case 'rango3':
            precioMin = 30000;
            precioMax = 39999;
            break;
        case 'rango4':
            precioMin = 40000;
            break;
        default:
            break;
    }

    const xhr = new XMLHttpRequest();
    const $lista = document.getElementById('listado1');

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            $lista.innerHTML = '';

            const propiedadesFiltradas = [];


            const todasPropiedades = [...json.compracasas, ...json.compradeptos];

            todasPropiedades.forEach((el) => {
                if (
                    (cat === "" || el.tipo === cat) &&
                    (localidad === "" || el.localidadcasas === localidad) &&
                    (habitaciones === "" || el.habitacionescompra.toString() === habitaciones) &&
                    el.precioif >= precioMin &&
                    el.precioif <= precioMax
                ) {
                    propiedadesFiltradas.push(el);
                }
            });

            if (propiedadesFiltradas.length > 0) {
                propiedadesFiltradas.forEach((el) => {
                    $lista.innerHTML += `
                        <div class="contenedorinterno">
                            <img class="casa2" src="${el.img}" alt="">
                            <h1 class="precio">${el.precio}</h1>
                            <h2 class="tipo">${el.tipo}</h2>
                            <h3 class="ubicacion">${el.localidadcasas}</h3>
                            <p class="descripcion">${el.descripcion}</p>
                        </div>`;
                });
            } else {
                $lista.innerHTML = `<p>No se encontraron resultados que coincidan con los filtros seleccionados.</p>`;
            }
        } else {
            console.error("Error en la carga de datos: ", xhr.status);
        }
    });

    xhr.open("GET", '../data/datoscompra.json'); 
    xhr.send();
}

function LimpiarFiltros() {
    document.getElementById('catcompra').value = "";
    document.getElementById('localidadcasas').value = "";
    document.getElementById('habitacionescasas').value = ""; 
    document.getElementById('precio1').value = "";


    BuscarProductos1();
}


document.getElementById("buscador1").addEventListener("click", function(event) {
    event.preventDefault(); 
    BuscarProductos1();
});
document.getElementById("limpiarFiltros").addEventListener("click", LimpiarFiltros);
