// reports_statistics_script.js
// Datos de ejemplo para los gráficos
const documentsChartData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [{
        label: "Cantidad de Documentos Cargados",
        data: [30, 40, 50, 45, 55, 60],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
    }]
};

const usersChartData = {
    labels: ["Departamento A", "Departamento B", "Departamento C", "Departamento D", "Departamento E"],
    datasets: [{
        label: "Usuarios Activos por Departamento",
        data: [20, 15, 25, 30, 10],
        backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
    }]
};

// Configuración de los gráficos
const documentsChartCtx = document.getElementById('documentsChart').getContext('2d');
const documentsChart = new Chart(documentsChartCtx, {
    type: 'bar',
    data: documentsChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const usersChartCtx = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(usersChartCtx, {
    type: 'bar',
    data: usersChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
