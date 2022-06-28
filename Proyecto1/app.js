// Mini Proyecto: Cajero Automático

// Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
 
// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas. Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
  ];
  
  // function consultarSaldo(posicionUsuario) {
  //     alert('El saldo del usuario ' + cuentas[posicionUsuario].nombre + ' es de $' + cuentas[posicionUsuario].saldo);
  //     mostrarMenu(posicionUsuario)
  // }
  
  // function depositar(posicionUsuario) {
  //     let ingreso = prompt("Escribe tu ingreso:")
  //     ingreso = Number(ingreso)
  //     cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + ingreso;
  //     mostrarMenu(posicionUsuario);
  // }
  
  // function retirar(posicionUsuario) {
  //     let retiro = prompt("Escribe cuánto quieres retirar:")
  //     retiro = Number(retiro)
  //     cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
  //     mostrarMenu(posicionUsuario);
  // }
  
  // Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
  // Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.
  
  
  // ---------------------------------------------------------------------------
  
  // FUNCIONES NUEVAS ADAPTADAS AL DOM (HTML)
  let posicionActual = 0
  function ingresar() {
      // Tomar datos de los inputs
      let usuario = document.getElementById("usuario").value;
      let contrasenia = document.getElementById('contrasenia').value;
      
      // alert('El usuario del input es: ' + usuario + ' y la contraseña es: ' + contrasenia);
  
      // Validar los datos de los inputs
      validarUsuarioLogin(usuario, contrasenia);
  }
  
  function validarUsuarioLogin (usuario, contra) {
      let usuarioValido = false;
      for(let i = 0; i < cuentas.length; i++) {
          if(usuario === cuentas[i].nombre && contra === cuentas[i].password) {
              // Definir qué pasará si son correctos
              alert('DATOS CORRECTOS');
              usuarioValido = true;
              mostrarMenuHTML(i)
              posicionActual=i
              return
          }
      }
      // Definir qué pasará si son incorrectos
      if(!usuarioValido) {
          alert('Datos incorrectos');
      }
  }
  
  function mostrarMenuHTML(posicionUsuario){
      
      // Ocultar Login
      document.getElementById("inicio").style.display = "none";
  
      // Mostrar menú opciones
      document.getElementById("acciones").style.display = "block";
  
      // Mostrar nombre en el saludo
      // 1. obtener elemento a modificar a través de su id e insertar el nombre del usuario actual
      document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre
  
      // Añadir funciones a los botenes desde Js, con ayuda de addEventListener
      // Consultar saldo
      document.getElementById("consultar").addEventListener('click', function () {
          // alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
          // No usar un alert poner el saldo a consultar en un elemento HTML
          // Opc1. Crear un elemento HTML
  
          // Opc2. El elemento ya está creado en el HTML y sólo lo rellenamos
          document.getElementById("info").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
      } );
  
      // Contruir el resto de funciones para los botones
  
  }
  
  // En lugar de usar esta función se construyó con un addEventListener 
  // function consultarSaldoHTML(posicionUsuario) {
  //     alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
  // }
  
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
    }  

  
