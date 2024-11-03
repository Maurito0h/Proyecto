const expresiones = {
    nombre: /^[A-Za-z\s]+$/, 
    numeros: /^[0-9]+$/, 
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
}

let formulario = document.getElementById('contacto1');
let inputs = document.querySelectorAll('#contacto1 input');

const mostrarError = (input, mensaje) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block'; 
}

const ocultarError = (input) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = ''; 
    errorDiv.style.display = 'none'; 
}

const validarFormulario = (e) => {
    let input = e.target; 

    switch (input.name) {
        case 'nombre':
            if (expresiones.nombre.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Nombre inválido. Solo se permiten letras y espacios.');
            }
            break;

        case 'tel':
            if (expresiones.numeros.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Teléfono inválido. Solo se permiten números.');
            }
            break;

        case 'email':
            if (expresiones.email.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Email inválido. Asegúrate de usar un formato correcto.');
            }
            break;

       
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});
