const prompt = require("prompt-sync")({ sigint: true });
console.log(' ===================')
console.log(' KALKULATOR TRAPESIUM');
console.log(' ===================')
const a = Number(prompt('a : sisi sejajar 1 '))
const b = Number(prompt('b : sisi sejajar 2 '))
const t = Number(prompt('t : tinggi '))
const luas = 0.5 * (a + b) * t
const s1 = Number(prompt('s1 : sisi 1 '))
const s2 = Number(prompt('s2 : sisi 2 '))
const keliling = a + b + s1 + s2
console.log (`  Luas     : ${luas} cm2
  Keliling : ${keliling} cm`)
console.log(' ====== <FINISH> ======')