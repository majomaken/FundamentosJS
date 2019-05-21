// var nombre
//Semicolon is your choose
var nombre = 'Miguel'
var apellido = 'Jimenez'
var edad = 28
// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1
peso += sandwich

var jugarAlFutbol = 3
peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) /100
// Convierte en string
var totalStr = total.toFixed(2)
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var cantidadPorcionesPersona = pizza / personas

// edad = '28 años'
console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)
