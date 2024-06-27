let borboletinhaViva = true;
let borboletinhaMorta = false;
let E = borboletinhaViva && borboletinhaMorta;
let OU = borboletinhaViva || borboletinhaMorta;
let negar01 = !borboletinhaViva && !borboletinhaMorta;
let negar02 = !borboletinhaViva || !borboletinhaMorta;

console.log(E);
console.log(OU);
console.log(negar01);
console.log(negar02);
