function desmatricular()
{
    var codigo=localStorage.getItem("codigo");
    //var codigoAlumno=localStorage.getItem("codigo");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/eliminarAlumno.php", {codigo:codigo}, function(result,status){
        if(result == "eliminado"){ 
            //Cerrar sesion
        }else{
            alert("Por el momento no es posible realizar la acción");
        }
    });
}