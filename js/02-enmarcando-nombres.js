// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// Ejemplo de funcionamiento:

// createFrame(['midu', 'madeval', 'educalvolpz'])

// // Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// createFrame(['midu'])

// // Resultado esperado:
// ********
// * midu *
// ********

// createFrame(['a', 'bb', 'ccc'])

// // Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

// createFrame(['a', 'bb', 'ccc', 'dddd'])

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Code here
  if (names.length === 0) return '****'

  const maxLength = Math.max(...names.map(name => name.length));
  console.log(maxLength)

  const border = '*'.repeat(maxLength + 4);

  const framedNames = names.map(name => `* ${name.padEnd(maxLength, ' ')} *`);

  return [border, ...framedNames, border].join('\n');
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
console.log(createFrame(['midu']));
console.log(createFrame(['a', 'bb', 'ccc']));
console.log(createFrame(['a', 'bb', 'ccc', 'ddd']));

// Explicación paso a paso
// Calcular la longitud máxima del nombre:

// javascript
// Copiar
// Editar
// const maxLength = Math.max(...names.map(name => name.length));
// Utiliza map para obtener un array con las longitudes de los nombres.

// Usa Math.max para encontrar la longitud máxima.

// Crear la línea superior e inferior del marco:

// javascript
// Copiar
// Editar
// const border = '*'.repeat(maxLength + 4);
// El borde tiene un tamaño de maxLength + 4 porque incluye:

// 2 asteriscos al inicio y al final.

// 2 espacios (uno a cada lado del nombre).

// Formatear cada nombre:

// javascript
// Copiar
// Editar
// const framedNames = names.map(name => `* ${name.padEnd(maxLength, ' ')} *`);
// El método padEnd(maxLength, ' ') agrega los espacios necesarios para que el nombre tenga el tamaño máximo.

// Combinar todas las partes:

// javascript
// Copiar
// Editar
// return [border, ...framedNames, border].join('\n');
// Utiliza un array con el borde superior, los nombres formateados y el borde inferior.

// join('\n') combina las líneas con saltos de línea.