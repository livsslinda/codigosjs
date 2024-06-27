const prompt = require("prompt-sync")();
const pesoCaminhao = Number(prompt("Qual é o peso do caminhão? "));

switch (true) {
  case pesoCaminhao >= 1000 && pesoCaminhao <= 3900:
    console.log("Caminhão de pequeno porte");
    break;
  case pesoCaminhao >= 4000 && pesoCaminhao <= 6000:
    console.log("Caminhão de médio porte");
    break;
  case pesoCaminhao > 6000:
    console.log("Caminhão de grande porte");
    break;
  default:
    console.log("Não é um caminhão");
}
