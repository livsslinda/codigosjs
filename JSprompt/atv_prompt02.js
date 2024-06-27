let prompt = require("prompt-sync")();
let nota01 = Number(prompt("Qual foi a sua primeira nota?"));
let nota02 = Number(prompt("Qual foi a sua segunda nota?"));
let nota03 = Number(prompt("Qual foi a sua terceira nota?"));
let resultado = (nota01 + nota02 + nota03) / 3;

console.log(resultado);
