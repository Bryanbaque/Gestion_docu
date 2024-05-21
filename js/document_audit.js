// document_audit_script.js
// Simulación de datos de ejemplo para la auditoría de documentos
const auditLogs = [
    { document: "Documento1.pdf", action: "Acceso", user: "admin", timestamp: "2024-05-20 10:00:00" },
    { document: "Documento2.docx", action: "Edición", user: "user1", timestamp: "2024-05-20 10:15:00" },
    { document: "Documento3.txt", action: "Eliminación", user: "admin", timestamp: "2024-05-20 10:30:00" }
    // Agrega más registros de auditoría según sea necesario
];

// Función para cargar los registros de auditoría en la tabla
function loadAuditLogs() {
    const auditTableBody = document.querySelector('#auditTable tbody');

    auditLogs.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.document}</td>
            <td>${log.action}</td>
            <td>${log.user}</td>
            <td>${log.timestamp}</td>
        `;
        auditTableBody.appendChild(row);
    });
}

// Cargar los registros de auditoría al cargar la página
document.addEventListener('DOMContentLoaded', loadAuditLogs);
