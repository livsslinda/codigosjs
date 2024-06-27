

let numero = [1,2,3,4,5,6,7,8,9,10]
//              duplicar
//let dupli = []
//for(let i = 0; i<=numero.length; i++){
//    dupli= numero[i]*2
//    console.log(dupli)
//}
let soma = 0
for(let i = 0; i<numero.length; i++){
    soma = soma + numero.at(i)
}
console.log(soma)