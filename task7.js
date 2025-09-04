

// Type your code below this line!
const prompt = require('prompt-sync')();

function Coche(marca, modelo, age, color){
    this.marca = marca;
    this.modelo = modelo;
    this.age = age;
    this.color = color;
}

let marca = prompt("Ingresa la marca del coche:");
let modelo = prompt("Ingresa el modelo:");
let age = +prompt("Ingresa el año:");
let color = prompt("Ingresa el color:");

let descripcionCoche = new Coche (marca, modelo, age, color); //almacenar (?)

console.log(`El carro es marca ${marca}, modelo ${modelo} del año ${age} y color ${color}`);

// Type your code above this line!

