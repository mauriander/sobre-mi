


function obtenerJugadaUsuario(jugada) {
  
    console.log("Usted eligio: " + jugada);
    const turnoComp = obtenerJugadaComputadora();
  const clickedButton = document.getElementById(jugada);
  clickedButton.classList.add("selected");
  const jugadaCompu = document.getElementById("jugadaCompu");
  jugadaCompu.textContent= turnoComp;
  
  const respuesta = determinarGanador(jugada,turnoComp);
  
  const resultado2 = document.getElementById("resultado");
    

  resultado2.textContent= `Elegiste ${jugada}. La computadora eligió ${(turnoComp)}. ${respuesta}`;
    resultado2.innerHTML= `
   <p><strong>${respuesta}</strong></p>
  <p>Elegiste ${jugada}. La computadora eligió ${turnoComp}.</p>` ;
  
}

  

function obtenerJugadaComputadora() {  
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  ajugada = ["piedra", "papel", "tijera"];
  console.log("La computadora eligio: " + ajugada[i]);  
  return ajugada[i];

}
const ppt = document.querySelectorAll(".choice");

function determinarGanador(turnoJugador, turnoCompu) {
  const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
  // if(turnoJugador== undefined){
  // //  alert('undefined');
  // }
  if (turnoCompu == turnoJugador) {
    //alert("Empataron");
    return "Empataron";
  } else if (    (turnoJugador == "piedra" && turnoCompu == "tijera") ||    (turnoJugador == "papel" && turnoCompu == "piedra") ||    (turnoJugador == "tijera" && turnoCompu == "papel")  ) {
//    alert( "Usted Gana");
 
  userScore_span.innerHTML = userScore++;
  cpuScore_span.innerHTML = cpuScore;
    return "Usted Gana";
  } else {
   // alert( "Tu pierdes, vuelve a intentarlo");
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;

    return "Tu pierdes, vuelve a intentarlo";
  }
}




    
   
    

   