const numbers = [
    [10, 20, 60],
    [8, 10, 52],
  ]; 
  let resultado = 1
  for(let coluna = 0; coluna<numbers[0].length;coluna++){
    for(let linha = 0; linha<numbers.length;linha++){
   
    resultado = resultado * numbers[linha][coluna] 
    }console.log(resultado)
    }
