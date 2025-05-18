let numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero)) {
    for (let i = 0; i < 10; i++) {
        alert(`Número ${i + 1}: ${numero}`);
    }
} else {
    alert("Por favor, digite um número inteiro válido.");
}