// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    //console.log("Device is ready!");
});


function cargarMaterias()
{
    var padre=document.getElementById("listaMaterias");
    padre.innerHTML="";
    for(i=1;i<10;i++)
    {
        var contenedorBotones = document.createElement("p");
        contenedorBotones.setAttribute("class","buttons-row");
        var boton1=document.createElement("a");
        boton1.setAttribute("href","maestros_asistencia.html");
        boton1.setAttribute("class","button button-fill color-green");
        boton1.setAttribute("onclick","onclick=guardarMateria('"+i+"','Materia "+i+"')");
        var contenido1=document.createTextNode("Tomar asistencia")
        boton1.appendChild(contenido1);
        var boton2=document.createElement("a");
        boton2.setAttribute("href","maestros_promedio_asistencias.html");
        boton2.setAttribute("class","button button-fill color-blue");
        boton2.setAttribute("onclick","onclick=guardarMateria('"+i+"','Materia "+i+"')");
        var contenido2=document.createTextNode("Ver asistencias");
        boton2.appendChild(contenido2);
        var datosMateria=document.createTextNode("Materia "+i);
        contenedorBotones.appendChild(boton1);
        contenedorBotones.appendChild(boton2);
        padre.appendChild(datosMateria);
        padre.appendChild(contenedorBotones);   
    }
}
function cargarListaDeAlumnos()
{
    contenedor=document.getElementById("listaDeAlumnos");
    contenedor.innerHTML="";
    for(i=1;i<5;i++)
    {
        var nombreAlumno="Alumno "+i; 
        var elemento=document.createElement("li");
        var label=document.createElement("label");
        label.setAttribute("class","label-checkbox item-content");
        var input=document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("name","alumnoEnLista");
        input.setAttribute("value",nombreAlumno);
        var div=document.createElement("div");
        div.setAttribute("class","item-media");
        var icono=document.createElement("i");
        icono.setAttribute("class","icon icon-form-checkbox");
        div.appendChild(icono);
        var div2=document.createElement("div");
        div2.setAttribute("class","item-inner");
        var div3=document.createElement("div");
        div3.setAttribute("class","item-title");
        var valor=document.createTextNode(nombreAlumno);
        div3.appendChild(valor);
        div2.appendChild(div3);
        label.appendChild(input);
        label.appendChild(div);
        label.appendChild(div2);
        elemento.appendChild(label);
        contenedor.appendChild(elemento);   
    }
}
function guardarMateria(nrc,nombreMateria)
{
    localStorage.setItem("nrc",nrc);
    localStorage.setItem("materia",nombreMateria);
}

function cargarAlumnosEnSelector()
{
    var alumnos=[];
    for(i=0;i<6;i++)
    {
        alumnos[i]="Alumno "+(i+1);
    }
    
    var miPicker = myApp.picker({
    input: '#selectorAlumnos',
    cols: [
        {
            textAlign: 'center',
            values: alumnos
        }
    ],
    onClose: function(){
        //document.getElementById("seleccionado").innerHTML=miPicker.value[0];  
        //Aquí debería actualizar el chart
    }
});

    
}

myApp.onPageBeforeAnimation('maestros_asistencia', function (page) {
    // Se ejecuta inmediatamente despues de llamar la pagina "maestros_asistencias", etiqueta contenida en "data-page"
    var calendario=myApp.calendar({
        input:"#fechaDeAsistencia",
        dateFormat:"dd-mm-yyyy",
        multiple:false
    });
    
    document.getElementById("nrc").innerHTML="NRC: "+localStorage.getItem("nrc");
    document.getElementById("materia").innerHTML="Materia: "+localStorage.getItem("materia");
    cargarListaDeAlumnos();
})

myApp.onPageInit('maestros_materias',function(page){

    cargarMaterias();
})

myApp.onPageInit('maestros_promedio_asistencias',function(page){
    document.getElementById("materia").innerHTML="Materia: "+localStorage.getItem("materia");
    cargarAlumnosEnSelector();
    verChart();
})

$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');

})