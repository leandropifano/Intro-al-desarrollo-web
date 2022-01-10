/*LARGO:------------------------------------------------------------------------------------------------------*/
document.write("LARGO");
var Saludo = "Hola Mundo!";

/*Length nos devolvera el largo de nuestra cadena:*/
var LargoSaludo = Saludo.length;

document.write("<br/>" + Saludo);
document.write("<br/>Largo del saludo = " + LargoSaludo);
/*------------------------------------------------------------------------------------------------------------*/

/*MAYUSCULAS Y MINUSCULAS:------------------------------------------------------------------------------------*/
document.write("<br/><br/>MAYUSCULAS Y MINUSCULAS");
/*ToUpper*/
var Nombre = "Juan";
var Nombre = Nombre.toUpperCase();
document.write("<br/>Mayusculas: " + Nombre);

/*ToLower*/
var Apellido = "GONZALEZ";
var Apellido = Apellido.toLowerCase();
document.write("<br/>Minusculas: " + Apellido);
/*------------------------------------------------------------------------------------------------------------*/

/*SELECCION DE CARACTERES:------------------------------------------------------------------------------------*/
document.write("<br/><br/>SELECCION DE CARACTERES");
var PrimerLetra = Saludo.charAt(0);
var TercerLetra = Saludo.charAt(2);

document.write("<br/>" + Saludo);
document.write("<br/>PrimerLetra: " + PrimerLetra);
document.write("<br/>TercerLetra: " + TercerLetra);
/*------------------------------------------------------------------------------------------------------------*/

/*INDEX OF:---------------------------------------------------------------------------------------------------*/
/*Calcula la posici�n en la que se encuentra el car�cter indicado dentro de la cadena de texto.
Si el car�cter se incluye varias veces dentro de la cadena de texto, se devuelve su primera posici�n empezando
a buscar desde la izquierda. Si la cadena no contiene el car�cter, la funci�n devuelve el valor -1.*/
document.write("<br/><br/>INDEX OF");

var Palabra = "Prueba";
var Posicion = Palabra.indexOf('e');
var SinPosicion = Palabra.indexOf('d');

document.write("<br/>" + Palabra);
document.write("<br/>Posicion de la letra 'e': " + Posicion);
document.write("<br/>Posicion de la letra 'd': " + SinPosicion);
/*------------------------------------------------------------------------------------------------------------*/

/*LAST INDEX OF:----------------------------------------------------------------------------------------------*/
/*Calcula la �ltima posici�n en la que se encuentra el car�cter indicado dentro de la cadena de texto.*/
document.write("<br/><br/>LAST INDEX OF");

var OtraPalabra = "Catalejo";
var Ultima = OtraPalabra.lastIndexOf('a');

document.write("<br/>" + OtraPalabra);
document.write("<br/>Ultima posicion de la letra 'a': " + Ultima);
/*------------------------------------------------------------------------------------------------------------*/

/*SUB STRING:-------------------------------------------------------------------------------------------------*/
/*substring(inicio, final)
Extrae una porci�n de una cadena de texto. El segundo par�metro es opcional.
Si s�lo se indica el par�metro inicio, la funci�n devuelve la parte de la cadena original correspondiente
desde esa posici�n hasta el final*/
document.write("<br/><br/>SUB STRING");

var Parte01 = Saludo.substring(5);
var Parte02 = Saludo.substring(3,7);

document.write("<br/>Parte 01 del Saludo: " + Parte01);
document.write("<br/>Parte 02 del Saludo: " + Parte02);

/*Si se indica un final m�s peque�o que el inicio, JavaScript los considera de forma inversa, ya que
autom�ticamente asigna el valor m�s peque�o al inicio y el m�s grande al final:*/
/*------------------------------------------------------------------------------------------------------------*/

/*SPLIT:------------------------------------------------------------------------------------------------------*/
/*Convierte una cadena de texto en un vector de cadenas de texto.
La funci�n parte la cadena de texto determinando sus trozos a partir del car�cter separador indicado.*/
document.write("<br/><br/>SPLIT");

var Frase = "Esta cadena tiene varias palabras separadas por espacios"
var Palabras = Frase.split(" ");

/*Palabras = ["Esta", "cadena", "tiene", "varias", "palabras", "separadas", "por", "espacios"];*/

document.write("<br/>Frase completa: " + Frase);
document.write("<br/><br/>Palabras de la frase:");

