var personajes = JSON.parse(file).results;
let nombreInput = document.getElementById("nombreInput");
let container = document.getElementById("container");


function buscarBtn() {
  let personaje = buscar(nombreInput.value);
}

function buscar(nombre) {
    let personajeValido = false;
    for(let i = 0; i<personajes.length;i++) {
        if(nombre === personajes[i].name) {
            alert('Personaje encontrado');
            personajeValido = true;
            mostrarMenuHTML(i)
            return personajes[i]
        }
      }
      if(!personajeValido) {
        alert('Revisa el nombre del personaje');
    }
}

function mostrarMenuHTML(posicionUsuario){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("acciones").style.display = "block";
    document.getElementById("nombrePersonaje").innerText = personajes[posicionUsuario].name
    document.getElementById("container").innerHTML = `
    <h3>
      <img src="./imagenes/${personajes[posicionUsuario].name}.jpg" width="425" height="425"><br>
      <span>Nombre: ${personajes[posicionUsuario].name}</span><br>
      <span>Genero: ${personajes[posicionUsuario].gender}</span><br>
      <span>Color de cabello: ${personajes[posicionUsuario].hair_color}</span><br>
      <span>Altura: ${personajes[posicionUsuario].height}</span><br>
      <span>Peso: ${personajes[posicionUsuario].mass}</span><br>
      <span>Color de piel: ${personajes[posicionUsuario].skin_color}</span><br>
      <span>Color de ojos: ${personajes[posicionUsuario].eye_color}</span><br>
      <span>Fecha de nacimiento: ${personajes[posicionUsuario].birth_year}</span><br>
    </h3>
  `;
   document.getElementById("VolverMenu").innerText='Regresar al buscador'

}
function salirRetirar() {
    document.getElementById("acciones").style.display = "none";
    document.getElementById("inicio").style.display="block"
}