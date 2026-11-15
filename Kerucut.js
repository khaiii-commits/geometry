const prompt = require('prompt-sync')({sigint: true});
console.log(' ====================')
console.log(' KALKULATOR KERUCUT');
console.log(' ====================')
let r = Number(prompt('r : jari-jari '))
let t = Number(prompt('t : tinggi '))   
const luas = 3.14 * r * (r + Math.sqrt((r * r) + (t * t)))
const volume = 3.14 * r * r * t / 3
console.log (`
Luas     : ${luas} cm2
Volume   : ${volume} cm3`)
console.log(' ====== END ======')   