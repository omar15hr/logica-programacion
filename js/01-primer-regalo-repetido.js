// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

// const gifts1 = [3, 1, 2, 3, 4, 2, 5]
// const preparedGifts1 = prepareGifts(gifts1)
// console.log(preparedGifts1) // [1, 2, 3, 4, 5]

// const gifts2 = [6, 5, 5, 5, 5]
// const preparedGifts2 = prepareGifts(gifts2)
// console.log(preparedGifts2) // [5, 6]

// const gifts3 = []
// const preparedGifts3 = prepareGifts(gifts3)
// console.log(preparedGifts3) // []
// // No hay regalos, la lista queda 

/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Code here
  return Array.from(new Set(gifts)).sort((a, b) => a - b)
  return []
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))
console.log(prepareGifts([6, 5, 5, 5, 5]))
console.log(prepareGifts(["hola", "hola", "como", "adios"]))

// Explicación
// Eliminar duplicados:

// new Set(gifts) crea un conjunto con elementos únicos.

// Array.from(...) convierte el conjunto de nuevo a un array.

// Ordenar el array:

// El método .sort((a, b) => a - b) asegura un orden numérico ascendente.

// SORT
const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4]
// Compara 3 y 1:

// 3 - 1 = 2 (positivo) → 3 va después de 1.

// Compara 1 y 4:

// 1 - 4 = -3 (negativo) → 1 va antes de 4.

// Compara 4 y 2:

// 4 - 2 = 2 (positivo) → 4 va después de 2.

// Compara 3 y 2:

// 3 - 2 = 1 (positivo) → 3 va después de 2.

