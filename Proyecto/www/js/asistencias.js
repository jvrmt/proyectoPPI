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
    alert("Asistencia:\n"+asistencia+"\nFalta:\n"+falta+"\nFecha:\n"+fecha);
}