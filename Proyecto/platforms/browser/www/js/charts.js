function verChart(asistencias,faltas) 
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo', 'Cantidad'],
            ['Asistencias',     asistencias],
            ['Faltas',      faltas]
        ]);
        var options = {
            title: "Promedio de asistencias"
        };
        var chart = new google.visualization.PieChart(document.getElementById('visorChart'));
        chart.draw(data, options);
    }   
}