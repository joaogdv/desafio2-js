// Defina um array de exemplo
var arrayOriginal = [1, 2, 3, 4, 5];

// Verifique se o array tem pelo menos três elementos
if (arrayOriginal.length >= 3) {
  // Crie um novo array com os elementos do meio
  var novoArray = arrayOriginal.slice(1, arrayOriginal.length - 1);

  // Imprima o novo array
  console.log(novoArray);
} else {
  console.log("O array original não possui elementos suficientes para remover o primeiro e o último.");
}