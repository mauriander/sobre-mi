// ----------------------------------C-----------A--------------------------------------------------------------
// ------------------------------------A-------L---D-------1-----------------------------------------------------------
// --------------------------------------L---U------O---A------------------------------------------------------------
// ----------------------------------------C----------R-----------------------------------------------------------

function deshabilitarnum2() {
  //Deshabilito el campo del numero 2, ya que no sera necesario asi evitamos una confusion del usuario o una mala utilizacion del mismo
  const operador = document.getElementById("opciones").value;
  const num2 = document.getElementById("num2");

  if (operador === "^2") {
    num2.value = "";
    //deshabilitar
    num2.disabled = true;
  } else {
    num2.disabled = false;
  }
}

function calcular() {
  //asigno a num1 y num2 los valors ingresados en dichos campos
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  //guardo la eleccion del operador
  var operador = document.getElementById("opciones").value;
  var resultado = 0;

  //dependiendo la eleccion realizo el switch case, podria hacer if, pero me parecio mas prolijo trabajarlos de esta manera
  switch (operador) {

    //en cada caso hago las validaciones del campo 1 y campo 2, me qqueda pendiente de verificar la diferencia validar de break y return del if
    case "+":
      if (validar1() == "") {
        break;
      }
      if (validar2() == "") {
        break;
      }
      resultado = num1 + num2;
      break;
    case "-":
      if (validar1() == "") {
        return;
      }
      if (validar2() == "") {
        return;
      }
      resultado = num1 - num2;
      break;
    case "*":
      if (validar1() == "") {
        break;
      }
      if (validar2() == "") {
        break;
      }
      resultado = num1 * num2;
      break;
    case "^2":
      if (validar1() == "") {
        break;
      }
      resultado = num1 * num1;
      break;
    case "/":
      if (validar1() == "") {
        break;
      }
      if (validar2() == "") {
        break;
      }
      if (num2 === 0) {
        alert("No se puede dividir por 0");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      break;
  }
  //Por mas que pase las validaciones y se muestre que los campos no fueron completados
  // se hizo un if que el display muestre error en lugar NaN para que sea mas amigable y entendible al usuarui

  
  
  

  if (isNaN(resultado)) {
    document.getElementById("resultado").value = 'Error';
  } else {
//Validacion de muchos numero se implementa pero en disconformidad, se realize a modo ejercicio con un largo de 13 caracteres
     if(resultado.toString().length >13){
   document.getElementById("resultado").value = 'Numero extenso';}
   else{
    document.getElementById("resultado").value = resultado;}
  }
}

function borrarCalc() {
  //borrar , que en realidad setteamos a "" (vacio) los campos iniciales
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").value = "";
}

//validar 1 y 2 son exactamente pero debido a la operacion ^2 y que deshabilita un campo se implemento 2 distintas aunque podria realizarse las dos juntas 
function validar1() {
  var num1 = document.getElementById("num1");
  num1.value === "" ? alert("Por favor, completa el campo de numero 1.") : "";
}
function validar2() {
  var num2 = document.getElementById("num2");
  //se realizo con un ternario
  num2.value === "" ? alert("Por favor, completa el campo de numero 2.") : "";
}



// ----------------------------------C-----------A--------------------------------------------------------------
// ------------------------------------A-------L---D-------2-----------------------------------------------------------
// --------------------------------------L---U------O---A------------------------------------------------------------
// ----------------------------------------C----------R-----------------------------------------------------------
let estadoInput = "";
let estadoOperacion = "";
let antesOperacion = "";


//Actualizo el display
function updateDisplay() {
  document.getElementById("result").value = estadoInput;
}

//cargo todos los valores en el display mientras sean presionados
function muestra1() {
  //cargo el display
  estadoInput += "1";
  updateDisplay();
}
function muestra2() {
  estadoInput += "2";
  updateDisplay();
}
function muestra0() {
  estadoInput += "0";
  updateDisplay();
}
function muestra3() {
  estadoInput += "3";
  updateDisplay();
}
function muestra4() {
  estadoInput += "4";
  updateDisplay();
}
function muestra5() {
  estadoInput += "5";
  updateDisplay();
}
function muestra6() {
  estadoInput += "6";
  updateDisplay();
}
function muestra7() {
  estadoInput += "7";
  updateDisplay();
}
function muestra8() {
  estadoInput += "8";
  updateDisplay();
}
function muestra9() {
  estadoInput += "9";
  updateDisplay();
}

function muestrapunto() {
  //verificar el punto
  estadoInput += ".";
  updateDisplay();
}

//Cuando apreto el boton operacion, todo lo anterior lo guardo
function sumar() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "+";
}

function restar() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "-";
}
function dividir() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "/";
}
function multiplicar() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "*";
}
//mientras el usuario no ingrese igual no voy a dejar de leer numeros
function calcular2() {
  // alert("cALCULAR"+ antesOperacion+" "+ estadoOperacion+" "+estadoInput)
  var num1 = parseFloat(antesOperacion);
  var num2 = parseFloat(estadoInput);
  var operador = estadoOperacion;
  // alert(num1 + "  "+operador+ " "+num2);

  switch (operador) {
    case "+":
      estadoInput = num1 + num2;
      break;
    case "-":
      estadoInput = num1 - num2;
      break;
    case "*":
      estadoInput = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("No se puede dividir por 0");
        return;
      }
      estadoInput = num1 / num2;
      break;
    default:
      break;
  }
  document.getElementById("result").value = estadoInput;
}

//Limpio el display
function limpiar() {
  estadoInput = "";
  estadoOperacion = "";
  antesOperacion = "";
  result = "";
  updateDisplay();
}

