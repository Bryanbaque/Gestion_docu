// upload_script.js
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para validación

    // Obtener los valores del formulario
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const department = document.getElementById('department').value;
    const file = document.getElementById('file').files[0];

    // Validar que se haya seleccionado un archivo
    if (!file) {
        showUploadMessage('Debe seleccionar un archivo.');
        return;
    }

    // Aquí puedes agregar el código para enviar el formulario y cargar el documento al sistema
    // Por simplicidad, en este ejemplo solo mostramos un mensaje de éxito
    showUploadMessage('El documento se ha cargado correctamente.', true);
});

function showUploadMessage(message, isSuccess = false) {
    const messageDiv = document.getElementById('uploadMessage');
    messageDiv.textContent = message;
    messageDiv.style.color = isSuccess ? '#28a745' : '#d9534f';
}
