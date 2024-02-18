const formulario = document.getElementById('formulario_registro');
const inputs = document.querySelectorAll('#formulario_registro input');
const selects = document.querySelectorAll('#formulario_registro select');

// const expresiones = {
//     nombre: /^.{1,5}$/,
//     apellido: /^.{4,40}$/,
//     email: /^.{4,40}$/,
//     cel: /^.[0-9.]{1,9}$/,
//     dire: /^.{4,150}$/,
//     contra: /^.{2,8}$/ 
// }

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Permite letras y espacios, de 1 a 40 caracteres
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Permite letras y espacios, de 1 a 40 caracteres
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Expresión para validar email
    cel: /^[0-9]{9}$/, // Permite 9 dígitos numéricos
    dire: /^.{1,150}$/, // Permite cualquier caracter, de 1 a 150 caracteres
    contra: /^.{1,8}$/ // Permite cualquier caracter, de 1 a 8 caracteres
}


const campos = {
    nombre: false,
    apellido: false,
    email: false,
    cel: false,
    dire: false,
    contra: false
}

// const validarCampo = (expresion, input, campo) => {
//     if (expresion.test(input.value)){
//         document.getElementById(`${campo}`).classList.add('is-valid'); /*apostrofe inveritod alt + 96*/
//         document.getElementById(`${campo}`).classList.remove('is-invalid');
//         campos[campo] = true;
//     }
//     else{
//         document.getElementById(`${campo}`).classList.add('is-valid'); /*apostrofe inveritod alt + 96*/
//         document.getElementById(`${campo}`).classList.remove('is-invalid');
//         campos[campo] = false;
//     }
// }

const validarCampo = (expresion, input, campo) => {
    const feedback = document.getElementById(`${campo}-feedback`);

    if (expresion.test(input.value)) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        feedback.style.display = 'none'; // Oculta el mensaje de error
        campos[campo] = true;
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        feedback.style.display = 'block'; // Muestra el mensaje de error
        campos[campo] = false;
    }
};

const validarFormulario = () => {
    let formularioValido = true;

    for (const campo in campos) {
        if (!campos[campo]) {
            formularioValido = false;
            break; // Si encuentra un campo inválido, detiene la validación
        }
    }

    return formularioValido;
};



formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    // Llama a una función para validar el formulario
    if (validarFormulario()) {
        // Si el formulario es válido, puedes enviarlo aquí o realizar otras acciones
        formulario.submit(); // Envia el formulario
    } else {
        // Si el formulario no es válido, puedes mostrar mensajes de error o realizar otras acciones
        console.log('Formulario inválido');
    }
});

// const validarFormulario = (e) => {
//     switch(e.target.name) {
//         case "nombre":
//             validarCampo(expresiones.nombre,e.target,'nombre');
//         break;
//         case "apellido":
//             validarCampo(expresiones.apellido,e.target,'apellido');
//         break;
//         case "email":
//             validarCampo(expresiones.email,e.target,'email');
//         break;
//         case "cel":
//             validarCampo(expresiones.cel,e.target,'cel');
//         break;
//         case "dire":
//             validarCampo(expresiones.dire,e.target,'dire');
//         break;
//         case "contraseña":
//             validarCampo(expresiones.contraseña,e.target,'contraseña');
//         break;
//     }

// }

// inputs.forEach((input) =>{
//     input.addEventListener('keyup',validarFormulario);
//     input.addEventListener('blur',validarFormulario)
// });


inputs.forEach((input) =>{
    input.addEventListener('keyup', () => {
        const campo = input.getAttribute('name');
        validarCampo(expresiones[campo], input, campo);
    });
    input.addEventListener('blur', () => {
        const campo = input.getAttribute('name');
        validarCampo(expresiones[campo], input, campo);
    });
});


