let idade = parseInt(prompt("Qual a sua idade?"));

if (idade < 12) {
    alert("Você é uma criança.");
} else if (idade < 18) {
    alert("Você é um adolescente.");
} else if (idade < 60) {
    alert("Você é um adulto.");
} else {
    alert("Você é um idoso.");
}