let nota = parseFloat(prompt("Digite a nota do aluno: "));

if (nota === 0) {
    console.log("Reprovado");
} else if (nota > 0 && nota < 6) {
    alert("Recuperação");
} else if (nota >= 6 && nota <= 10) {
    alert("Aprovado");
} else {
    alert("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
}