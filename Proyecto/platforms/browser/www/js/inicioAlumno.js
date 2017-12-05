//$("#temp").html('<object data="https://crollz.000webhostapp.com/charts/charts.php">');

//$('#temp').load('http://www.somesitehere.com');

/*$.get('http://a_site.com/a_page.html', function(data) {
    $('#temp').html(data);
});*/
function inicializarInicioAlumno()
{
    cargarClima();
    cargarBotonDesmatricular();
    cargarNoticias();
}

function inicializarSinBoton()
{
    cargarClima();
    cargarNoticias();
    
}

function cargarClima(){
    document.getElementById("temp").innerHTML='<object type="text/html" data="https://crollz.000webhostapp.com/jsonDate/jsonDate.php" ></object>';    
}

function cargarBotonDesmatricular(){
    $$('.confirm-ok').on('click', function () {
    myApp.confirm('¿Estas seguro? Tus datos se perderán', function () {
        //Proceso de desmatricular
        var codigo=localStorage.getItem("codigo");
        $.post("https://proyectoppi.000webhostapp.com/proyecto/eliminarAlumno.php",{codigo:codigo},function(result,status){
            if(result=="eliminado"){
                //Eliminar datos y salir
                localStorage.clear();
                location.href="index.html";
            }
            else{
                alert("Intenta más tarde")
            }
        })
    });
    });
}

//document.getElementById("news").innerHTML='<object type="text/html" data="news.html" ></object>';

function cargarNoticias(){

$("#d0").click(function(){
	//console.log("d0 pressed");
	$.post("https://proyectoppi.000webhostapp.com/proyecto/getNews.php", {idx: 0}, function(result,status){
		//console.log(result);
		var splited = result.split("¬");
		localStorage.setItem("splitted",splitted);
		$(location).attr("href","news.html");
		//console.log(splited.length)
	});
});
    
}