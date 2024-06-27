const lista = [ "Kairi", 24, "Henrik", 35, 8, 102, "Makenna", "Armani", 7, "Zole", 64, 2, 4, "Nathanael", "Elina", 5, "Grady", 32, 1, "Cora", 23, "Jayce", 5, "Mya", 55, "Bjorn", 40 ]
let string = []
let numbers = []
for(let i = 0; i<lista.length; i++){
    if(typeof lista.at(i) === typeof 1){
        numbers.push(lista[i])
    }else{
        if(typeof lista.at(i) === typeof ""){
            string.push(lista[i])
        }
    }
} console.log(string , numbers)