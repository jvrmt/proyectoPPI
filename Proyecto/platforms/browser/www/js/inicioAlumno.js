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
                alert("Intenta más tarde");
            }
        })
    });
    });
}

//document.getElementById("news").innerHTML='<object type="text/html" data="news.html" ></object>';

function cargarNoticias(){

$.post("https://proyectoppi.000webhostapp.com/proyecto/getPreviewNews.php", {idx: 0}, function(result,status){
    //console.log(result);
    var spt = result.split("¬");
    document.getElementById("t0").innerHTML=spt[0];
    document.getElementById("n0").innerHTML=spt[1];
    document.getElementById("t1").innerHTML=spt[2];
    document.getElementById("n1").innerHTML=spt[3];
    document.getElementById("t2").innerHTML=spt[4];
    document.getElementById("n2").innerHTML=spt[5];
    document.getElementById("t3").innerHTML=spt[6];
    document.getElementById("n3").innerHTML=spt[7];
    document.getElementById("t4").innerHTML=spt[8];
    document.getElementById("n4").innerHTML=spt[9];
});

$("#d0").click(function(){
    //console.log("d0 pressed");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getNews.php", {idx: 0}, function(result,status){
        //console.log(result);
        var splited = result.split("¬");
        /*if(splited.length >1)
            alert("Error al cargar");
        else {*/
            localStorage.setItem("foto", splited[0]);
            localStorage.setItem("titulo", splited[1]);
            localStorage.setItem("fecha", splited[2]);
            localStorage.setItem("nota", splited[3]);
            $(location).attr("href","news.html");
        //}
    });
});

$("#d1").click(function(){
    //console.log("d0 pressed");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getNews.php", {idx: 1}, function(result,status){
        //console.log(result);
        var splited = result.split("¬");
        /*if(splited.length >1)
            alert("Error al cargar");
        else {*/
            localStorage.setItem("foto", splited[0]);
            localStorage.setItem("titulo", splited[1]);
            localStorage.setItem("fecha", splited[2]);
            localStorage.setItem("nota", splited[3]);
            $(location).attr("href","news.html");
        //}
    });
});

$("#d2").click(function(){
    //console.log("d0 pressed");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getNews.php", {idx: 2}, function(result,status){
        //console.log(result);
        var splited = result.split("¬");
        /*if(splited.length < 1)
            alert("Error al cargar");
        else {*/
            localStorage.setItem("foto", splited[0]);
            localStorage.setItem("titulo", splited[1]);
            localStorage.setItem("fecha", splited[2]);
            localStorage.setItem("nota", splited[3]);
            $(location).attr("href","news.html");
        //}
    });
});

$("#d3").click(function(){
    //console.log("d0 pressed");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getNews.php", {idx: 3}, function(result,status){
        //console.log(result);
        var splited = result.split("¬");
        /*if(splited.length >1)
            alert("Error al cargar");
        else {*/
            localStorage.setItem("foto", splited[0]);
            localStorage.setItem("titulo", splited[1]);
            localStorage.setItem("fecha", splited[2]);
            localStorage.setItem("nota", splited[3]);
            $(location).attr("href","news.html");
        //}
    });
});

$("#d4").click(function(){
    //console.log("d0 pressed");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getNews.php", {idx: 4}, function(result,status){
        //console.log(result);
        var splited = result.split("¬");
        /*if(splited.length >1)
            alert("Error al cargar");
        else {*/
            localStorage.setItem("foto", splited[0]);
            localStorage.setItem("titulo", splited[1]);
            localStorage.setItem("fecha", splited[2]);
            localStorage.setItem("nota", splited[3]);
            $(location).attr("href","news.html");
        //}
    });
});
    
}