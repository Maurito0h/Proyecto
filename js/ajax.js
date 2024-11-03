function GetAlquileres() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e)=>{
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);
            //
            let producto = json.alquilerescasas;
                console.log(producto);
                producto.forEach((el) => {
                $lista.innerHTML += `
                <div class="contenedorinterno">
                <img class="casa2" id="casa1" src="${el.img}" alt="">
                <h1 class="precio">${el.precio}</h1>
                <h2 class="tipo">${el.tipo}</h2>
                <h3 class="ubicacion">${el.localidad}</h3>
                <p class="descripcion">${el.descripcion}</p>
                <p class="detalleinterno"><b>${el.detalleinterno}</b></p>
                </div>`;
                
            });
        } else {
            $lista.innerHTML = `
            <div class="tarjeta">
            <img src="" alt="">
            <h2>Error no se encontraron datos</h2>
            <p>${xhr.status}</p>
            <p>${xhr.statusText}</p>
            </div>`;
        }
    
    });
    console.log(xhr);
    xhr.addEventListener('readystatechange', (e)=>{
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);
            //
            let producto = json.alquileresdeptos;
                console.log(producto);
                producto.forEach((el) => {
                $lista.innerHTML += `
                <div class="contenedorinterno">
                <img class="casa2" id="casa1" src="${el.img}" alt="">
                <h1 class="precio">${el.precio}</h1>
                <h2 class="tipo">${el.tipo}</h2>
                <h3 class="ubicacion">${el.localidad}</h3>
                <p class="descripcion">${el.descripcion}</p>
                <p class="detalleinterno"><b>${el.detalleinterno}</b></p>
                </div>`;
                
            });
        } else {
            $lista.innerHTML = `
            <div class="tarjeta">
            <img src="" alt="">
            <h2>Error no se encontraron datos</h2>
            <p>${xhr.status}</p>
            <p>${xhr.statusText}</p>
            </div>`;
        }
    
    });

    xhr.open("GET",'../data/datosalquileres.json');

    xhr.send();
}

function GetCompra() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado1');

        console.log(xhr);
        xhr.addEventListener('readystatechange', (e)=>{
            if (xhr.readyState !== 4) return;
    
            if(xhr.status >= 200 && xhr.status < 300){
                console.log('conectado');
                
                
                let json = JSON.parse(xhr.responseText);
                //
                let producto = json.compracasas;
                    console.log(producto);
                    producto.forEach((el) => {
                    $lista.innerHTML += `
                    <div class="contenedorinterno">
                    <img class="casa2" id="casa1" src="${el.img}" alt="">
                    <h1 class="precio">${el.precio}</h1>
                    <h2 class="tipo">${el.tipo}</h2>
                    <h3 class="ubicacion">${el.localidadcasas}</h3>
                    <p class="descripcion">${el.descripcion}</p>
                    <p class="detalleinterno"><b>${el.detalleinterno}</b></p>
                    </div>`;
                    
                });
            } else {
                $lista.innerHTML = `
                <div class="tarjeta">
                <img src="" alt="">
                <h2>Error no se encontraron datos</h2>
                <p>${xhr.status}</p>
                <p>${xhr.statusText}</p>
                </div>`;
            }
        
        });
        console.log(xhr);
        xhr.addEventListener('readystatechange', (e)=>{
            if (xhr.readyState !== 4) return;
    
            if(xhr.status >= 200 && xhr.status < 300){
                console.log('conectado');
                
                
                let json = JSON.parse(xhr.responseText);
                //
                let producto = json.compradeptos;
                    console.log(producto);
                    producto.forEach((el) => {
                    $lista.innerHTML += `
                    <div class="contenedorinterno">
                    <img class="casa2" id="casa1" src="${el.img}" alt="">
                    <h1 class="precio">${el.precio}</h1>
                    <h2 class="tipo">${el.tipo}</h2>
                    <h3 class="ubicacion">${el.localidadcasas}</h3>
                    <p class="descripcion">${el.descripcion}</p>
                    <p class="detalleinterno"><b>${el.detalleinterno}</b></p>
                    </div>`;
                    
                });
            } else {
                $lista.innerHTML = `
                <div class="tarjeta">
                <img src="" alt="">
                <h2>Error no se encontraron datos</h2>
                <p>${xhr.status}</p>
                <p>${xhr.statusText}</p>
                </div>`;
            }
        
        });
    xhr.open("GET",'../data/datoscompra.json');

    xhr.send();
}

function GetLotes() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado2');

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            let productos = json.lotes;

            productos.forEach((el) => {
                $lista.innerHTML += `
                <div class="contenedorinterno">
                    <img class="casa2" src="${el.img}" alt="">
                    <h1 class="precio">${el.precio}</h1>
                    <h2 class="tipo">${el.tipo}</h2>
                    <h3 class="ubicacion">${el.localidadlotes}</h3>
                    <p class="descripcion">${el.descripcion}</p>
                </div>`;
            });
        } else {
            $lista.innerHTML = `
            <div class="tarjeta">
                <img src="" alt="">
                <h2>Error no se encontraron datos</h2>
                <p>${xhr.status}</p>
                <p>${xhr.statusText}</p>
            </div>`;
        }
    });

    xhr.open("GET", '../data/datoslotes.json');
    xhr.send();
}
