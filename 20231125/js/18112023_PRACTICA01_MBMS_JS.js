// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function practica01_calculadora_MBMS() {
	var operacion;
	var a = new Number();
	var b = new Number();
	var c = new Number();
	var d = new Number();
	document.write("Calculadora",'<BR/>');
	document.write("Ingrese el valor de A:",'<BR/>');
	a = Number(prompt());
	document.write("Ingrese el valor de B:",'<BR/>');
	b = Number(prompt());
	document.write("Seleccione la operaci�n que desea realizar:",'<BR/>');
	document.write("1: Suma",'<BR/>');
	document.write("2: Resta",'<BR/>');
	document.write("3: Multiplicaci�n",'<BR/>');
	document.write("4: Divisi�n",'<BR/>');
	operacion = prompt();
	if (operacion==1) {
		c = a+b;
		document.write("El resultado es: ",c,'<BR/>');
	} else {
		if (operacion==2) {
			c = a-b;
			document.write("El resultado es: ",c,'<BR/>');
		} else {
			if (operacion==3) {
				c = a*b;
				document.write("El resultado es: ",c,'<BR/>');
			} else {
				if (operacion==4) {
					d = a/b;
					document.write("El resultado es: ",d,'<BR/>');
				}
			}
		}
	}
}

