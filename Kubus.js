const prompt = require("prompt-sync")({ sigint: true });
console.log(' ===================')
console.log(' KALKULATOR KUBUS');
console.log(' ===================')
const s = Number(prompt('s : panjang sisi '))
const volume = s * s * s
const luas = 6 * s * s
console.log (`  Volume : ${volume} cm3`)
console.log (`  Luas   : ${luas} cm2`)
console.log(' ====== END ======')