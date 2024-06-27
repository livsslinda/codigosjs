/*
Faça uma aplicação que converta um valor em **BRL** (Real Brasileiro) em outras moedas estrangeiras. 

Crie uma função que tenha como parâmetro o valor em **BRL** e o valor da moeda estrangeira selecionada pelo usuário, realizar o cálculo e retornar o resultado.

**A aplicação deve:**

1. receber um valor em **BRL** do usuário
2. apresentar as opções de moedas para conversão e receber uma escolha do usuário
3. baseado na escolha, realizar o cálculo da conversão
4. exibir o resultado, o nome da moeda convertida e o valor de câmbio atual desta moeda.
5. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.
*/
const prompt = require("prompt-sync")();

while(true){
let brl = String(prompt("Valor em BRL: "))
console.log(`
1 - Dólar Americano (USD);
2 - Euro (EUR);
3 - Libra Esterlina (GBP)
4 - Iene Japonês (JPY)
5 - Dólar Australiano (AUD)
`)
let opcao = String(prompt("Escolha dentre as opções a cima para converter: "))
console.clear
const cambioMoedas = {
    dolar_us: {
      nome: "Dólar Americano",
      codigo: "USD",
      valor_em_real: 5.4,
    },
    euro: {
      nome: "Euro",
      codigo: "EUR",
      valor_em_real: 6.52,
    },
    libra: {
      nome: "Libra Esterlina",
      codigo: "GBP",
      valor_em_real: 7.42,
    },
    iene: {
      nome: "Iene Japonês",
      codigo: "JPY",
      valor_em_real: 0.049,
    },
    dolar_au: {
      nome: "Dólar Australiano",
      codigo: "AUD",
      valor_em_real: 4.14,
    },
  };
  
  function DolarAmericano(brl){
        return brl * cambioMoedas.dolar_us.valor_em_real
  }
function Euro(brl){
    return brl * cambioMoedas.euro.valor_em_real
}
function Libra(brl){
    return brl * cambioMoedas.libra.valor_em_real
}
function Iene(brl){
    return brl * cambioMoedas.iene.valor_em_real
}
function DolarAustraliano(brl){
    return brl * cambioMoedas.dolar_au.valor_em_real
}

if(opcao == 1){
    console.log(DolarAmericano(brl))
}else if (opcao == 2){
    console.log(Euro(brl))
}else if( opcao == 3){
    console.log(Libra(brl))
}else if(opcao == 4){
    console.log(Iene(brl))
}else if(opcao == 5){
    console.log(DolarAustraliano(brl))
}

const ask = prompt("Deseja converter mais algum valor? S/N: ")
if(ask !== "s"){
  break
}
}