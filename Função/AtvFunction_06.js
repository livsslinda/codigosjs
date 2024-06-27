//Crie uma função que receba um número como parâmetro. A função deve gerar um número aleatório e usar o número do parâmetro como valor máximo de aleatoriedade.
let random = 0
function numero(y){
    random = Math.floor(Math.random()*y)
    console.log(random)
}

numero(20)