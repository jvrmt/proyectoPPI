/*var splitted = localStorage.getItem("splitted");

document.getElementById("titulo").innerHTML = splitted[0];
document.getElementById("fecha").innerHTML = splitted[1];
document.getElementById("nota").innerHTML = splitted[2];*/
//document.getElementById("titulo").innerHTML = splitted[3];

$("#foto").append("<img src="+localStorage.getItem("foto")+" style='width=300px'>");
document.getElementById("titulo").innerHTML=localStorage.getItem("titulo");
document.getElementById("fecha").innerHTML=localStorage.getItem("fecha");
document.getElementById("nota").innerHTML=localStorage.getItem("nota");