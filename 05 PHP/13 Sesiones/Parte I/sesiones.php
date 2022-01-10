<?php
	#Inicializar una sesi�n y crear el ID de la sesi�n:
	session_start();
	echo "La sesi�n ha sido iniciada...";
	
	echo "<br/><br/>";
	
	#Devuelve el identificador de la sesi�n actual:
	echo "ID de sesi�n: " . session_id();
	
	echo "<br/><br/>";
	
	#Devuelve el nombre de la sesi�n:
	echo "Nombre de sesi�n: " . session_name();
	
	echo "<br/><br/>";
	
	#Generar un nuevo ID de sesi�n:
	session_regenerate_id();
	echo "Nuevo ID de sesi�n: " . session_id();
	
	#Libera todas las variables de sesi�n registradas:
	session_unset();
	
	echo "<br/><br/>";
	
	#Crear variable de sesi�n:
	$_SESSION["VariableSesion"] = "Contenido";
	echo "Variable de sesi�n: " . $_SESSION["VariableSesion"];
	
	#Destruye toda la informaci�n registrada de una sesi�n;
	session_destroy();
?>