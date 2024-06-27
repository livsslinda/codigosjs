let prompt = require("prompt-sync")();

let salarioDousuario = prompt("Qual é o seu salário? ");
if (salarioDousuario <= 2112.0) {
  console.log("Você está isento.");
} else if (salarioDousuario >= 2112.0 && salarioDousuario <= 2826.65) {
  console.log("Deverá pagar 7.5% do salário");
  let imposto = salarioDousuario * 0.075;
  console.log(imposto);
} else if (salarioDousuario >= 2826.66 && salarioDousuario <= 3751.05) {
  console.log("deverá pagar 15% do salário");
  let imposto = salarioDousuario * 0.15;
  console.log(imposto);
} else if (salarioDousuario >= 3751.06 && salarioDousuario <= 4664.68) {
  console.log("Deverá pagar 22.5% do salário");
  let imposto = salarioDousuario * 0.225;
  console.log(imposto);
} else {
  console.log("Deverá pagar 27.5% do salário");
  let imposto = salarioDousuario * 0.275;
  console.log(imposto);
}
