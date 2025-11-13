import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let numeros= ["A", "2", "3", "4","5","6","7","8","9","10","J","Q","K"] 
let Aleatorio= numeros[ Math.floor(Math.random() *numeros.length)]
document.querySelector(".cartanumero").innerHTML=Aleatorio
  console.log("Hello Rigo from the console!");
};