for(i=0; i<Palabras.length; i++){
	document.write("<br/>" + Palabras[i]);
}

/*Con esta funci�n tambien se pueden extraer las letras que forman una palabra.*/
var Letras = Palabra.split("");

document.write("<br/><br/>Letras de la palabra: " + Palabra);

for(i=0; i<Letras.length; i++){
	document.write("<br/>" + Letras[i]);
}
/*------------------------------------------------------------------------------------------------------------*/

/*JOIN:-------------------------------------------------------------------------------------------------------*/
/*Es la funci�n contraria a split(). Une todos los elementos de un vector para formar una cadena de texto.
Para unir los elementos se utiliza el car�cter separador indicado*/
document.write("<br/><br/>JOIN");

var UnionPalabra = Letras.join("");
var UnionFrase = Palabras.join(" ");

document.write("<br/>Palabra unida: " + UnionPalabra);
document.write("<br/>Frase unida: " + UnionFrase);
/*------------------------------------------------------------------------------------------------------------*/

/*PILAS Y COLAS:----------------------------------------------------------------------------------------------*/
/*Push*/
/*Agrega un elemento al final del vector. El vector original se modifica y aumenta su longitud en 1 elemento.
(Tambi�n es posible a�adir m�s de un elemento a la vez)*/
document.write("<br/><br/>PILAS Y COLAS");
document.write("<br/><br/>Push:");

var Vector = [1, 2, 3];
document.write("<br/>Vector: " + Vector);

Vector.push(4);
document.write("<br/>Vector despu�s de Push: " + Vector);

/*Pop*/
/*Quita el �ltimo elemento del vector y lo devuelve.
El vector original se modifica y su longitud disminuye en 1 elemento.*/
var UltimoElemento = Vector.pop();

document.write("<br/><br/>Pop:");
document.write("<br/>Elemento quitado de la �ltima posicion de Vector: " + UltimoElemento);
document.write("<br/>Vector despu�s de Pop: " + Vector);

/*Shift*/
/*Quita el primer elemento del vector y lo devuelve.
El vector original se ve modificado y su longitud disminuida en 1 elemento.*/
var PrimerElemento = Vector.shift();

document.write("<br/><br/>Shift:");
document.write("<br/>Elemento quitado de la primer posicion de Vector: " + PrimerElemento);
document.write("<br/>Vector despu�s de Shift: " + Vector);

/*Unshift*/
/*Agrega un elemento al principio del vector. El vector original se modifica y aumenta su longitud en 1 elemento.
(Tambi�n es posible a�adir m�s de un elemento a la vez)*/
Vector.unshift(0);

document.write("<br/><br/>Unshift:");
document.write("<br/>Vector despu�s de unshift: " + Vector);

/*Reverse*/
/*Modifica un vector colocando sus elementos en el orden inverso a su posici�n original.*/
Vector.reverse();

document.write("<br/><br/>Reverse:");
document.write("<br/>Vector despu�s de reverse: " + Vector);
/*------------------------------------------------------------------------------------------------------------*/

/*FUNCIONES NUMERICAS:----------------------------------------------------------------------------------------*/
document.write("<br/><br/>FUNCIONES NUMERICAS");

/*NaN*/
/*"Not a Number" JavaScript emplea el valor NaN para indicar un valor num�rico no definido.
Por ejemplo, la divisi�n de 0/0.*/
document.write("<br/>NaN (Not a Number):");

var Num01 = 0;
var Num02 = 0;
document.write("<br/>Division de 0/0 = " + Num01/Num02);

/*isNaN();
Esta funci�n permite proteger a la aplicaci�n de posibles valores num�ricos no definidos*/
if(isNaN(Num01/Num02)){
	document.write("<br/>No existe un resultado v�lido para la division anterior");
}

/*Infinito*/
document.write("<br/><br/>Infinito:");
var Num03 = 10;
var Num04 = 0;
document.write("<br/>Division de 10/0 = " + Num03/Num04);

/*ToFixed (Digitos);*/
/*Devuelve el n�mero original con tantos decimales como los indicados por el par�metro digitos
y realiza los redondeos necesarios.*/
document.write("<br/><br/>ToFixed:");
 
var GranDecimal = 4584.75684;
document.write("<br/>N�mero decimal completo: " + GranDecimal);
document.write("<br/>N�mero con 2 digitos decimales: " + GranDecimal.toFixed(2));
/*------------------------------------------------------------------------------------------------------------*/