// Solicita ao usuário o primeiro número
var numero1 = parseFloat(prompt("Digite o primeiro número:"));

// Verifica se o primeiro número é positivo
if (numero1 >= 0) {
  // Solicita ao usuário o segundo número
  var numero2 = parseFloat(prompt("Digite o segundo número:"));

  // Verifica se o segundo número é positivo
  if (numero2 >= 0) {
    // Calcula a soma dos dois números
    var resultado = numero1 + numero2;

    // Imprime o resultado
    console.log("A soma dos números é: " + resultado);
  } else {
    console.log("O segundo número não é positivo.");
  }
} else {
  console.log("O primeiro número não é positivo.");
}