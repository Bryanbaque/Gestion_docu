// manage_users_script.js
// Simulación de datos de ejemplo para la lista de usuarios
const users = [
    { id: 1, username: "admin", role: "Administrador" },
    { id: 2, username: "user1", role: "Usuario" },
    { id: 3, username: "user2", role: "Usuario" }
    // Agrega más usuarios según sea necesario
];

// Mostrar la lista de usuarios en la página
const userListItems = users.map(user => `
    <li class="user-item">
        <p><strong>Usuario:</strong> ${user.username}</p>
        <p><strong>Rol:</strong> ${user.role}</p>
        <div class="user-actions">
            <button onclick="editUser(${user.id})">Editar</button>
            <button onclick="deleteUser(${user.id})">Eliminar</button>
        </div>
    </li>
`).join('');

document.getElementById('userListItems').innerHTML = userListItems;

// Función para editar un usuario
function editUser(id) {
    // Aquí puedes agregar el código para editar el usuario
    alert(`Editar usuario con ID ${id}`);
}

// Función para eliminar un usuario
function deleteUser(id) {
    // Aquí puedes agregar el código para eliminar el usuario
    alert(`Eliminar usuario con ID ${id}`);
}
