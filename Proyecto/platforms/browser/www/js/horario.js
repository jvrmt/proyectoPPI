function cargarHorario(){
    var codigoAlumno=localStorage.getItem("codigo");
    var padre=document.getElementById("divisionHorario");
    padre.innerHTML="";
    //Obtener el horario
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getHorarioAlumno.php", {codigo:codigoAlumno}, function(result,status){
            //alert(result);
            var json=JSON.parse(result);
            for(var clave in json)
            {
                if(json.hasOwnProperty(clave))
                {
                   for(i=0;i<json[clave].length;i++)
                    {
                        
                        var divisionMateria=document.createElement("div");
                        var nombreMateria=json[clave][i]["nombremateria"];
                        var modulo=json[clave][i]["modulo"];
                        var aula=json[clave][i]["aula"];
                        var codigomaestro=json[clave][i]["codigomaestro"];   
                        var horario=json[clave][i]["horario"];
                        var contenido="Codigo del profesor: "+codigomaestro+"<br>Modulo: "+modulo+"<br>Aula: "+aula+"<br>Horario: "+horario+"<br>";
                        divisionMateria.innerHTML="<div class='content-block-title'>"+nombreMateria+"</div><div class='content-block inset'>      <div class='content-block-inner'>        <p>"+contenido+"</p>      </div>    </div>";
                        padre.appendChild(divisionMateria);
                        
                    }
                }
            }
        }); 
}