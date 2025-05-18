let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));

let precoPorUnidade = quantidade < 12 ? 0.30 : 0.25;
let valorTotal = quantidade * precoPorUnidade;

alert(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);