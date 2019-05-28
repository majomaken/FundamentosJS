var sacha = {
    nombre : 'Sacha',
    apellido : 'Lifszyc',
    edad : 28
}
var dario = {
    nombre : 'Dario',
    apellido : 'Susnisky',
    edad : 27
}

// function imprimirNombreEnMayusculas(persona) {
//     // var nombre = persona.nombre
//     var { nombre } = persona
//     console.log(nombre.toUpperCase())
// }

// imprimirNombreEnMayusculas(sacha)
// imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre : 'Pepe' })

function imprimirNombreYEdad(person) {
    var { nombre, edad } = person
    console.log(`Hola, me llamo ${nombre} y tengo ${edad}`)
}
imprimirNombreYEdad(dario)
imprimirNombreYEdad(sacha)

function cumpleanos (persona) {
    return {
        ...persona,
        edad: persona.edad +1 
    }
}