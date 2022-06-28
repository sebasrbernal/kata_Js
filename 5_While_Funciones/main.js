/*let contador = 0;
while (contador <0){
  //Lo que se ejecuta hasta que se cumpla la condición
  contador++;
  console.log('Hola mundo');
}*/

let estaLloviendo=false;
//negar !
console.log(!estaLloviendo)
/*let contador=0
do{
  //se ejecuta este bloque mientras el while sea verdadero
  contador=contador +1
  console.log(contador)
} while(contador<5);
*/
let numero1=750
function suma(a,b){
  //scope local 
  let suma=a+b
  //console.log(suma)
  //todas las funciones requieren tener una salida
  return (suma)
}
//scope global
suma(numero1,45)
suma(30,85)
suma(70,45)