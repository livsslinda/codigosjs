 let par = []
let  impar = []
let i = 1
for(i; i<=100; i++){
    if(i % 2 == 0){
        par.push(i)
    }if(i % 2 !== 0){
    impar.push(i)
    } 
    
}
console.log(impar, par)