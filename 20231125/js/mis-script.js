

////////////////////////////////////////////////////PRACTICA 02///////////////////////////////////////////////////////
function practica02_signo_25112023() { //FUNCIONAL
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
		document.write("El numero ingresado es POSITIVO",'<BR/>');
	} else {
		document.write("El numero ingresado es NEGATIVO",'<BR/>');
	}
}

////////////////////////////////////////////////////PRACTICA 03 ///////////////////////////////////////////////////////
function practica03_calculadora_25112023() {//FUNCIONAL
	var operacion;
	document.write("Calculadora",'<BR/>');
	//document.write("Ingrese el valor de A:",'<BR/>');
	a = Number(prompt("Ingrese el valor de A: "));
	//document.write("Ingrese el valor de B:",'<BR/>');
	b = Number(prompt("Ingrese el valor de B: "));
	//document.write("Seleccione la operacion que desea realizar:",'<BR/>');
	//document.write("1: Suma",'<BR/>');
	//document.write("2: Resta",'<BR/>');
	//document.write("3: Multiplicacion",'<BR/>');
	//document.write("4: Division",'<BR/>');
	//operacion = prompt("Seleccione la operacion que desea realizar: ");

	// Solicitar al usuario que elija la operación
	var operacion = prompt("Elija la operación a realizar (1 para suma, 2 para resta, 3 para multiplicación, 4 para división):");


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

////////////////////////////////////////////////////PRACTICA 04 ///////////////////////////////////////////////////////
function practica04_calendario_25112023() { //FUNCIONAL
	var numeromes;
	// Mar�a Bel�n Mart�nez S�nchez
	// Pr�ctica 04 Programa en JS Mes calendario
	//document.write("Ingresa un n�mero entre 1 al 12, para visualizar el mes",'<BR/>');
	numeromes = Number(prompt("Ingresa un numero entre 1 al 12, para visualizar el mes "));
	switch (numeromes) {
	case 1:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es ENERO",'<BR/>');
		break;
	case 2:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es FEBRERO",'<BR/>');
		break;
	case 3:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes esMARZO",'<BR/>');
		break;
	case 4:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes esABRIL",'<BR/>');
		break;
	case 5:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es MAYO",'<BR/>');
		break;
	case 6:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es JUNIO",'<BR/>');
		break;
	case 7:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es JULIO",'<BR/>');
		break;
	case 8:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es AGOSTO",'<BR/>');
		break;
	case 9:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es SETIEMBRE",'<BR/>');
		break;
	case 10:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es OCTUBRE",'<BR/>');
		break;
	case 11:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es NOVIEMBRE",'<BR/>');
		break;
	case 12:
		document.write("Numero del mes valido",'<BR/>');
		document.write("El mes es DICIEMBRE",'<BR/>');
		break;
	default:
		document.write("NuMERO DEL MES INVALIDO",'<BR/>');
		document.write("Deberia iniciar el progrma",'<BR/>');
	}

	//alert ("El resultado de la suma es: "+resultado)  EJEMPLO
	//Este es una variable para mensaje de salida agregando un (+) concatenación mas el valor de salida
}

////////////////////////////////////////////////////PRACTICA 05 ///////////////////////////////////////////////////////
function practica05_imparpar_25112023() { //FUNCIONAL
	var i, suma_impar, suma_par;
	// Mar�a Bel�n Mart�nez S�nchez
	// Pr�ctica 05 Programa en JS Suma de n�meros pares e impares (1-100)
	i = 1;
	suma_par = 0;
	suma_impar = 0;
	while (i<101) {
		if (i%2==0) {
			suma_par = suma_par+i;
		} else {
			suma_impar = suma_impar+i;
		}
		i = i+1;
	}
	document.write("La suma de los primeros 100 numeros pares es..",'<BR/>');
	document.write(suma_par,'<BR/>');
	document.write("La suma de los primeros 100 numeros impares es..",'<BR/>');
	document.write(suma_impar,'<BR/>');
}
////////////////////////////////////////////////////PRACTICA 06 ///////////////////////////////////////////////////////
function practica06_tablademultiplicar_25112023() {//FUNCIONAL
	var contador01, numero01;
	// Mar�a Bel�n art�nez S�nchez
	// Pr�ctica 06 Programa en JS Tabla de multiplicar
	//document.write("Ingresar un n�mero para generar su tabla de multiplicar",'<BR/>');
	numero01 = prompt("Ingresar un numero para generar su tabla de multiplicar");
	for (contador01=1;contador01<=10;contador01++) {
		document.write(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}
////////////////////////////////////////////////////PRACTICA 07 ///////////////////////////////////////////////////////
function practica07_salariosemanal_25112023() {//FUNCIONAL
	var base, horas, salario;
	// Mar�a Bel�n art�nez S�nchez
	// Pr�ctica 07 Programa en JS Salario semanal
	//document.write("Ingresar el numero de horas trabajadas en la semana...",'<BR/>');
	//horas = prompt ("Ingresar el numero de horas trabajadas en la semana...");
	horas = Number(prompt("Ingresar el numero de horas trabajadas en la semana..."));
	//document.write("Ingresar el salario base hora...",'<BR/>');
	//base = prompt ("Ingresar el salario base hora...");
	base = Number(prompt("Ingresar el salario base hora..."));
	salario = horas*base;
	//document.write("El salario semanal sera de:  ",salario,"peso",'<BR/>');
	horas = alert("El salario semanal sera de: " +salario,"pesos")
	
}
////////////////////////////////////////////////////PRACTICA 08 ///////////////////////////////////////////////////////
function practica08_jubilacion_25112023() { //FUNCIONAL
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
					document.write("Si tiene derecho a la jubilacion",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilacion",'<BR/>');	
				}
			} else {
				if (edad>65) {
					document.write("Si tiene derecho a la jubilacion",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilacion",'<BR/>');
				}
			}
		}  else {
			document.write("NO tiene derecho a la jubilacion",'<BR/>');
		}
		//document.write("Siguiente consulta...",'<BR/>');
		persona = persona+1;
		
	} while (persona!==11); 
}