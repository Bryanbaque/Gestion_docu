// view_script.js
// Simulación de datos de ejemplo para el documento
const documentData = {
    title: "Documento de Ejemplo",
    department: "Departamento de Ejemplo",
    date: "20 de mayo de 2024",
    content: "Este es el contenido del documento de ejemplo. Puede ser un texto largo o cualquier otro tipo de contenido."
};

// Mostrar los detalles del documento en la página
document.getElementById('documentTitle').textContent = documentData.title;
document.getElementById('documentDepartment').textContent = documentData.department;
document.getElementById('documentDate').textContent = documentData.date;

// Mostrar el contenido completo del documento
document.getElementById('contentPlaceholder').textContent = documentData.content;

// Configurar la descarga del documento
document.getElementById('downloadButton').addEventListener('click', function() {
    // Aquí puedes agregar el código para descargar el documento
    alert("El documento se está descargando...");
});
