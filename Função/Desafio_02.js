/*
Faça uma aplicação que realize as 4 operações básicas de uma calculadora: **adição**, **subtração**, **multiplicação** e **divisão**. 

Cada operação básica deve ser uma função declarada que receba como parâmetro dois números do qual irá realizar a operação e retornar o resultado.

**A aplicação deve:**

1. receber 2 números do usuário através do prompt
2. perguntar ao usuário qual operação realizar
3. exibir o resultado
4. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.
*/

const prompt = require("prompt-sync")();
while(true){
let x = Number(prompt("Digita um número: "))
console.clear
let y = Number(prompt("Digite mais um número: "))
console.clear
let operation = String(prompt("Qual operanção você gostaria de fazer? "))
console.clear

function multiplicacao(){
   return x*y
}

function adicao(){
    return x+y
}

function subtracao(){
    return x-y
}

function divisao(){
    return x/y
}


if(operation == "multiplicacao"){
    console.log(multiplicacao(x,y))
}else if(operation == "adicao"){
    console.log(adicao(x,y))
}else if(operation == "subtracao"){
    console.log(subtracao(x,y))
}else if(operation == "divisao"){
    console.log(divisao(x,y))
}

const ask = prompt("Deseja realizar mais alguma operação? S/N ")
if(ask !== "s"){
    break
}
}
