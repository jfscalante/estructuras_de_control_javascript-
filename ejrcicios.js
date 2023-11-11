/* este es el ejercicio numero 1*/
let age = parseFloat(prompt('ingrese su edad'))
if (age >= 18){
    alert('eres mayor de edad')
}else{
    alert('eres menor de edad')
}


/* este es el ejercicio numero 2*/
let not1 = parseFloat(prompt('ingrese su primer nota'));
let not2 = parseFloat(prompt('ingrese su segunda nota'));
let not3 = parseFloat(prompt('ingrese su tercer nota'));
promedio = (not1+not2+not3)/3
alert ('su promedio es de: ' + promedio); 
if ( promedio >= 6){
    alert('usted aprobo')
}else {
    alert('usted no aprobo')
}

/* este es el ejercicio numero 3*/
let a = parseFloat(prompt('ingrese numero a'));
let b = parseFloat(prompt('ingrese numero b'));
if (a>b){
    alert('a es mayor que b');
}else if (a<b){
    alert('a es menor que b');
} else {
    alert('a es igual a b');
}

/* este es el ejercicio numero 4*/
let n1 = parseFloat(prompt('ingrese un numero'));
let n2 = parseFloat(prompt('ingrese un numero'));
if(n1<n2){
    alert(n1 + ',' + n2);
}else {
    alert(n2 + ',' + n1);
}

/* este es el ejercicio numero 5*/

let peso = parseInt(prompt('ingrese aqui cuanto pesas'));
if (peso <= 40){
    alert('persona baja de peso');
} else if (peso >= 41 && peso <=70){
    alert('persona peso promedio');
}else {
    alert('persona con sobrepeso')
};

/* este es el ejercicio numero 6*/
let dia = parseFloat(prompt("Escriba un número del 1 al 7"));

if (dia === 1){
    alert("Lúnes")
} else if (dia === 2){
    alert("Martes")
} else if (dia === 3){
    alert("Miércoles")
} else if (dia === 4){
    alert("Jueves")
} else if (dia === 5){
    alert("Vienes")
} else if (dia === 6){
    alert("Sábado")
} else if (dia === 7){
    alert("Domingo")
} else {
    alert("Escribió un número fuera de rango. Escriba un número entre 1 y 7")
};


/* este es el ejercicio numero 7*/

let compra = parseFloat(prompt('ingrese el valor de su compra'));

if (compra > 1000){
    alert('su descuento es de 20% debes pagar: ' + compra * 0.80);
} else {
    alert('su descuento es de 5% debes pagar: ' + compra * 0.95);

};

/* este es el ejercicio numero 8*/

let salario = parseFloat(prompt('cuantas horas trabajaste esta semana'));
if (salario <= 40){
    alert(' su hora de trabajo cuesta $16.000 su salario semanal es de:' + salario*16000);
}
 else {
    alert('su hora de trabajo sera cancelada a $20.000 su salario semanal es:' + salario*20000);
}

/* este es el ejercicio numero 9*/

let persona1 = prompt("Ingrese el nombre de la primer persona")
let edad1 = prompt("Ingrese la edad")

let persona2 = prompt("Ingrese el nombre de la segunda persona")
let edad2 = prompt("Ingrese la edad")

if (edad1 > edad2){
    alert('la persona con mayor edad es: ' + persona1 + ' con una edad de ' + edad1 + ' años' );
} else {
    alert('la persona con mayor edad es: ' + persona2 + ' con una edad de ' + edad2 + ' años' );
}

/* este es el ejercicio numero 19*/

let usuario = prompt('ingrese su usuario');
let password = prompt('ingrese su contraseña');

if (ususario === 'admin'){
    if (password ==='12345'){
        alert('acceso concedido');
    }else if (password !== '12345' && usuario === 'admin'){
        alert('contraseña incorrecta');
    }
} else if( usuario !== 'admin' && password === '12345'){
    alert('usuario incorrecto');
}else {
    alert('el usuario no esta registrado');
}

//Décimo//
let camisas = prompt("Ingrese el total de camisas compradas")

if (camisas >= 3){
    alert("Se ha aplicado un descuento de un 20%")
} else {
    alert("Se ha aplicado un 10% de descuento en su compra")
};


//Undécimo//
let numA = parseFloat(prompt("Digite un número"));
let numB = parseFloat(prompt("Digite el segundo número"));

if (numA === numB){
    alert("Los números se multiplican. El resultado es " + (numA * numB))
} else if (numA > numB){
    alert("En este caso se restan. El resultado es " + (numA - numB))
} else {
    alert("Se suman. El resultado es " + (numA + numB))
};


