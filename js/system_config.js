// system_config_script.js
document.getElementById('passwordPolicy').addEventListener('change', function() {
    const customPasswordPolicy = document.getElementById('customPasswordPolicy');
    customPasswordPolicy.style.display = this.value === 'custom' ? 'block' : 'none';
});

document.getElementById('systemConfigForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para guardar la configuración en el sistema
    alert('Configuración guardada correctamente.');
});
