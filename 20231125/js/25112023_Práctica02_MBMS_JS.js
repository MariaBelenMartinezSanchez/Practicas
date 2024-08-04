// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function practica02_signo_25112023() {
	var numero01;
	// Mar�a Bel�n art�nez S�nchez
	// Pr�ctica 02 Programa en JS para determinar el signo de un n�mero
	// Al final deber� tener dos archivos:
	// signo.psc => que contiene el pseudoc�digo del programa solicitado
	// signo.js => que contiene el c�digo del programa solicitado
	var signo = new Number();
	//document.write("Ingresa un n�mero",'<BR/>');
	// (Puede ser positivo o negativo) 
	numero01 = prompt("Ingresa el numero");
	if (numero01>=0) {
		document.write("El n�mero ingresado es POSITIVO",'<BR/>');
	} else {
		document.write("El n�mero ingresado es NEGATIVO",'<BR/>');
	}
}