//Duodécimo//
let ope = prompt("Bienvenido a la calculadora básica. ¿Qué desea hacer (suma, resta, multiplicación o división)");
let num1 = parseFloat(prompt("Ingrese el número 1"));
let num2 = parseFloat(prompt("Ingrese el número 2"));

if (ope === "Suma" || ope === "suma" || ope === "SUMA"){
    alert("El resultado de la suma es " + (num1 + num2))
} else if (ope === "Resta" || ope === "resta" || ope === "RESTA"){
    alert("El resultado de la resta es " + (num1 - num2))
} else if (ope === "Multiplicacion" || ope === "multiplicacion" || ope === "MULTIPLICACION"){
    alert("El resultado de la multiplicación es " + (num1 * num2))
} else if (ope === "Division" || ope === "division" || ope === "DIVISION"){
    alert("El resultado de la division es " + (num1 / num2))
} else {
    alert("Error. Ingrese una operación permitida/válida")
};


//Decimotercero//
let numIn = parseFloat(prompt("Ingrese un número"))

if (numIn % 2 === 0){
    alert("El número es par")
} else {
    alert("El número es impar")
};


//Decimocuarto//
alert("Calcularemos el IMC (índice de masa corporal)");
let pesokg = parseFloat(prompt("Ingrese su peso (Kg)"));
let estatura = parseFloat(prompt("Ingrese su estatura"));

let imc = pesokg / (estatura * estatura)

if (imc < 18.5){
    alert("Su IMC es " + imc + " y se encuentra bajo de peso.")
} else if (imc > 18.5 && imc < 24.9){
    alert("Su IMC es " + imc + " y su estado es saludable")
} else if (imc > 25 && imc < 29.9){
    alert("Su IMC es " + imc + " y se encuentra en sobrepeso")
} else if (imc >= 30){
    alert("Su IMC es " + imc + " y se encuentra en estado de obesidad")
} else {
    alert("Error")
};


//Decimoquinto//
let numVe = parseFloat(prompt("Ingrese un número"));

if (numVe > 0){
    alert("El número es positivo")
} else if (numVe < 0){
    alert("El número es negativo")
} else if (numVe === 0){
    alert("El número es igual a 0")
} else {
    alert("Error. Ingrese un número válido")
};


//Decimosexto//
let nota = parseFloat(prompt("Ingrese la nota de Algoritmos"));

if (nota > 1.0 && nota < 3.3){
    alert("Su desempeño es BAJO")
} else if (nota > 3.4 && nota < 3.8){
    alert("Su desempeño es BASICO")
} else if (nota > 3.9 && nota < 4.4){
    alert("Su desempeño es ALTO")
} else if (nota > 4.5 && nota < 5.0){
    alert("Su desempeño es SUPERIOR")
} else {
    alert("Error. Ingrese una nota válida")
};


//Decimoséptimo//
let fig = prompt("Ingrese la figura a la que le desea calcular el área");

if (fig === "triangulo" || fig === "Triangulo" || fig === "TRIANGULO"){
	let base = parseFloat(prompt("Ingrese el valor de la base (cm)"))
	let altura = parseFloat(prompt("Ingrese el valor de la altura (cm)"))
	
	alert("El área del triángulo es " + ( (base * altura) / 2) )
} else if (fig === "cuadrado" || fig === "Cuadrado" || fig === "CUADRADO"){
	let lado1 = parseFloat(prompt("Ingrese el valor del lado uno (cm)")) 
	let lado2 = parseFloat(prompt("Ingrese el valor del lado dos (cm)"))
	
	alert("El área del cuadrado es " + (lado1 * lado2))
} else {
	alert("Error. Ingrese una figura permitida. No se permiten tildes")
};


//Decimoctavo//
let numEs = prompt("Ingrese un número cualquiera");

if (numEs < 10){
	alert("Es un número menor que 10")
} else if (numEs >= 10 && numEs <= 20){
	alert("Es un número entre 10 y 20")
} else if (numEs > 20){
	alert("Es un número mayor que 20")
} else {
	alert("Error. Ingrese un número válido")
};

//Vigésimo//
let genero = prompt("Ingrese su género"); 
let edad = prompt("Ingrese su edad");

if (genero === "masculino" || genero === "Masculino" && edad >= 18){
	alert("Usted es elegible para el servicio militar");
} else {
	alert("Usted no es elegible para prestar el servicio militar")
};