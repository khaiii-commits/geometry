const prompt = require("prompt-sync")({ sigint: true });
console.log(' =================')
console.log(' KALKULATOR ELIPS');
console.log(' =================')
// input dan validasi
let a = Number(prompt('a : sumbu mayor '))
let b = Number(prompt('b : sumbu minor '))
const luas = Math.PI * a * b
const keliling = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)))
console.log('Luas elips:', luas.toFixed(2), 'cm2')
console.log('Keliling elips:', keliling.toFixed(2), 'cm')
console.log(' ====== <FINISH> ======')