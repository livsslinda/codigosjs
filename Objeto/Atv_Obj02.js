let carro = {
    marca: "AutomotivosSapa",
    modelo: "SapatãoConfort",
    ano: 2050,
    cor: "verde lesbica"
}
console.log(carro.modelo, carro.cor)
carro.cor = "jacinto"
carro.condicao = "usado"
delete carro.ano
console.log(carro)