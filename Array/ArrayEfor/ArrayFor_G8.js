const numbers = [ 5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1 ]
for(let i = 1; i<numbers.length; i++){
    if(numbers.indexOf(numbers[i]) != i){
        numbers.splice(i,1)
        i--
    } 
    
}console.log(numbers.sort())