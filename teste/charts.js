//Configurações e leitura de API
var numero = 0;
axios.get('http://localhost:3000/chart/1')
    .then(response => criaListaDinamica(response.data))
    .catch(error => console.log(error))
const criaListaDinamica = (alunos) => {
    alunos.map(num => {
        numero = num.numum;
        console.log('All be function');
    })
}

// PieChart
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Nitrogen', numero],
        ['Oxygen', 10],
        ['Other', 10]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    chart.draw(data, null);
}