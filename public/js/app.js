$(document).ready(function(){
	$.ajax({
		url : window.location.href + "/demo.json",
		type : "GET",
		success : function(response){
			var nombre = "<ul>";
			for (var i = 0  ; i<response.length; i++) {
				nombre += "<li>" + response[i].nombre+"</li>";
			}
			nombre += "</ul>";
			$("#nombres").html(nombre);

			var correo = "<ul>";
			for (var i = 0  ; i<response.length; i++) {
				correo += "<li>" + response[i].correo+"</li>";
			}
			correo += "</ul>";
			$("#correos").html(correo);

			var edad = "<ul>";
			for (var i = 0  ; i<response.length; i++) {
				edad += "<li>" + response[i].edad+"</li>";
			}
			correo += "</ul>";
			$("#edades").html(edad);
		}
	});
});