//Imprimir na tela o texto
console.log('Olá, mundo!');

//Criar variável com JavaScript
var cliente = "César";

//Imprimir na tela o texto e conteúdo da variável
console.log("Cliente: " + cliente);

//Criar a variável com JavaScripty
var valorProduto = 100;
var valorDesconto = 47

//Incluir o arquivo com a função calcular desconto
var calcularDesconto = require('./modules/calcularDesconto');

//Utilizar a função calcular desconto
var valorFinal = calcularDesconto(valorProduto, valorDesconto);

//Imprimir na tela o texto e o conteúdo da variável
console.log("Valor do produto com desconto: R$: " + valorFinal)
