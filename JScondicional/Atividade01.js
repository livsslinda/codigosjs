let prompt = require("prompt-sync")();
let idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
  console.log("Apto a dirigir");
} else {
  console.log("Não possui idade o suficiente para dirigir");
}
