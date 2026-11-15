const prompt = require("prompt-sync")({ sigint: true });
console.log(' =================')
console.log(' KALKULATOR PRISMA');
console.log(' =================')
const a = Number(prompt('a : alas '))
const t = Number(prompt('t : tinggi '))
let volume = (1/2 * a * t) * t  
let luas = (a * t) + (2 * (1/2 * a * t)) + (2 * (1/2 * a * t))
console.log (`  Volume : ${volume} cm3`)
console.log (`  Luas   : ${luas} cm2`)
console.log(' ====== END ======')