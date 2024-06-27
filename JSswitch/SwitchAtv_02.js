const prompt = require("prompt-sync")();

const nota = Number(prompt("Qual é a sua nota? "));

switch (true) {
  case nota <= 3:
    console.log("Reprovado");
    break;
  case nota >= 4 && nota <= 6:
    console.log("Recuperação");
    break;
  default:
    console.log("Aprovado");
}
