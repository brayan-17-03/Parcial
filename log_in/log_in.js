document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    console.log('Usuario:', usuario);
    console.log('Clave:', clave);


});

document.getElementById('signupBtn').addEventListener('click', function() {

    window.location.href = 'registro.html';
});

document.getElementById('cancelBtn').addEventListener('click', function() {

    window.location.href = 'inicio.html';
});