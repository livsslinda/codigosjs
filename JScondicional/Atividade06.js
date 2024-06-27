let prompt = require("prompt-sync")();

let Ano = prompt("Qual é o ano?");

let resto = Ano % 4 && Ano % 400;
if (resto == 0) {
  console.log("é um ano bissexto.");
} else {
  console.log("é um ano comum");
}
