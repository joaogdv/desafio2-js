// Solicita ao usuário o primeiro número
var numero1 = parseFloat(prompt("Digite o primeiro número:"));

// Solicita ao usuário o segundo número
var numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica se o segundo número não é zero
if (numero2 !== 0) {
  // Calcula a divisão dos dois números
  var resultado = numero1 / numero2;

  // Imprime o resultado
  console.log("A divisão dos números é: " + resultado);
} else {
  console.log("Não é possível dividir por zero. Insira um segundo número diferente de zero.");
}