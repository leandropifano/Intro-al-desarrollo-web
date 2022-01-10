/*LARGO:-----------------------------------------------------------------------------------------------------------------------------*/
function Largo(Min, Max, IDfrm, IDtxt, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = document.getElementById(IDtxt).value;
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Vac�o");
	} else if(IDtxtLargo >= Min && IDtxtLargo <= Max){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
	} else{
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Incorrecto");
	}
}

function Largo_Salir(Min, Max, IDfrm, IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = document.getElementById(IDtxt).value;
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Vac�o");
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deber� contener un m�nimo de " + Min + " y un m�ximo de " + Max + " caracteres."
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	} else if(IDtxtLargo >= Min && IDtxtLargo <= Max){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	} else{
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Incorrecto");
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deber� contener un m�nimo de " + Min + " y un m�ximo de " + Max + " caracteres."
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*SOLO NUMEROS:----------------------------------------------------------------------------------------------------------------------*/
function Solo_Numeros(Evento, IDfrm, IDlblAviso){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if (CodigoCaracter > 31 && (CodigoCaracter < 48 || CodigoCaracter > 57)){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Solo n�meros");
		return false;
	} else{
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		return true;
	}
}

function Solo_Numeros_Salir(IDfrm, IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = document.getElementById(IDtxt).value;
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Vac�o");
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deber� contener solo caracteres num�ricos y no puede estar vac�o."
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	} else {
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*SOLO LETRAS SIMPLE (SIN ESPACIOS):-------------------------------------------------------------------------------------------------*/
function Solo_Letras_SSE(Evento, IDfrm, IDlblAviso){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8 ){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Solo letras");
		return false;
	} else{
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		return true;
	}
}

function Solo_Letras_SSE_Salir(IDfrm, IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = document.getElementById(IDtxt).value;
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Vac�o");
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deber� contener solo caracteres alfab�ticos, no se admiten ni t�ldes ni espacios en blanco y no puede estar vac�o."
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	} else {
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*SOLO LETRAS COMPLEJO (CON ESPACIOS):-----------------------------------------------------------------------------------------------*/
function Solo_Letras_CCE(Evento, IDfrm, IDlblAviso){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8
		&& CodigoCaracter != 32 && CodigoCaracter != 241 && CodigoCaracter != 209 && CodigoCaracter != 225 && CodigoCaracter != 193
		&& CodigoCaracter != 233 && CodigoCaracter != 201 && CodigoCaracter != 237 && CodigoCaracter != 205 && CodigoCaracter != 243
		&& CodigoCaracter != 211 && CodigoCaracter != 250 && CodigoCaracter != 218){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Solo letras");
		return false;
	} else{
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		return true;
	}
}

function Solo_Letras_CCE_Salir(IDfrm, IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = document.getElementById(IDtxt).value;
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Vac�o");
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deber� contener caracteres alfab�ticos, algunos caracteres especiales como t�ldes, e�es, espacios y no puede ser vac�o."
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	} else {
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*SELECCION DE ELEMENTOS:------------------------------------------------------------------------------------------------------------*/
function Selecion_Elementos(ElementName, IDfrm, IDpar, IDlblAviso){
	
	/*Obtener un vector con los elementos de mismo nombre*/
	var Elementos = document.getElementsByName(ElementName);
	
	for (var i=0 ; i <= Elementos.length ; i++){
		if (Elementos[i].checked){
			Selecion_Elementos_Evaluar('V', IDfrm, IDpar, IDlblAviso);
			return;
		} else if (i == Elementos.length - 1) { 
			Selecion_Elementos_Evaluar('F', IDfrm, IDpar, IDlblAviso);
			return;
		}
	}
}

function Selecion_Elementos_Evaluar(CHK, IDfrm, IDpar, IDlblAviso){
	/*Evaluar*/
	if (CHK == "V"){
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Correcto");
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	} else {
		ReemplazarElemento("label", IDfrm, IDlblAviso, "Incorrecto");
		/*Escribir leyenda informativa*/
		var Leyenda = "Deber� seleccionar por lo menos una de las opciones."
		ReemplazarElemento("p", IDfrm, IDpar, Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*REEMPLAZAR ELEMENTOS DOM:----------------------------------------------------------------------------------------------------------*/
function ReemplazarElemento(Tipo, IDfrm, IDlbl, lblContenido){
	/*Seleccionar el elemento a reemplazar*/
	var ViejaEtiqueta = document.getElementById(IDlbl);
	
	/*Crear el nuevo elemento y su contenido*/
	var NuevaEtiqueta = document.createElement(Tipo);
	var NuevoContenido = document.createTextNode(lblContenido);
	
	/*Determinar ID del nuevo elemento*/
	NuevaEtiqueta.id = IDlbl;
	
	/*A�adir contenido*/
	NuevaEtiqueta.appendChild(NuevoContenido);
	
	/*Reemplazar el elemento con replaceChild*/
	document.getElementById(IDfrm).replaceChild(NuevaEtiqueta, ViejaEtiqueta)
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*AGREGAR EVENTO DOM:----------------------------------------------------------------------------------------------------------------*/
function Agregar_Evento_DOM(IDElemento, Evento, Captura, Funcion){
	/*Obtener elemento por su ID*/
	var Elemento = document.getElementById(IDElemento);
	
	/*El elemento capturar� un evento o no*/
	if (Captura == "F"){
		var Prefijo = "Elemento." + Evento + " = function(){ ";
		var Sufijo = "};";
		var Expresion = Prefijo + Funcion + Sufijo;
		eval(Expresion);
	}else if (Captura == "V") {
		var Prefijo = "Elemento." + Evento + " = function(event){return ";
		var Sufijo = "};";
		var Expresion = Prefijo + Funcion + Sufijo;
		eval(Expresion);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/