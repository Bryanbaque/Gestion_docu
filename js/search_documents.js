// search_script.js
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para validación

    // Obtener el valor de búsqueda y el criterio seleccionado
    const searchQuery = document.getElementById('searchQuery').value;
    const searchCriteria = document.getElementById('searchCriteria').value;

    // Aquí puedes agregar el código para realizar la búsqueda en el sistema
    // y mostrar los resultados en el div #searchResults
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.textContent = `Resultados de búsqueda para "${searchQuery}" usando el criterio "${searchCriteria}"`;
});
