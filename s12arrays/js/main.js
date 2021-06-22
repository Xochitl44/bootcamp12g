/* crear una funcion que permita indicar la cantidad de koders a guardar, que pida tantos nombres de koders como se indique, y al
final imprima el nombre del koder y su numero asignado

let longitud = parseInt(prompt("Ingresa la cantidad de koders"))
const koders = [];

function nuevoKoders(longitud){
    let continuar = prompt("Deseas continuar Si/No")
    if continuar === ("Si") {
        for (let i=0; i<longitud; i++){
            koders[i]=prompt("Ingrese el nombre del koder")
        
        }
        console.log(koders.length)
        for(let i=0; i<koders.length; i++){
            console.log("Koder["+i+"]: " +koders[i])
        }

    }else{
        return false
    }

}

nuevoKoders(longitud)
*/