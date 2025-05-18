function ehTriangulo(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function tipoDeTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

let a = parseFloat(prompt("Digite o valor do lado A:"));
let b = parseFloat(prompt("Digite o valor do lado B:"));
let c = parseFloat(prompt("Digite o valor do lado C:"));

if (ehTriangulo(a, b, c)) {
    let tipo = tipoDeTriangulo(a, b, c);
    alert(`Os lados fornecidos formam um triângulo ${tipo}.`);
} else {
    alert("Os lados fornecidos não formam um triângulo.");
}