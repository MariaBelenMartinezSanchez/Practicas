// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function practica03_calculadora_25112023() {
	var operacion;
	var a = new Number("1: Suma");
	var b = new Number("2: Resta");
	var c = new Number("3: Multiplicacion");
	var d = new Number("4: Division");
	document.write("Calculadora",'<BR/>');
	//document.write("Ingrese el valor de A:",'<BR/>');
	a = Number(prompt("Ingrese el valor de A: "));
	//document.write("Ingrese el valor de B:",'<BR/>');
	b = Number(prompt("Ingrese el valor de B: "));
	document.write("Seleccione la operacion que desea realizar:",'<BR/>');
	//document.write("1: Suma",'<BR/>');
	//document.write("2: Resta",'<BR/>');
	//document.write("3: Multiplicacion",'<BR/>');
	//document.write("4: Division",'<BR/>');
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

