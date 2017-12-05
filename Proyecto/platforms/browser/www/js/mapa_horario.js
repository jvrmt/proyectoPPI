var map;
var myLatLng = {lat: 20.657, lng: -103.326};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        disableDefaultUI:true,
        clickableIcons:false
    });
}
function cargarMapa(){
    initMap();
    
    //var codigoAlumno=localStorage.getItem("codigo");
    var codigoAlumno="12345";
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
                        var ubicacion = {lat: parseFloat(json[clave][i]["latitud"]), lng: parseFloat(json[clave][i]["longitud"])};
                        var contenido="Modulo: "+json[clave][i]["modulo"]+"<br>Aula:"+json[clave][i]["aula"]+"<br>Materia: "+json[clave][i]["nombremateria"]+"<br>Horario: "+json[clave][i]["horario"];
                        var infoWindow = new google.maps.InfoWindow();
                        var marcador=new google.maps.Marker({
                            position:ubicacion,
                            map:map,
                            info:contenido
                        });
                        google.maps.event.addListener(marcador,'click',function(){
                            infoWindow.setContent(this.info);
                            infoWindow.open(map,this);
                        })
                        
                    }
                }
            }
        });     
    }