let num1 = 0;
let num2 = 1;

console.log("Sequência de Fibonacci:");
console.log(num1); 
console.log(num2); 


for (let i = 3; i <= 10; i++) {
    let nextNum = num1 + num2; 
    console.log(nextNum); 
    num1 = num2; 
    num2 = nextNum; 
}