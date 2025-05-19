function login() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && username && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); 
        alert('Login bem-sucedido!');

        window.location.href = 'index2.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    if (email && username) {
        alert(`Bem-vindo de volta, ${username}!`);
   
        window.location.href = '2.html';
    }
});
