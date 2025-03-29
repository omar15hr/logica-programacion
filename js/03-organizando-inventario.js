// Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

// Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

// name: el nombre del juguete (string).
// quantity: la cantidad disponible de ese juguete (entero).
// category: la categoría a la que pertenece el juguete (string).
// Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

// Las claves del objeto serán las categorías de juguetes.
// Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
// Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
// Si el array está vacío, la función debe devolver un objeto vacío {}.
// const inventory = [
//   { name: 'doll', quantity: 5, category: 'toys' },
//   { name: 'car', quantity: 3, category: 'toys' },
//   { name: 'ball', quantity: 2, category: 'sports' },
//   { name: 'car', quantity: 2, category: 'toys' },
//   { name: 'racket', quantity: 4, category: 'sports' }
// ]

// organizeInventory(inventory)

// // Resultado esperado:
// // {
// //   toys: {
// //     doll: 5,
// //     car: 5
// //   },
// //   sports: {
// //     ball: 2,
// //     racket: 4
// //   }

// const inventory2 = [
//   { name: 'book', quantity: 10, category: 'education' },
//   { name: 'book', quantity: 5, category: 'education' },
//   { name: 'paint', quantity: 3, category: 'art' }
// ]

// organizeInventory(inventory2)

// // Resultado esperado:
// // {
// //   education: {
// //     book: 15
// //   },
// //   art: {
// //     paint: 3
// //   }
// // }

/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  const result = {};

  // Recorrer el inventario
  for (const item of inventory) {
    // Crear la categoría si no existe
    if (!result[item.category]) {
      result[item.category] = {};
    }

    // Sumar la cantidad si el juguete ya existe en esa categoría
    if (result[item.category][item.name]) {
      result[item.category][item.name] += item.quantity;
    } else {
      result[item.category][item.name] = item.quantity;
    }
  }

  return result;
}

// Ejemplos
const inventory1 = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
];

console.log(organizeInventory(inventory1));
// Resultado esperado:
// {
//   toys: { doll: 5, car: 5 },
//   sports: { ball: 2, racket: 4 }
// }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
];

console.log(organizeInventory(inventory2));
// Resultado esperado:
// {
//   education: { book: 15 },
//   art: { paint: 3 }
// }


// Explicación paso a paso
// Inicialización del objeto resultado:

// javascript
// Copiar
// Editar
// const result = {};
// Creamos un objeto vacío donde almacenaremos el inventario organizado.

// Recorrido del inventario:

// javascript
// Copiar
// Editar
// for (const item of inventory) {
// Recorremos cada objeto del array de inventario.

// Creación de la categoría si no existe:

// javascript
// Copiar
// Editar
// if (!result[item.category]) {
//   result[item.category] = {};
// }
// Verificamos si la categoría ya está en el objeto result.

// Si no está, la creamos como un objeto vacío.

// Sumar la cantidad o asignarla si es la primera vez:

// javascript
// Copiar
// Editar
// if (result[item.category][item.name]) {
//   result[item.category][item.name] += item.quantity;
// } else {
//   result[item.category][item.name] = item.quantity;
// }
// Si el juguete ya está en la categoría, sumamos la cantidad.

// Si no está, lo agregamos con su cantidad inicial.

// ¿Por qué usamos esta estructura?
// La estructura del objeto final tiene la siguiente forma:

// javascript
// Copiar
// Editar
// {
//   toys: { doll: 5, car: 5 },
//   sports: { ball: 2, racket: 4 }
// }
// Es eficiente porque accedemos directamente al nombre del juguete en su categoría con una notación de objeto anidado.

