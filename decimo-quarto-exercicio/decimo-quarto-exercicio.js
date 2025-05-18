let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (isNaN(numero) || numero < 0) {
    alert("Por favor, insira um número inteiro não negativo.");
} else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é ${fatorial}.`);
}