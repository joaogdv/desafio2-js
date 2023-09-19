// Solicita ao usuário o primeiro número
var numero1 = parseFloat(prompt("Digite o primeiro número:"));

// Solicita ao usuário o segundo número
var numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica se pelo menos um dos números é par
if (numero1 % 2 === 0 || numero2 % 2 === 0) {
  // Calcula a multiplicação dos dois números
  var resultado = numero1 * numero2;

  // Imprime o resultado
  console.log("A multiplicação dos números é: " + resultado);
} else {
  console.log("Pelo menos um dos números deve ser par para calcular a multiplicação.");
}