let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);


var selecto = document.getElementById("opciones");
var opc = selecto.options[selecto.selectedIndex].value;
//buttons
function calcular(){
let result = document.getElementById("result");
 alert(opc);
if(opc == '+'){
  result=num1+num2;
  alert(result); 
}
if(opc == '-'){
  result = num1 - num2;
  alert(result);
}
if(selecto.value === "*"){
  result=multiplicacion(num1,num2);
  document.getElementById("resultado")= result;
}
if(selecto.value === "/"){
  result=division(num1,num2);
  document.getElementById("resultado")= result;
}
 document.getElementById("resultado").textContent= result; 
 
}





//mientras el usuario no ingrese igual no voy a dejar de leer numeros
let input = document.getElementById('result');
let contenido='';
 var lectura1='El resultado es'
// var lectura2=

document.getElementById('resultado').textContent = lectura1;
function mostrarBotones() {
  var contenedor = document.getElementById("contenedorBotones");
  contenedor.style.display = "block";
}


function division(num1,num2){
  return num1/num2;

}
function multiplicacion(num1,num2){
    return num1*num2;
}

function suma(num1,num2){
return num1+num2;
}

function resta(num1,num2){
  return num1-num2;

}
