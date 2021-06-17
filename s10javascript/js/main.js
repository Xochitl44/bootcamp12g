/*Ejercicio
    solicitar nombre y apellidos al usuario
    guardar el nombre en una variable
    guardar el apellido en una variable
    transformar el nombre a minusculas
    transformar el nombre a mayusculas
    juntar el nombre y el apellido transformados en un solo texto
    devolver ese texto como resultado
*/

var nombre = prompt("Ingresa tu nombre")
var apellido = prompt("Ingresa tu apellido")

function datosNombres( nombre, apellido ) {
    var nombreMayu = nombre.toLowerCase()
    var apellidoMenu = apellido.toUpperCase()
    var nombreCompleto = nombreMayu + " " + apellidoMenu
    return nombreCompleto
}

console.log(datosNombres(nombre,apellido))
