var x = 4, y = '4'

var sacha = {
    nombre : 'Sacha'
}

// var otraPersona = sacha
var otraPersona = sacha
sacha == otraPersona
//Output = true the same way ===
otraPersona.nombre = 'Juanito'
"Juanito"
sacha
// Output
// {nombre: "Juanito"}