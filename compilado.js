'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Muestra el número total de lineas, y el número de palabras por linea
// Documentación: https://nodejs.org/api/readline.html
const file = process.argv[2];
let lines = 0;

console.log(`Fichero selecionado: ${file}\n`);

// Emite el evento 'line' cuando lee una linea
const rl = _readline2.default.createInterface({
  input: _fs2.default.createReadStream(file),
  crlfDelay: Infinity
});

rl.on('line', line => {
  ++lines;
  console.log(`Número de caracteres por linea: ${line.length}`);
});

rl.on('close', () => {
  console.log(`\nNúmero total de lineas: ${lines}`);
});
