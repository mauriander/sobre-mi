var nombreInput = document.getElementById("nombreInput");
var nombreJugador = document.getElementById("nombreJugador");
var botonGuardar = document.getElementById("botonGuardar");
var totalusuariop = document.getElementById("totalusuario");
var totalcpup = document.getElementById("totalcpu");

//GuardarNombre
botonGuardar.addEventListener("click", function () {
  var res = confirm("Empezar una nueva partida")
  
    var nombreIngresado = nombreInput.value;
  nombreJugador.textContent = nombreIngresado;
  if(!validarNombre(nombreJugador.textContent)){
    alert('Debe ingresar el nombre de Jugador valido');    
    botonGuardar.disabled = false;
    return;
  }
  else{
    botonGuardar.disabled = true;
  }
  var victorias = 0;var derrotas = 0;
  document.getElementById("totalusuario").textContent = victorias;
  document.getElementById("totalcpu").textContent = derrotas;
  
});

function validarNombre(nombre){
    if(nombre == undefined){return false;}
    if (nombre === "") { return false;  } 
    if(nombre.trim().length <1){ return false;  } 
return true;
}
botonReiniciar.addEventListener("click", function () {
  var res = confirm("Esta de seguro de reiniciar la partida?\nSe borraron los datos de esta partida")
  if(res){ 
    document.getElementById("nombreInput").value="";
  reiniciarcolor();
  location.reload();}
  else{ }

});
//De esta funcion se llaman a las funciones siguientes
function obtenerJugadaUsuario(jugada) {
    setTimeout(reiniciarcolor(),1000);
  var name = document.getElementById("nombreJugador");
  console.log('Nombre jugador '+name.textContent);
  if(!validarNombre(name.textContent)){
    alert('Debe ingresar el nombre de Jugador valido');    
    return;
  }

console.log('Nombre jugador '+name.textContent);
  console.log("Usted eligio: " + jugada);
  const turnoComp = obtenerJugadaComputadora();
    setTimeout(  cambiarcolor(jugada),20000);
  const jugadaCompu = document.getElementById("jugadaCompu");
  jugadaCompu.textContent = turnoComp;
  isertarImagen(turnoComp);

  const respuesta = determinarGanador(jugada, turnoComp);
  const resultado2 = document.getElementById("resultado");
  actualizarContador(respuesta);

  resultado2.textContent = `Elegiste ${jugada}. La computadora eligió ${turnoComp}. ${respuesta}`;
  resultado2.innerHTML = `
   <p><strong>${respuesta}</strong></p>
  <p>Elegiste ${jugada}. La computadora eligió ${turnoComp}.</p>`;
}

//Inserto imagen dependiendo la eleccion
function isertarImagen(jugadaCompu) {
    if (jugadaCompu == "piedra") {
        const jugadaCompu = document.getElementById("jugadaCompu");
        return jugadaCompu.innerHTML = '   <img   src="./img/piedra-removebg-preview.png"    />';
    }
    if (jugadaCompu == "papel") {
        const jugadaCompu = document.getElementById("jugadaCompu");
        return jugadaCompu.innerHTML = '   <img src="./img/papel-removebg-preview.png"    />';
    }
    if (jugadaCompu == "tijera") {
        const jugadaCompu = document.getElementById("jugadaCompu");
        return jugadaCompu.innerHTML = '   <img src="./img/tijera-removebg-preview.png"    />';
    }

}

function cambiarcolor(jugada) {
    if (jugada == "piedra") {
        const piedra = document.getElementById("piedra");
        return piedra.innerHTML = '<button id="piedra" style="background-color: #3475ca;">  <img    src="./img/piedra-removebg-preview.png"    " /> </button> ';
    }
    if (jugada == "papel") {
        const papel = document.getElementById("papel");
        return papel.innerHTML = '<button id="papel" style="background-color: #3475ca;" >    <img     src="./img/papel-removebg-preview.png"    style="background-color: #3475ca;" /> </button>';
    }
    if (jugada == "tijera") {
        const tijera = document.getElementById("tijera");
        return tijera.innerHTML = '<button id="tijera" style="background-color: #3475ca;">  <img   src="./img/tijera-removebg-preview.png"   style="background-color: #3475ca;" /> </button>';
    }
}

