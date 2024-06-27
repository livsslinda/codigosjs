const prompt = require("prompt-sync")()
let letra = String(prompt("Digita uma letra: "))
switch(letra){
    case "A" && "a":{
        console.log("letra a digitada")
break
    }
    case "B" && "b":{
        console.log("letra b digitada")
        break
    }
    default:{
        console.log("o prazo para as atividade está entre a letra G e K do teclado")
    break
    }
}