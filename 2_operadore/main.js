/*console.log('operadores')

//operadores matematicos
//+
// Concatenar 
//Template string (ecma16) , coma operador
console.log('hola'+' '+'como estas ')
console.log('hola', 'como estas ')

//cambiar el tipo de una variable
var noEsunNumero='10'
console.log(typeof noEsunNumero)
let numero=+noEsunNumero
console.log(typeof numero)
console.log(10 + 30)

//residuo
console.log(10%5)*/

// Operadores logicos

let numero1=10
let numero2=5
console.log(numero1 > numero2)

//= Operador de asiganción

let num1=10
let num2=20
console.log(num1 == num2)

// triple igual === para comparar si es un mismo string

// diferente o distinto !=, !== doble para comparar el string
console.log(num1!=num2)

//Variable declara pero sin asiganar ->undefined
let al
console.log(al)

//Variable asignada vacia
let mensaje=null
console.log(mensaje)

//Diferencia entre var y let
// var no importa la asignacion previa 

//ejemplo de temple checar
//console.log(`El numero es ${num1}`)

//operador && verdadero y ambas son verdaderas
let mens=true
let noticias=false
let memes=true

console.log(mens&&noticias)

// operador or|| verdadero con que uno se verdadero
console.log(mens||noticias||memes)
let cantidad=0
let numeroDeMensajes=cantidad || "No hay mensajes"  //cero o falso manda el mensaje

console.log(numeroDeMensajes)

// bloque se define con corchetes
// if y else
if (10<5){
    console.log("10 es mayor que 5")
} else{
    console.log("5 no es mayor que 10")
}

//else if
let n1=10
let n2=8
let n3=3
if(n2<n1){
    console.log(`${n1}`)
}








