var miguel = {
    nombre : 'Mike',
    apellido: 'Jimenez',
    edad : 21,
    peso : 75
}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
console.log(`Al inicio del año ${miguel.nombre} pesa ${miguel.peso} kg `)

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDerpote = () => Math.random() < 0.4

const META = miguel.peso - 3
var dias = 0

while (miguel.peso > META )
{
    if (comeMucho())
    {
        //Aumetar de peso
        aumentaDePeso(miguel)
    }
    if (realizaDerpote())
    {
        //Adelgasar
        adelgazar(miguel)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${miguel.nombre} adelgazó 3kg`)