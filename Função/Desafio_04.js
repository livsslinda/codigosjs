/*
Faça uma aplicação que retorne o significado de uma palavra que se encontra no dicionário.

Crie uma função que receba uma palavra como parâmetro e utilize essa palavra para verificar se seu significado existe no **objeto** dicionário.

Também crie uma função que receba como parâmetro uma palavra e um significado. Utilize estes parâmetros para inserir novas palavras no **objeto** dicionário.

**A aplicação deve:**

1. oferecer opção para o usuário pesquisar uma palavra no dicionário ou inserir uma palavra no dicionário
2. receber opção e realizar ação conforme opção selecionada
3. pesquisar palavra no objeto dicionário e retornar significado
4. inserir o conjunto da palavra e significado no dicionário
5. exibir resultado de cada ação realizada
6. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.
*/
const prompt = require("prompt-sync")();
const dicionario = {
    relação:
      "vinculação de alguma ordem entre pessoas, fatos ou coisas; ligação, conexão, vínculo.",
    semelhança: "comparação entre duas coisas; confronto, cotejo, paralelo.",
    aleatório:
      "que depende das circunstâncias, do acaso; casual, fortuito, contingente.",
    incerteza: "falta de certeza; dúvida, hesitação, indecisão, imprecisão.",
    for: "expressão que remete a facilidade; mais fácil impossível.",
  };

    const ask = Number(prompt(`
    1 - pesquisar palavra; 
    2 - adicionar palavra.`))

console.log(number1(ask))

    function number1(ask){
      if(ask == 1){
        console.log(`Escolha uma das palavras abaixo:
        - relação;
        - semelhança;
        - aleatório;
        - incerteza;
        - for.`)
        const palavra = String(prompt("Escolha uma destas palavras acima: "))
        console.clear
        if(palavra == "relação"){
          console.log(dicionario.relação)
        }
        if(palavra == "semelhança"){
          console.log(dicionario.semelhança)
        }
        if(palavra == "aleatório"){
          console.log(dicionario.aleatório)
        }
        if(palavra == "incerteza"){
          console.log(dicionario.incerteza)
        }
        if(palavra == "for"){
          console.log(dicionario.relação)
        }
      }
    }
function number2(ask){
  if(ask == 2){
    const adc = String(prompt("Adicione a palavra juntamente com o significado: "))
    dicionario.push(adc)
  }
}
    