// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el?
/* for (i=2;i<=100;i+=2){
  console.log(i)
} */

//Escribir todos los números que terminan en 0 y estén entre 2 y 121
/*let numeroTerminaC=2
for (i=2;i<=121;i++){
  if (numeroTerminaC % 10==0){
    console.log(numeroTerminaC)
  }
  numeroTerminaC++
}*/
//EXTRA// Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,
// ¿podrías ayudarle a crear un algoritmo que haga eso por el?
/*let calificacion1 = prompt('Ingresa la 1º calificacion')
let calificacion2 = prompt('Ingresa la 2º calificacion')
let calificacion3 = prompt('Ingresa la 3º calificacion')
let calificacion4 = prompt('Ingresa la 4º calificacion')
let calificacion5 = prompt('Ingresa la 5º calificacion')
let cal1=Number(calificacion1)
let cal2=Number(calificacion2)
let cal3=Number(calificacion3)
let cal4=Number(calificacion4)
let cal5=Number(calificacion5)
let sumaDeCal=(cal1 + cal2 + cal3 + cal4 + cal5)
console.log('Tu calificacion es de ',sumaDeCal/5)*/

// Hacer una función que convierta pesos a dólares - RETURN
/*let pesos=prompt('¿Cantiad de dinero que quieres convertir?')
let dolares=prompt('¿Presio del dolar?')
let pesosNumero=Number(pesos)
let dolaresNumero=Number(dolares)

function cantidad( pesosNumero,dolaresNumero){
    let cantidad=pesosNumero/dolaresNumero
    //console.log(cantidad)
    return(cantidad)
}
cantidad( pesosNumero,dolaresNumero)*/ 

// Hacer una función que cuente el número de caracteres de una palabra - RETURN
/*function contadorPalabra(palabra){
    let numeroDePalabras = palabra.length
    
    return numeroDePalabras
}
contadorPalabra('pepepecas')*/

// Hacer una función que halle el máximo entre dos números - RETURN
// Hacer una función que halle el máximo entre tres números - RETURN
// Hacer una función que calcule el IVA de una cantidad (16%) - RETURN

/*let numerosE3=[1,2,3,4,5,6,7,36]
//... vaciar la caja esprey operetor
//se podria hacer con if tambien

Math.max(...numerosE3)
Math.min(...numerosE3)*/

// Hacer una función para ingresar cualquier letra del alfabeto  - RETURN
// y verifique si es vocal o consonante

/*function verificarLetra(letra){//tolowerCase pasar a minusculas
    let vocales=['a', 'e', 'i', 'o', 'u']
    let letraMinuscula= letra.toLowerCase()
    if (vocales.includes(letraMinuscula)){
        return `La letra $(letra) es una vocal`
    }
}
let */

// Hacer una función que verifique si un número es positivo o negativo - RETURN

/*function num(a) {
    if (a > 0) {
        return "positivo"
    } else if (a == 0) {
        return "Es igual a 0"
    } else {
        return "negativo"
    }
}

var numero = prompt("Ingresa tu numero")
console.log(num(numero))*/

// Hacer una función que halle la suma de todos los números naturales entre 1 y n - RETURN
//Checar

/*function n-esimo(n){
    let result=0
    for (i=1;i<=n;i++){
        result=result + i
    }
    return result
}*/



//Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] 
//y muestre en consola solo los elementos que son tipo número.
let randomArreglo=[4,'dos',8,'tres',5,9,1,'cero'] 

let numerosG =[]

function typeofArreglo(arreglo){
    for (i=0;i < arreglo.length; i++ ){
        if (typeof arreglo[i]=== Number){
            numerosG.push(arreglo[i])
        }
        return numerosG
    }
}

