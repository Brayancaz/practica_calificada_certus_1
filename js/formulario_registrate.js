// Obtención de elementos del DOM
const formulario = document.getElementById('formulario_registro');
const inputs = document.querySelectorAll('#formulario_registro input');
const selects = document.querySelectorAll('#formulario_registro select');

// Expresiones regulares para validar cada campo del formulario
const expresiones = {
    nombre: /^\b[A-Za-zÁáÉéÍíÓóÚúÜüÑñ][A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]*\b$/, // Permite registro de nombre
    apellido: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/, // Permite letras y espacios, 2 palabras
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, // Expresión para validar email
    cel: /^[0-9]{9}$/, // Permite 9 dígitos numéricos
    dire: /^.{1,150}$/, // Permite cualquier caracter, de 1 a 150 caracteres
    contra: /.*/ ///^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,8}$/ // Permite alfanumerico minimo de 3 y max de 8
}

// Objeto para mantener el estado de validación de cada campo del formulario
const campos = {
    nombre: false,
    apellido: false,
    email: false,
    cel: false,
    dire: false,
    contra: false
}

// Funcion para validar un campo especifico del formulario
const validarCampo = (expresion, input, campo) => {
    const feedback = document.getElementById(`${campo}-feedback`);

    // Verificar si el elemento feedback existe
    if (feedback) {
        if (expresion && expresion.test(input.value)) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            feedback.style.display = 'none'; // Oculta el mensaje de error
            campos[campo] = true;
            console.log(`Campo ${campo} válido`);
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            feedback.style.display = 'block'; // Muestra el mensaje de error
            campos[campo] = false;
            console.log(`Campo ${campo} inválido`);
        }
    }
};


// Función para validar el formulario completo
 const validarFormulario = () => {
     let formularioValido = true;

     for (const campo in campos) {
         if (!campos[campo]) {
             formularioValido = false;
             console.log(`Campo ${campo} inválido`);
             break; // Si encuentra un campo inválido, detiene la validación
        }else {
            console.log(`Campo ${campo} válido`);
        }

    }

    return formularioValido;
 };

// Event listener para el evento de envío del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envie por defecto

    // Llama a una funcion para validar el formulario
    if (validarFormulario()) {
        // Si el formulario es valido, se puede enviar aqui o realizar otras acciones
        // formulario.submit(); // Envia el formulario
        console.log('Formulario válido, se puede enviar');
        alert ('Datos validos')
    } else {
        // Si el formulario no es valido, se puede mostrar mensajes de error o realizar otras acciones
        console.log('Formulario inválido');
        alert("complete la informacion")
    }
});

inputs.forEach((input) =>{
    input.addEventListener('keyup', () => {
        const campo = input.getAttribute('name');
        validarCampo(expresiones[campo], input, campo);
    });
    input.addEventListener('blur', () => {
        const campo = input.getAttribute('name');
        if (input.value.trim() !== '') { // Validar solo si el campo no está vacío
            validarCampo(expresiones[campo], input, campo);
        }
    });
});
