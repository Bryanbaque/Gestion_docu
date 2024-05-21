// admin_script.js
// Simulación de datos de ejemplo para la lista de documentos
const documents = [
    { id: 1, title: "Documento 1", department: "Departamento A", date: "2024-05-15" },
    { id: 2, title: "Documento 2", department: "Departamento B", date: "2024-05-16" },
    { id: 3, title: "Documento 3", department: "Departamento C", date: "2024-05-17" }
    // Agrega más documentos según sea necesario
];

// Mostrar la lista de documentos en la página
const documentListItems = documents.map(document => `
    <li class="document-item">
        <p><strong>Título:</strong> ${document.title}</p>
        <p><strong>Departamento:</strong> ${document.department}</p>
        <p><strong>Fecha:</strong> ${document.date}</p>
        <div class="document-actions">
            <button onclick="editDocument(${document.id})">Editar</button>
            <button onclick="deleteDocument(${document.id})">Eliminar</button>
        </div>
    </li>
`).join('');

document.getElementById('documentListItems').innerHTML = documentListItems;

// Función para editar un documento
function editDocument(id) {
    // Aquí puedes agregar el código para editar el documento
    alert(`Editar documento con ID ${id}`);
}

// Función para eliminar un documento
function deleteDocument(id) {
    // Aquí puedes agregar el código para eliminar el documento
    alert(`Eliminar documento con ID ${id}`);
}
