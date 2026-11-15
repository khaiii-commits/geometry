const prompt = require("prompt-sync")({ sigint: true });
console.log(' ++++++++++++++++')
console.log(' KALKULATOR BALOK');
console.log(' <<<<<<<<>>>>>>>>')
const p = Number(prompt('p : panjang '))
const l = Number(prompt('l : lebar '))
const t = Number(prompt('t : tinggi '))
let volume = p * l * t
let luas = 2 * (p * l + p * t + l * t)
console.log (`  Volume : ${volume} cm3`)
console.log (`  Luas   : ${luas} cm2`)
console.log(' ====== END ======')