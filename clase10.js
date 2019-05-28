// var miguel = {
//     nombre : 'Mike',
//     apellido : 'Jimenez',
//     yearsOld : 17,
//     ingeniero : false,
//     cocinero : false,
//     cantante : true,
//     dj : false,
//     guitarrista : false,
//     drone : false
// }
// function printPro(persona) {
//     console.log(`${persona.nombre} es: `)
//     if (persona.ingeniero)
//     {
//         console.log('Ingeniero')
//     }
//     else
//     {
//         console.log('No es ingeniero')
//     }
//     if (persona.cocinero)
//     {
//         console.log('Cocinero')
//     }
//     if (persona.cantante)
//     {
//         console.log('Cantante')
//     }
//     if (persona.dj)
//     {
//         console.log('Dj')
//     }
//     if (persona.guitarrista)
//     {
//         console.log('Guitarrista')
//     }
//     if (persona.drone)
//     {
//         console.log('Vuela drones')
//     }
// }

// printPro(miguel)

var mike = {
    name : 'Mike',
    lastName : 'Jimenez',
    yearsOld : 21,
}

function printAdult(person) {
    if (person.yearsOld >= 18)
    {
        console.log(`You can view this content ${person.name}!`)
    }
    else
    {
        console.log(`Mature content ${person.name}. Please come when you are Adult!`)
    }
}
printAdult(mike)
//Output = 'You can view this content Mike!'
var  daniel = {
    nombre: 'daniel',
    edad : 21,
  },
  
  david  = {
    nombre: 'david',
    edad : 17
  }
  function mayorDeEdad({nombre, edad}) {
  console.log(`${nombre} es ${edad >= 18 ? 'mayor':'menor'} 
   de edad `);
  }

  mayorDeEdad(daniel)