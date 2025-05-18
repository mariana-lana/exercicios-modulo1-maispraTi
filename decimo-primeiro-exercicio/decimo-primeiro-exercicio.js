let total = 0;

for (let i = 1; i <= 5; i++) {
    let number = parseFloat(prompt(`Digite o ${i}º número:`));
    if (!isNaN(number)) {
        total += number;
    } else {
        alert("Por favor, insira um número válido.");
        i--; 
    }
}

alert(`A soma total dos números é: ${total}`);