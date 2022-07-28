let numeroDeLados =prompt("Escribe el numero de lados")
numeroDeLados= Number(numeroDeLados)
valorDelLado=Number(Escribe el valor del lado)
 if(numeroDeLados === 3) {
              let base= prompt("Escribe el valor de la base")
              base=Number(base)
              let altura=prompt("Escribe el valor de la altura")
              altura=Number(altura)
              let area= base*altura/3
              console.log(area)
              return
          }if else(numeroDeLados === 4){
              let base= prompt("Escribe el valor de la base")
              base=Number(base)
              let altura=prompt("Escribe el valor de la altura")
              altura=Number(altura)
              let area= base*altura
              console.log(area)
              return
          }if else(numeroDeLados >=5){
              let lado= prompt("Escribe el valor del lado")
              base=Number(lado)
              let altura=prompt("Escribe el valor de la apotema")
              altura=Number(apotema)
              let area= numeroDeLados*lado*apotema/2
              console.log(area)
              return
          }