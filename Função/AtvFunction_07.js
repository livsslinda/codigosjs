//Crie uma função que receba uma array como parâmetro e retorne a soma de todos os números da array.
const arr = [1,2,3,4,5]
function soma(arr){
    let resultado = 0

    for(let i = 0; i < arr.length; i++){
        resultado = resultado+arr.at(i)
        
    }
    
    console.log(resultado)
}
soma(arr)
