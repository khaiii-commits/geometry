const prompt = require("prompt-sync")({ sigint: true });
console.log(' =================')
console.log(' KALKULATOR TABUNG');
console.log(' =================')
const r = Number(prompt('r : jari-jari '))
const t = Number(prompt('t : tinggi '))
let luas = 2 * Math.PI * r * (r + t)
let volume = Math.PI * r * r * t
console.log (`  Luas     : ${luas.toFixed(2)} cm2
  Volume   : ${volume.toFixed(2)} cm3`)
console.log(' ====== <FINISH> ======')