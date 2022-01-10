/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Iniciar validacion simple en un formulario*/
	/*$("#IDfrmPrincipal").validate();*/
	
	/*Traduccion de mensajes a ES*/
	jQuery.extend(jQuery.validator.messages, {
		required: "Este campo es obligatorio.",
		remote: "Por favor, rellena este campo.",
		email: "Por favor, escriba una direcci�n de correo v�lida",
		url: "Por favor, escriba una URL v�lida.",
		date: "Por favor, escriba una fecha v�lida.",
		dateISO: "Por favor, escriba una fecha respetando el formato ISO.",
		number: "Por favor, escriba un n�mero entero v�lido.",
		digits: "Por favor, escriba s�lo d�gitos.",
		creditcard: "Por favor, escriba un n�mero de tarjeta v�lido.",
		equalTo: "Por favor, escriba el mismo valor de nuevo.",
		accept: "Por favor, escriba un valor con una extensi�n aceptada.",
		maxlength: jQuery.validator.format("Por favor, no escriba m�s de {0} caracteres."),
		minlength: jQuery.validator.format("Por favor, no escriba menos de {0} caracteres."),
		rangelength: jQuery.validator.format("Por favor, escriba un valor entre {0} y {1} caracteres."),
		range: jQuery.validator.format("Por favor, escriba un valor entre {0} y {1}."),
		max: jQuery.validator.format("Por favor, escriba un valor menor o igual a {0}."),
		min: jQuery.validator.format("Por favor, escriba un valor mayor o igual a {0}.")
	});
	
	/*A�adir metodo Solo Letras Simple*/
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Por favor, escriba s�lo letras, sin t�ldes ni e�es.");
	
	/*A�adir metodo Solo Letras Complejo (Caracteres especiales)*/
	jQuery.validator.addMethod("specialetters", function(value, element) {
		return this.optional(element) || /^[a-z�����������]+$/i.test(value);
	}, "Por favor, escriba s�lo letras."); 
	
	/*Iniciar validacion con reglas especificas de validacion*/
	$("#IDfrmPrincipal").validate({
		rules: {
			txtPassword:{
				required: true,
				minlength: 5
			},
			txtConfirmacion: {
				required: true,
				minlength: 5,
				equalTo: "#IDtxtPassword"
			}
		},
		
		messages: {
			txtPassword:{
				required: "Por favor, ingrese su contrase�a."
			},
			txtConfirmacion: {
				required: "Por favor, confirme su contrase�a.",
				minlength: "Su contrase�a debe tener m�nimo 5 caracteres de largo.",
				equalTo: "La confirmaci�n no concide con la contrase�a original."
			}
		}
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/