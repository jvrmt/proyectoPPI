function verChart(asistencias,faltas) 
{
    /*
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
        //var opcion=JSON.parse(options);
        var chart = new google.visualization.PieChart(document.getElementById('visorChart'));
        chart.draw(data, opcion);
    } */
    var total=parseInt(faltas)+parseInt(asistencias);
    document.getElementById("Faltas").innerHTML="Faltas: "+faltas+" ("+Math.round((100/total)*parseInt(faltas))+"%)";
    document.getElementById("Asistencias").innerHTML="Asistencias: "+asistencias+" ("+Math.round((100/total)*parseInt(asistencias))+"%)";
    document.getElementById("imagenChart").src="https://chart.googleapis.com/chart?cht=p3&chd=t:"+asistencias+","+faltas+"&chs=300x150&chl=Asistencias|Faltas"
    
}