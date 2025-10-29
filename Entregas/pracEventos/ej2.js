let email = document.getElementById('email');
let contrasenya = document.getElementById('contrasenya');
let errorEmail = document.getElementById('errorEmail');
let errorContrasenya = document.getElementById('errorContrasenya');
let boton = document.getElementById('boton');
let bienEmail = false;
let bienContrasenya = false;
// validar para poder enviar
function validar() {

  if (bienEmail && bienContrasenyao) {
        boton.disabled = false;
        boton.classList.add('enabled');
      } else {
        boton.disabled = true;
        boton.classList.remove('enabled');
      }

}

// comprobar email
email.onblur = function() {
  if (!email.value.includes('@')) {
    errorEmail.textContent = 'El email necesita @';
    bienEmail = false;
  } else {
    errorEmail.textContent = '';
    bienEmail = true;
  }
  validar();
};
//vaciar error email
email.oninput = function() {
  errorEmail.textContent = '';
  bienEmail = false;
  validar();
};

// comprobar contraseña
contrasenya.onblur = function() {
  if (contrasenya.value.length < 8 || contrasenya.value.length > 10) {
    errorContrasenya.textContent = 'La contraseña debe ser por lo menos 8-10 caracteres';
    bienContrasenya = false;
  } else {
    errorContrasenya.textContent = '';
    bienContrasenya = true;
  }
  validar();
};
//vaciar error contra
contrasenya.oninput = function() {
  errorContrasenya.textContent = '';
  bienContrasenya = false;
  validar();
};

//envair fomr
document.querySelector('formulario').addEventListener('submit', function(e) {
  if (!(bienEmail && bienContrasenya)) {
    e.preventDefault();
  } else {
    alert('Formulario enviado correctamente');
  }
});
