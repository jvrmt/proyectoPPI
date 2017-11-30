function enviar() {
	var usuario = $('#user').val();
	var password = $('#pass').val();
	//alert(usuario+" "+password);
	$.post("https://dcc.000webhostapp.com/pruebaLogin.php", {codigo: usuario, nip: password}, function(result,status){
		//
		if(result == "0")
			error();
		else {
			var tipo = result.substr(0,1);
			if (tipo == "A") { //Alumno
				//alert("Fucking alumno");
				$(location).attr("href","inicioAlumno.html");
			} if(tipo == "T"){} // Trabajador
		}
	});
}

function error(){
	$("#lblError").fadeIn(2000);
	$("#lblError").fadeOut(2000);
}

$(document).keypress(function(e){
	if(e.which == 13)
		if($('#user').val() != "" && $('#pass').val() != "")
			$("#enviar").click();
});