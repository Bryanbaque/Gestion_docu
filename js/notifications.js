// notifications_script.js
function showNotification(message, type) {
    const notificationsContainer = document.getElementById('notifications');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const closeIcon = document.createElement('span');
    closeIcon.className = 'close-button';
    closeIcon.innerHTML = '&times;';
    closeIcon.onclick = function() {
        notificationsContainer.removeChild(notification);
    };
    
    notification.innerText = message;
    notification.appendChild(closeIcon);
    
    notificationsContainer.appendChild(notification);
}

// Ejemplos de notificaciones
showNotification('Nuevo documento cargado: Documento1.pdf', 'success');
showNotification('Se ha actualizado el permiso del usuario JohnDoe', 'info');
showNotification('Error al cargar el documento', 'error');