function reiniciarcolor() {
    const piedra = document.getElementById("piedra");
    piedra.innerHTML = '<button id="piedra"  >         <img src="./img/piedra-removebg-preview.png"    /> </button>';
    const papel = document.getElementById("papel");
    papel.innerHTML = '<button id="papel"  >             <img src="./img/papel-removebg-preview.png"    /> </button>';
    const jugada = document.getElementById("tijera");
    jugada.innerHTML = '<button id="tijera"  >             <img src="./img/tijera-removebg-preview.png"    /> </button>';
}

//Obtencion de jugada coomputadora
function obtenerJugadaComputadora() {
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  ajugada = ["piedra", "papel", "tijera"];
  console.log("La computadora eligio: " + ajugada[i]);

  return ajugada[i];
}

//Funcion par determinar gandor
function determinarGanador(turnoJugador, turnoCompu) {
  var totalusuariop = document.getElementById("totalusuario");
  var totalcpup = document.getElementById("totalcpu");

  // if(turnoJugador== undefined){
  // //  alert('undefined');
  // }
  if (turnoCompu == turnoJugador) {
    //alert("Empataron");
   // setTimeout(reiniciarcolor(),20000);
    return "Empataron";
  } else if (
    (turnoJugador == "piedra" && turnoCompu == "tijera") ||
    (turnoJugador == "papel" && turnoCompu == "piedra") ||
    (turnoJugador == "tijera" && turnoCompu == "papel")
  ) {
    //    alert( "Usted Gana");
    //reiniciarcolor();
  //  setTimeout(reiniciarcolor(),10000);
    return "Usted Gana";
  } else {
    // alert( "Tu pierdes, vuelve a intentarlo");
   // reiniciarcolor();
   
    return "Tu pierdes, vuelve a intentarlo";
  }
}

//funcion par mostrar resutlados
// Variables para el contador
var victorias = 0;
var derrotas = 0;
// Función para actualizar el contador y mostrar los resultados
function actualizarContador(resultado) {
  if (resultado === "Usted Gana") {
    victorias++;

  } else if (resultado === "Tu pierdes, vuelve a intentarlo") {
    derrotas++;

  }else{

  }
  // Actualizar los elementos en el DOM que muestran el contador
  document.getElementById("totalusuario").textContent = victorias;
  document.getElementById("totalcpu").textContent = derrotas;
  if (victorias == 3){
var respa = confirm("El juego finalizo, Usted Gana el JUEGO\n Desea jugar una nueva partida")
if(respa){
  reiniciarcolor();
victorias = 0;derrotas = 0;  
document.getElementById("totalusuario").textContent = victorias;
  document.getElementById("totalcpu").textContent = derrotas;
 }else{
  document.getElementById("nombreInput").value="";
  reiniciarcolor();
  location.reload();
  //  document.getElementById("nombreInput").value="";
  //  document.getElementById("nombreJugador").textContent = "";
  // victorias = 0;derrotas = 0;
  // document.getElementById("totalusuario").textContent = victorias;
  // document.getElementById("totalcpu").textContent = derrotas;
 }
  }
  if (derrotas == 3) {
var respas = confirm("El juego finalizo, Usted pierde el JUEGO\n Desea jugar una nueva partida")
 if(respas){
  reiniciarcolor();
  victorias = 0;derrotas = 0;
  document.getElementById("totalusuario").textContent = victorias;
  document.getElementById("totalcpu").textContent = derrotas;
 }else{
   document.getElementById("nombreInput").value="";
  reiniciarcolor();
  location.reload();
  //  document.getElementById("nombreInput").value="";
  //  document.getElementById("nombreJugador").textContent = "";
  // victorias = 0;derrotas = 0;
  // document.getElementById("totalusuario").textContent = victorias;
  // document.getElementById("totalcpu").textContent = derrotas;
 }
}
}