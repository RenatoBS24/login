const form = document.forms[0];
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === '') {
        alert('Campo email es requerido');
        return;
    }

    if (password === '') {
        alert('Campo contraseña es requerido');
        return;
    }

});