let btnGuardar = document.getElementById("btnGuardar")

let mentorsArray = []

btnGuardar.addEventListener("click", (myEvent) => {
    let mentorName = document.getElementById("inputName").value
    let mentorLastName = document.getElementById("inputLastName").value

    let mentorObject = {
        mentorName, mentorLastName
    }
    console.log(mentorObject)
    mentorsArray.push(mentorObject)
    console.log(mentorsArray)
})

mentorsArray.forEach( () => {


    let mentorRow = document.createElement("tr")
    let indexRow = document.createElement("td")
    let mentorNameRow = document.createElement("td")
    let mentorLastNameRow = document.createElement("td")
    let deleteButton = document.createElement("td")

    let indexValue = document.createTextNode(mentorsArray.length)
    let mentorNameValue = document.createTextNode(mentorName)
    let mentorLastNameValue = document.createTextNode(mentorLastName)
    let deleteButtonValue = document.createTextNode("Borrar")

    indexRow.appendChild(indexValue)
    mentorNameRow.appendChild(mentorNameValue)
    mentorLastNameRow.appendChild(mentorLastNameValue)
    deleteButton.appendChild(deleteButtonValue)

    mentorRow.appendChild(indexRow)
    mentorRow.appendChild(mentorNameRow)
    mentorRow.appendChild(mentorLastNameRow)
    mentorRow.appendChild(deleteButtonValue)

})


