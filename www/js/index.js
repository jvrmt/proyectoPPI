$("#form").on('submit', function(){
	var usuario = $('#user').val();
	var password = $('#pass').val();
	$.post("https://dcc.000webhostapp.com/pruebaLogin.php", {codigo: usuario, nip: password}, function(result,status){
		console.log(status);
	});
});