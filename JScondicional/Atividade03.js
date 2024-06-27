let prompt = require("prompt-sync")();
let nota01 = Number(prompt("Qual é a sua primeira nota? "));
let nota02 = Number(prompt("Qual é a sua segunda nota? "));
let nota03 = Number(prompt("Qual é a sua terceira nota?"));
let media = (nota01 + nota02 + nota03) / 3;

if (media < 4) {
  console.log("Reprovado");
} else if (media >= 4 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado!");
}
