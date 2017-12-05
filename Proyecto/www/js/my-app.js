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

function cargarBotonSalir(){
    $$('#botonSalir').on('click', function () {
    myApp.confirm('¿Estas seguro que deseas salir?', function () {
        //Proceso de desmatricular
        localStorage.clear();
        location.href="index.html";
    });
    });
}
function cargarMaterias()//Se usa en maestros_materias
{
    var padre=document.getElementById("listaMaterias");
    padre.innerHTML="";
    var usuario=localStorage.getItem("codigo");
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getListaSecciones.php", {codigo: usuario}, function(result,status){
		if(result == "0"){
                
        }	//No carga nada
		else {
			//Decodificar json
            var json=JSON.parse(result);
            for(var clave in json)
            {
                if(json.hasOwnProperty(clave))
                {
                   for(i=0;i<json[clave].length;i++)
                    {
                        var carganrc=json[clave][i]["nrc"];
                        var cargamateria=json[clave][i]["nombremateria"];
                        var contenedorBotones = document.createElement("p");
                        contenedorBotones.setAttribute("class","buttons-row");
                        var boton1=document.createElement("a");
                        boton1.setAttribute("href","maestros_asistencia.html");
                        boton1.setAttribute("class","button button-fill color-green");
                        boton1.setAttribute("onclick","guardarMateria('"+carganrc+"','"+cargamateria+"')");
                        var contenido1=document.createTextNode("Tomar asistencia")
                        boton1.appendChild(contenido1);
                        var boton2=document.createElement("a");
                        boton2.setAttribute("href","maestros_promedio_asistencias.html");
                        boton2.setAttribute("class","button button-fill color-blue");
                        boton2.setAttribute("onclick","guardarMateria('"+carganrc+"','"+cargamateria+"')");
                        var contenido2=document.createTextNode("Ver asistencias");
                        boton2.appendChild(contenido2);
                        var datosMateria=document.createTextNode(carganrc+" / "+cargamateria);
                        contenedorBotones.appendChild(boton1);
                        contenedorBotones.appendChild(boton2);
                        var divisionTitulo=document.createElement("p");
                        divisionTitulo.setAttribute("class","content-block-title");
                        divisionTitulo.appendChild(datosMateria);
                        padre.appendChild(divisionTitulo);
                        padre.appendChild(contenedorBotones); 
                    }

                }
            }
		}
	});
}
function cargarListaDeAlumnos()//para maestros_asistencia
{
    contenedor=document.getElementById("listaDeAlumnos");
    contenedor.innerHTML="";
    var nrc=localStorage.getItem("nrc");
    //Peticion al servidor
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getListaSeccionAlumnos.php", {nrc: nrc}, function(result,status){
		if(result == "0"){
                
        }	//No carga nada
		else {
			//Decodificar json
            var json=JSON.parse(result);
            for(var clave in json)
            {
                if(json.hasOwnProperty(clave))
                {
                   for(i=0;i<json[clave].length;i++)
                    {
                        var codigoAlumno=json[clave][i]["codigoalumno"];
                        var nombreAlumno=json[clave][i]["nombrealumno"];
                        var elemento=document.createElement("li");
                        var label=document.createElement("label");
                        label.setAttribute("class","label-checkbox item-content");
                        var input=document.createElement("input");
                        input.setAttribute("type","checkbox");
                        input.setAttribute("name","alumnoEnLista");
                        input.setAttribute("value",codigoAlumno);
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
            }
		}
	});
}
function guardarMateria(nrc,nombreMateria)
{
    localStorage.setItem("nrc",nrc);
    localStorage.setItem("materia",nombreMateria);
    return true;
}

function cargarAlumnosEnSelector()
{
    var nrc=localStorage.getItem("nrc");
    //Peticion al servidor
    var alumnos=[];
    var asistencias;
    var faltas;
    var json;
    
    $.post("https://proyectoppi.000webhostapp.com/proyecto/getListaSeccionAlumnos.php", {nrc: nrc}, function(result,status){
		if(result == "0"){        
        }
        else{
            json=JSON.parse(result);
            for(var clave in json)
            {
                if(json.hasOwnProperty(clave))
                {
                   for(i=0;i<json[clave].length;i++)
                    {
                        alumnos[i]=json[clave][i]["nombrealumno"];
                    }
                }
            }
        }
    });
    
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
        for(var clave in json)
            {
                if(json.hasOwnProperty(clave))
                {
                   for(i=0;i<json[clave].length;i++)
                    {
                        if(miPicker.value==json[clave][i]["nombrealumno"]){
                            asistencias=json[clave][i]["asistencias"];
                            faltas=json[clave][i]["faltas"];
                        }
                    }
                }
            }
        verChart(parseInt(asistencias),parseInt(faltas));
    }
}); 
}

myApp.onPageInit("inicioAlumno",function(page){
    inicializarSinBoton();
})

myApp.onPageBeforeAnimation('maestros_asistencia', function (page) {
    // Se ejecuta inmediatamente despues de llamar la pagina "maestros_asistencias", etiqueta contenida en "data-page"
    var calendario=myApp.calendar({
        input:"#fechaDeAsistencia",
        dateFormat:"dd-mm-yyyy",
        multiple:false,
        value:[new Date()]
    });
    document.getElementById("materia").innerHTML="Nombre: "+localStorage.getItem("materia");
    document.getElementById("nrc").innerHTML="NRC: "+localStorage.getItem("nrc");
    cargarListaDeAlumnos();
})

myApp.onPageBeforeAnimation("mapa_horario",function(page){
    cargarMapa();
})
myApp.onPageInit("horario",function(page){
    cargarHorario();
})

myApp.onPageInit("alta_materia",function(page){
    guardarDatosMateria("-","-","-","-","-","-","-");
    cargarDatosMateriaARegistrar();
})

myApp.onPageInit("buscar_materia",function(page){
    cargarSecciones();
    var mySearchbar = myApp.searchbar('.searchbar', {
    searchList: '.list-block-search',
    searchIn: '.item-title'
    }); 
})

myApp.onPageBack("buscar_materia",function(page){
    getMateriaSeleccionada();
    
})
myApp.onPageAfterBack("buscar_materia",function(page){
    cargarDatosMateriaARegistrar();
    mainView.router.loadPage("alta_materia.html");
})
myApp.onPageAfterBack("alta_materia",function(page){
    cargarHorario();
    mainView.router.loadPage("horario.html");
})

myApp.onPageInit('maestros_materias',function(page){
    cargarMaterias();
})

myApp.onPageInit('maestros_promedio_asistencias',function(page){
    document.getElementById("materia").innerHTML="Nombre: "+localStorage.getItem("materia");
    document.getElementById("nrc").innerHTML="NRC: "+localStorage.getItem("nrc");
    cargarAlumnosEnSelector();
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