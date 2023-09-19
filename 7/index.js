// String de exemplo
var minhaString = "Olá, como você está?";

// Use uma expressão regular para encontrar todas as consoantes na string
var consoantesEncontradas = minhaString.match(/[^aeiouAEIOU\s\W\d_]/g);

// Verifique se consoantes foram encontradas
if (consoantesEncontradas) {
  // Imprima o array de consoantes
  console.log("Consoantes encontradas na string: " + consoantesEncontradas.join(", "));
} else {
  console.log("Nenhuma consoante encontrada na string.");
}