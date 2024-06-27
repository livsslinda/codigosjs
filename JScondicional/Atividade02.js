const prompt = require("prompt-sync")();
const usuario = "liviadiva";
const senha = "kayblackmeuamor";
const digiusuario = prompt("Qual é seu nome? ");
const digisenha = prompt("Qual a sua senha? ");

if (digiusuario != usuario) {
  console.log("Usuário incorreto");
} else {
  if (digisenha != senha) console.log("Senha incorreta");
}
if (digisenha == senha && digiusuario == usuario) {
  console.log("Acesso liberado!");
}
