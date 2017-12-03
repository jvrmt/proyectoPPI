function verChart() 
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo', 'Cantidad'],
            ['Asistencias',     11],
            ['Faltas',      2]
        ]);
        var options = {
            title: "Promedio de asistencias"
        };
        var chart = new google.visualization.PieChart(document.getElementById('visorChart'));
        chart.draw(data, options);
    }   
}