// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function practica07_salariosemanal_25112023() {
	var base, horas, salario;
	// María Belén artínez Sánchez
	// Práctica 07 Programa en JS Salario semanal
	document.write("Ingresar el número de horas trabajadas en la semana...",'<BR/>');
	horas = Number(prompt());
	document.write("Ingresar el salario base hora...",'<BR/>');
	base = Number(prompt());
	salario = horas*base;
	document.write("El salario semanal será de:  ",salario,"peso",'<BR/>');
	horas = Number(prompt());
}

