function getAsistencias()
{
    var alumnos=document.getElementsByName("alumnoEnLista");
    var asistencia="";
    var falta="";
    for(i=0;i<alumnos.length;i++)
    {
        if(alumnos[i].checked){
            asistencia=asistencia+alumnos[i].value+",";
        }
        else{
            falta=falta+alumnos[i].value+",";
        }
    }
    fecha=document.getElementById("fechaDeAsistencia").value;
    //alert("Asistencia:\n"+asistencia+"\nFalta:\n"+falta+"\nFecha:\n"+fecha);
        var nrc=localStorage.getItem("nrc");
        $.post("https://proyectoppi.000webhostapp.com/proyecto/asistencia.php", {asistencia: asistencia,falta:falta,nrc:nrc}, function(result,status){
            //alert(result);
            if(result=="actualizado"){
                alert("Asistencia guardada");
            }
            else{
                alert("Ocurrió un error");
            }
        });

}