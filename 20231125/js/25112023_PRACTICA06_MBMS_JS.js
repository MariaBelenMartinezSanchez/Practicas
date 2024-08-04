// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function practica06_tablademultiplicar_25112023() {
	var contador01, numero01;
	// María Belén artínez Sánchez
	// Práctica 06 Programa en JS Tabla de multiplicar
	document.write("Ingresar un número para generar su tabla de multiplicar",'<BR/>');
	numero01 = prompt();
	for (contador01=1;contador01<=10;contador01++) {
		document.write(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}

