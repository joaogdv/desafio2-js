// String de exemplo
var minhaString = "Olá, como você está?";

// Use uma expressão regular para encontrar todas as vogais na string
var vogaisEncontradas = minhaString.match(/[aeiouAEIOU]/g);

// Verifique se vogais foram encontradas
if (vogaisEncontradas) {
  // Imprima o array de vogais
  console.log("Vogais encontradas na string: " + vogaisEncontradas.join(", "));
} else {
  console.log("Nenhuma vogal encontrada na string.");
}