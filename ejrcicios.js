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