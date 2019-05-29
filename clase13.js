var miguel = {
    nombre : 'Mike',
    apellido: 'Jimenez',
    edad : 21,
    peso : 75
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
console.log(`Al inicio del año ${miguel.nombre} pesa ${miguel.peso} kg `)

const  aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) 
{
    var random = Math.random()

    if (random < 0.25)
    {
        // aumentaDePeso
        aumentaDePeso(miguel)
    }
    else if (random < 0.5)
    {
        // adelgazar
        adelgazar(miguel)
    }
}

console.log(`Al final del año ${miguel.nombre} pesa ${miguel.peso.toFixed(1)} kg`)