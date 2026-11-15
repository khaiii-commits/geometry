const prompt = require("prompt-sync")({ sigint: true });
console.log(' ========================')
console.log(' KALKULATOR LAYANG-LAYANG');
console.log(' ========================')
const d1 = Number(prompt('d1 : diagonal 1 '))
const d2 = Number(prompt('d2 : diagonal 2 '))   
let luas = 0.5 * d1 * d2
let = keliling = 2 * (d1 + d2)
console.log (`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)
console.log(' ====== <FINISH> ======')