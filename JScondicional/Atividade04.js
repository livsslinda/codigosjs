let prompt = require("prompt-sync")();

let direçao = prompt("Para direção você quer se mover? ");

if (direçao == "frente") {
  console.log("Você foi para frente.");
} else if (direçao == "trás") {
  console.log("Você foi para trás.");
} else if (direçao == "direita") {
  console.log("Você foi para direita.");
} else {
  console.log("Você foi para esquerda.");
}
