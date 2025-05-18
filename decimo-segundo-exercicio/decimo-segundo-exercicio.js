const numero = parseInt(prompt("Digite um número para ver sua tabuada (de 1 a 10):"));

if (!isNaN(numero)) {
    let mensagem = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        mensagem += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(mensagem);
} else {
    alert("Por favor, insira um número válido.");
}