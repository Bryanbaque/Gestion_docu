// login_script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para validación

    // Validación del nombre de usuario
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        showLoginMessage('El nombre de usuario es obligatorio.');
        return;
    }

    // Validación de la contraseña
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        showLoginMessage('La contraseña es obligatoria.');
        return;
    }

    // Si todas las validaciones pasan, se puede enviar el formulario
    // Aquí puedes agregar el código para enviar el formulario, por ejemplo, usando Fetch API o XMLHttpRequest
    showLoginMessage('Inicio de sesión exitoso.', true);
});

function showLoginMessage(message, isSuccess = false) {
    const messageDiv = document.getElementById('loginMessage');
    messageDiv.textContent = message;
    messageDiv.style.color = isSuccess ? '#28a745' : '#d9534f';
}
