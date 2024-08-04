// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function practica08_jubilacion_25112023() {
	var aportacion, edad, genero, persona;
	persona = 1;
	do {
		document.write("Datos de persona...",persona,'<BR/>');
		// Mar�a Bel�n Mart�nez S�nchez
		// Pr�ctica 08 Programa en JS Jubilaci�n de empleados
		//document.write("�Cu�ntos a�os lleva aportando (numero entero)?",'<BR/>');
		aportacion = prompt("¿Cuanto tiempo lleva aportando (numero entero)?");
		//document.write("�Qu� edad tiene actualmente (numero entero)?",'<BR/>');
		edad = prompt("¿Que edad tiene actualmente (numero entero)?");
		//document.write("�Es mujer u hombre (M=Mujer, H=Hobre)?",'<BR/>');
		genero = prompt("¿Es mujer u hombre (M=Mujer, H=Hombre)?");
		if (aportacion>20) {
			if (genero=="M" || genero=="m") {
				if (edad>50) {
					document.write("Si tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilaci�n",'<BR/>');
				}
			} else {
				if (edad>65) {
					document.write("Si tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilaci�n",'<BR/>');
				}
			}
		} else {
			document.write("MO tiene derecho a la jubilaci�n",'<BR/>');
		}
		document.write("Siguiente consulta...",'<BR/>');
		persona = persona+1;
	} while (persona!==11);
}

