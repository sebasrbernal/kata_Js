let frutas = ['uva', 'jitomate', 'sandia'];
console.log(frutas[3]);


// cambio en el arreglo sin necesidad de un push
frutas[0]='melon'
frutas.push('jicama')
frutas.push('fresa')
frutas.push('pera')
frutas.push('manzana')
frutas.push('kiwi')

console.log(frutas)

//length total de elementos de un array
let frutas = ['uva', 'jitomate', 'sandia'];

//metodo unshift
//Añadir un elemento al inicio  de la lista

frutas.unshift('mandarina')
console.log(frutas)

//split crear un arrat, apartir de un objeto iterable
//un objeto iterable es el que se puede recorrer 
let listaSuper='Ceboola, perejil, tomate, calabaz'
//()indicar la separación del nuevo elemento 
let listaSuperArray = listaSuper.split(',')
console.log(listaSuperArray)

//slice
//2 parametros star, end
//truncar array

let nuevaLista=frutas.slice(1,3)
console.log(nuevaLista)

//splice remplazar elementos de array
//peligroso
frutas.splice(1,2,'naranja')
console.log(frutas)

let frutasSort=frutas.sort()
console.log(frutasSort)

let numeros=[1,6,7,9,10,3,5,10]
//CHECAR CAPTURAS DEL 6 DE JUN