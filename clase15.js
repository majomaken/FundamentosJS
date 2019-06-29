var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
    
} while (!llueve())

// if (contador === 1)
// {
//     var llover = 'vez'
// }
// else 
// {
//     llover = 'veces'
// }

// console.log(`Fui a ver si llovia ${contador} ${llover}`)
var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);