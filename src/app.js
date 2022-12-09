/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  generadorNumeros();
  generadorPintas();
  // Lo que queremos que aparezca en pantalla, numeros y simbolos
};

// SIEMPRE un const con el conjunto de elementos que queremos que aparezcan
// un LET para que genere el const cogiendo su longitud

function generadorPintas() {
  const tipo = ["♦", "♥", "♠", "♣"];
  let tipoIndex = Math.floor(Math.random() * tipo.length);

  if (tipo[tipoIndex] == "♥" || tipo[tipoIndex] == "♦") {
    document.querySelector("#carta").style.color = "red";
  } else {
    document.querySelector("#carta").style.color = "black";
  }

  const head = (document.getElementById("head").innerHTML = tipo[tipoIndex]);
  const footer = (document.getElementById("footer").innerHTML = head);
}

function generadorNumeros() {
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numerosIndex = Math.floor(Math.random() * numeros.length);

  const body = (document.getElementById("body").innerHTML =
    numeros[numerosIndex]);
}

let boton = document.querySelector("button");
boton.addEventListener("click", generadorNumeros);
boton.addEventListener("click", generadorPintas);
