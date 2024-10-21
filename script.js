.architect
bootstrap.css
bootstrap.js
bootstrap.json
bootstrap.jsonp
build/
classic.json
classic.jsonp
ext/
modern.json
modern.jsonp
resources/sass/.sass-cache/
resources/.arch-internal-preview.css
.arch-internal-preview.css

let valorA
let valorB
let valorC
let resultado
let principio
let base
let expoente


function setup() {
  createCanvas(400, 400);
  
  principio = prompt("1. Adição     2. Subtração    3. Multiplicação     4. Divisão    5. Potência    6. Raiz Quadrada")
  
  if (principio == 5){
    valorA = parseFloat(prompt("base"))
    valorB = parseFloat(prompt("expoente"))
    resultado = valorA ** valorB
      console.log(valorA + "^" + valorB + " = " + resultado)
    
  } else if (principio == 6) {
    valorA = parseFloat(prompt("valor"))
    resultado = Math.sqrt(valorA)
    console.log("Raiz quadrada de " + valorA + " = " + resultado)
    
  } else { 
    
  valorA = parseFloat(prompt("primeiro valor"));
  valorB = parseFloat(prompt("segundo valor"));
  valorC = parseFloat(prompt("terceiro valor")); 
  //parseFloat é usado para transformar algo em um número, sem isso 20+20 daria 2020
  
  if (principio == 1){
  if (valorC == 0 || isNaN(valorC)){
    resultado = (valorA + valorB)
  
  console.log(valorA + " + " + valorB + " = " + resultado)
    
  } else {
    resultado = (valorA + valorB + valorC)
    
  console.log(valorA + " + " + valorB + " + " + valorC + " = " + resultado)
  }
  } else if (principio == 2) {
   if (valorC == 0 || isNaN(valorC)){
      resultado = valorA - valorB
   
      console.log(valorA + " - " + valorB + " = " + resultado)
   
      } else {
       resultado = (valorA - valorB - valorC)
        
      console.log(valorA + " - " + valorB + " - " + valorC + " = " + resultado)
      }
  } else {
    if (principio == 3){
    if (valorC == 0 || isNaN(valorC)){
      resultado = valorA * valorB
  
      console.log(valorA + " * " + valorB + " = " + resultado)
  
      } else {
        resultado = (valorA * valorB * valorC)
        
      console.log(valorA + " * " + valorB + " * " + valorC + " = " + resultado)
      }
    } else {
        
    if (principio == 4){
    if (valorC == 0 || isNaN(valorC)){
      resultado = valorA / valorB
  
      console.log(valorA + "/" + valorB + " = " + resultado)
      
    } else {
      resultado = (valorA / valorB / valorC)
        
      console.log(valorA + "/" + valorB + "/" + valorC + " = " + resultado)
      
      
      
} 
 } 
  } 
  } 
  }
}


function draw() {
  background("white");
  
  textSize(50)
  fill("black")
  text(resultado, 200, 200)
  textAlign(CENTER, CENTER)
  
  
  
}
