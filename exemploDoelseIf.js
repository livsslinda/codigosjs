let prompt = require("prompt-sync")();
let Idade = prompt("Qual é a sua idade? ");
if (Idade <= 7 || Idade >= 60) {
  console.log("Entrada gratuita");
} else if (Idade > 7 && Idade <= 17) {
  console.log("Meia-entrada");
} else {
  console.log("Entrada inteira");
}
