let dataArray = [
    [
        "Israel",
        "Salinas Martínez"
    ],
    [
        "David",
        "Cermeño Moranchel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]
/* mentorsArray = [
    {
        name:"Israel",
        lastName:"salinas"
    }...{...}
]*/

const newArray = ( dataArray ) => {
    let mentorsArray = []
    for( let i = 0; i < dataArray.length; i++ ){
        mentorsArray.push( dataArray[i].split("Name: , lastName: "))
    }
    return mentorsArray 

let transformedArray = newArray( someArray )

console.log( transformedArray )
