const prompt = require("prompt-sync")({ sigint: true });
console.log(' ========================')
console.log(' KALKULATOR BELAH KETUPAT');
console.log(' ========================')
const d1 = Number(prompt('d1 : diagonal 1 '))
const d2 = Number(prompt('d2 : diagonal 2 '))
const luas = 0.5 * d1 * d2
const keliling = 4 * Math.sqrt((d1 / 2) ** 2 + (d2 / 2) ** 2)
console.log (`  Luas     : ${luas} cm2
  Keliling : ${keliling.toFixed (1)} cm`)
console.log(' ====== <FINISH> ======')