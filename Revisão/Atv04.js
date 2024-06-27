const prompt = require("prompt-sync")()
let idade = Number(prompt("digita uma idade: "))
if(idade>18){
    console.log("É maior de idade")
}else{
    console.log("É menor de idade")
}