let arr = []
let prompt = require("prompt-sync")()

for(let i = 0; i<5; i++){
    let obj = {
        id: i+1,
        nome_usuario: String(prompt("Digite um nome: "))
    } 
     arr.push(obj)
} console.log(arr)