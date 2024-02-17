const formulario = document.getElementById('formulario_registro');
const inputs = document.querySelectorAll('#formulario_registro input');
const selects = document.querySelectorAll('#formulario_registro select');

const expresiones = {
    nombre: /^.{4,40}$/,
    apellido: /^.{4,40}$/,
    email: /^.{4,40}$/,
    cel: /^.[0-9.]{1,9}$/,
    dire: /^.{4,150}$/,
    contraseña: /^.{2,8}$/ 
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    cel: false,
    dire: false,
    contraseña: false
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`${campo}`),classList.add('is-valid'); /*apostrofe inveritod alt + 96*/
        document.getElementById(`${campo}`),classList.remove('is-invalid');
        campos[campo] = true;
    }
    else{
        document.getElementById(`${campo}`),classList.add('is-valid'); /*apostrofe inveritod alt + 96*/
        document.getElementById(`${campo}`),classList.remove('is-invalid');
        campos[campo] = false;
    }

}