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

function isAdult(person){
    return person.yearsOld >= MATURE
}

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
// printAdult(mike)