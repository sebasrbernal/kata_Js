var personajes = JSON.parse(file).results

let container = document.getElementById("container")


function buscarBtn() {
  let nombreInput = document.getElementById("nombreInput")
  console.log(nombreInput)
  buscar(nombreInput.value)
}

function buscar(nombre) { 
  let personajeValido = false;   
  for(let i = 0; i<personajes.length;i++) {
    if(nombre === personajes[i].name) {
        alert('Personaje encontrado');
        mostrarMenuHTML(i)
        personajeValido = true;
        return personajes[i]
    }
  }
  if(!personajeValido) {
    alert('Intente lo de nuevo');
 } 
}
  
  function mostrarMenuHTML(posicionUsuario){
      
      // Ocultar Login
      document.getElementById("inicio").style.display = "none";
  
      // Mostrar menú opciones
      document.getElementById("acciones").style.display = "block";
  
      // Mostrar nombre en el saludo
      // 1. obtener elemento a modificar a través de su id e insertar el nombre del usuario actual
      //document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre
  
      // Añadir funciones a los botenes desde Js, con ayuda de addEventListener
      // Consultar saldo
      // Contruir el resto de funciones para los botones
  
  }
  
  // En lugar de usar esta función se construyó con un addEventListener 
  // function consultarSaldoHTML(posicionUsuario) {
  //     alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
  // }
 /* 
  function retirarSaldoHTML(posicionUsuario) {
      // Limpiar el texto info
      document.getElementById("info").innerText = '';
      //Ocultar acciones
      document.getElementById("acciones").style.display = "none";
      //Mostrar menu de retiro
      document.getElementById("retirarSaldo").style.display="block"
      //alert('retirar de saldo');
      document.getElementById("infRetirado").innerText = "Tu saldo actual es de $" + cuentas[posicionUsuario].saldo;
  }
  function ingresarRetiro(posicionUsuario){
    // Tomar datos de los inputs
     let retiro = document.getElementById("retirar").value;
     retiro = Number(retiro)
     //let cantidadInicial= cuentas[posicionUsuario].saldo
     
     if ((cuentas[posicionUsuario].saldo - retiro)>=10 ) {
        cuentas[posicionUsuario].saldo= cuentas[posicionUsuario].saldo - retiro
        document.getElementById("infRetirado").innerText = "Tu saldo final es de $" + cuentas[posicionUsuario].saldo;
        document.getElementById("VolverRetiro").innerText = "Quieres retirar otra cantidad indicalo si no es asi presiona salir"
     } else {
         alert("No se puede hacer el retiro ")
         document.getElementById("infRetirado").innerText = "Elija otra cantidad o presione salir";
     }
     }
  function salirRetirar(posicionUsuario) {
        document.getElementById("infRetirado").innerText = '';
        document.getElementById("retirar").innerText=''
        document.getElementById("VolverRetiro").innerText=''
        //Ocultar acciones
        document.getElementById("acciones").style.display = "block";
        //Mostrar menu de retiro
        document.getElementById("retirarSaldo").style.display="none"
        //alert('retirar de saldo')
    }
  
  function ingresarSaldoHTML(posicionUsuario) {
      // Limpiar el texto info
      document.getElementById("info").innerText = '';
      //Ocultar acciones
      document.getElementById("acciones").style.display = "none";
      //Mostrar menu de retiro
      document.getElementById("depositoSaldo").style.display="block"
      //alert('retirar de saldo');
      document.getElementById("infDeposito").innerText = "Tu saldo actual es de $" + cuentas[posicionUsuario].saldo;
  }
  function ingresarDeposito(posicionUsuario){
    // Tomar datos de los inputs
     let deposito = document.getElementById("deposito").value;
     deposito = Number(deposito)
     
     //let cantidadInicial= cuentas[posicionUsuario].saldo
     
     if ((cuentas[posicionUsuario].saldo + deposito)<=990 ) {
        cuentas[posicionUsuario].saldo= cuentas[posicionUsuario].saldo + deposito
        document.getElementById("infDeposito").innerText = "Tu saldo final es de $" + cuentas[posicionUsuario].saldo;
        document.getElementById("VolverDeposito").innerText = "Quieres ingresar otra cantidad indicalo si no es asi presiona salir"
     } else {
         alert("No se puede hacer el deposito ")
         document.getElementById("infRetirado").innerText = "Elija otra cantidad o presione salir";
     }
     }
  function salirDeposito(posicionUsuario) {
        document.getElementById("infDeposito").innerText = '';
        document.getElementById("deposito").innerText=''
        document.getElementById("VolverDeposito").innerText=''
        //Ocultar acciones
        document.getElementById("acciones").style.display = "block";
        //Mostrar menu de retiro
        document.getElementById("depositoSaldo").style.display="none"
        //alert('retirar de saldo')
    }  */
