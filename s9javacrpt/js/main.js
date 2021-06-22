//ejercicio 1 pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números
/*
var number1 = parseInt(prompt("ingresa un numero"))
var number2 = parseInt(prompt("ingresa un segundo numero"))

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)
console.log(number1 % number2)
*/


//ejercicio 2: pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo
/*
    var number1 = parseInt(prompt("ingresa un numero"))
    var number2 = parseInt(prompt("ingresa un segundo numero"))

    console.log(number1>number2)
*/


//ejercicio 3: pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto


var firstLetter = prompt("Enter the first letter")
var secondLetter = prompt("Enter the second letter")

console.log(firstLetter.charCodeAt(0))
console.log(secondLetter.charCodeAt(0))

console.log (firstLetter < secondLetter);

//parseInt() : Analiza hasta el primer no-digito y devuelve lo que haya analizado.
//Number(): convierte toda la cadena en un numero, que también puede ser un float.
    