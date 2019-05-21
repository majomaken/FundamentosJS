var nombre = 'Miguel', apellido = 'jimenez'
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLocaleLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` 

var str = nombre.substr(1, 2)

var nameUser = prompt('What\'s it\'s your name?')
var lengthUser = nameUser.length
for (let x = 0; lengthUser >= x; x++)
{
    var theLastChar = nameUser.charAt(x-1);
}
alert(`The last char of your name is "${theLastChar}"`)