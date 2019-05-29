var mike = {
    name : 'Mike',
    lastName : 'Jimenez',
    yearsOld : 21,
}

var juan = {
    name : 'Juan',
    lastName : 'Gomez',
    yearsOld : 13
}

const MATURE = 18



// var isAdult = function (person){
//     return person.yearsOld >= MATURE
// }
const isAdult = ({ yearsOld }) => yearsOld >= MATURE

function printAdult(person) {
    if (isAdult(person))
    {
        console.log(`You can view this content ${person.name}!`)
    }
    else
    {
        console.log(`Mature content ${person.name}. Please come when you are Adult!`)
    }
}

const allowAccess = person => !isAdult(person)

// function allowAccess(person) {
//             console.log('Access denied')
// }

// printAdult(mike)