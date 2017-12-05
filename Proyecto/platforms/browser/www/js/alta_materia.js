function cargarSecciones()
{   
    var padre=document.getElementById("listaSecciones");
    var secciones=[];
    padre.innerHTML="";
    
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getTodasSecciones.php", {}, function(result,status){
        if(result == "0"){ 
        }
        else{
            var json=JSON.parse(result);
            //Lo guardamos para su posterior uso
            localStorage.setItem("jsonSecciones",result);
            for(var clave in json)
            {
                if(json.hasOwnProperty(clave))
                {
                   for(i=0;i<json[clave].length;i++)
                    {
                        var seccion=json[clave][i]["nrc"];
                        var nombre=json[clave][i]["nombremateria"];

                        var elemento=document.createElement("li");
                        var label=document.createElement("label");
                        label.setAttribute("class","label-radio item-content");
                        var input=document.createElement("input");
                        input.setAttribute("type","radio");
                        input.setAttribute("name","secciones");
                        input.setAttribute("value",seccion);

                        var div=document.createElement("div");
                        div.setAttribute("class","item-media")

                        var icono=document.createElement("i");
                        icono.setAttribute("class","icon icon-form-radio");
                        div.appendChild(icono);

                        var div2=document.createElement("div");
                        div2.setAttribute("class","item-inner");

                        var div3=document.createElement("div");
                        div3.setAttribute("class","item-title");

                        var mostrar=document.createTextNode(seccion+" / "+nombre);
                        div3.appendChild(mostrar);
                        div2.appendChild(div3);

                        label.appendChild(input);
                        label.appendChild(div);
                        label.appendChild(div2);
                        elemento.appendChild(label);

                        padre.appendChild(elemento); 
                    }
                }
            }
        }
    });
}
function guardarDatosMateria(materia,nrc,codigomaestro,nombremaestro,modulo,aula,horario)
{    
    localStorage.setItem("altamateria",materia);
    localStorage.setItem("altanrc",nrc);
    localStorage.setItem("altacodigomaestro",codigomaestro);
    localStorage.setItem("altanombremaestro",nombremaestro);
    localStorage.setItem("altamodulo",modulo);
    localStorage.setItem("altaaula",aula);
    localStorage.setItem("altahorario",horario);
}
function cargarDatosMateriaARegistrar()
{
    document.getElementById("materia").innerHTML="Materia: "+localStorage.getItem("altamateria");
    document.getElementById("nrc").innerHTML="NRC: "+localStorage.getItem("altanrc");
    document.getElementById("codigomaestro").innerHTML=localStorage.getItem("altacodigomaestro");
    document.getElementById("nombremaestro").innerHTML=localStorage.getItem("altanombremaestro");
    document.getElementById("modulo").innerHTML="Módulo: "+localStorage.getItem("altamodulo");
    document.getElementById("aula").innerHTML="Aula: "+localStorage.getItem("altaaula");
    document.getElementById("horario").innerHTML="Horario: "+localStorage.getItem("altahorario");
}
function getMateriaSeleccionada()//Evitar pedrilo de nuevo al servidor
{
    var secciones= document.getElementsByName("secciones");
    var seccionSeleccionada="";
    for(var i=0;i<secciones.length;i++){
        if(secciones[i].checked){
            seccionSeleccionada=secciones[i].value;
            break;
        }
    }
    var json=JSON.parse(localStorage.getItem("jsonSecciones"));
    for(var clave in json)
    {
        if(json.hasOwnProperty(clave))
        {
            for(i=0;i<json[clave].length;i++)
            {
                if(json[clave][i]["nrc"]==seccionSeleccionada){
                    guardarDatosMateria(json[clave][i]["nombremateria"],json[clave][i]["nrc"],json[clave][i]["codigomaestro"],json[clave][i]["nombremaestro"],json[clave][i]["modulo"],json[clave][i]["aula"],json[clave][i]["horario"]);
                    localStorage.setItem("nrcAlta",seccionSeleccionada);
                    break;
                }
            }
        }
    }
}
function darDeAlta()
{
    var nrcAlta=localStorage.getItem("nrcAlta");
    var codigoAlumno=localStorage.getItem("codigo");
    //var codigoAlumno="12345";
    $.post("https://proyectoppi.000webhostapp.com/proyecto/altaSeccionAlumno.php", {codigoalumno:codigoAlumno,nrc: nrcAlta}, function(result,status){
        if(result == "0"){ 
        }else{
            alert(result);
        }
    });
}
           