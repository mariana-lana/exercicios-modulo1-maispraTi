let peso = parseFloat(prompt("Digite o seu peso em kg:"));
let altura = parseFloat(prompt("Digite a sua altura em metros:"));

let imc = peso / (altura * altura);

let categoria;

if (imc < 18.5) {
    categoria = "Baixo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}

alert(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`);