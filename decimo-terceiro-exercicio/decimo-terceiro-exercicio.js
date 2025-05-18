let sum = 0;
let count = 0;
let number;

do {
    number = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));
    if (number !== 0) {
        sum += number;
        count++;
    }
} while (number !== 0);

if (count > 0) {
    const average = sum / count;
    alert(`A média aritmética dos números digitados é: ${average}`);
} else {
    alert("Nenhum número foi digitado.");
}