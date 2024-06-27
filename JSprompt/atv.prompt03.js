let prompt = require("prompt-sync")();
let celsius = Number(prompt("Quantos Celsius está fazendo?"));
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);
