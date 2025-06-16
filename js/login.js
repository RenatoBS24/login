const { use } = require("react");

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

    let username = '';

    const canEnter = users.some(user => {

        if (user.email === email && user.password === password) {
            username = user.username;
            return true;
        } else return false;

    });

    if (!canEnter) {
        alert('Email y contraseña inválidos');
        return;
    }

    alert(`Bienvenido ${username}`);

});

const users = [
    {
        email: 'tigreluis@gmail.com',
        password: '1234',
        username: 'tigreluis'
    },
    {
        email: 'admintigre@gmail.com',
        password: 'admin',
        username: 'admintigre'
    }
];