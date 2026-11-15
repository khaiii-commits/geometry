const prompt = require("prompt-sync")({ sigint: true });
console.log(' ===========================')
console.log(' KALKULATOR LIMAS SEGI EMPAT');
console.log(' ===========================')
const s = Number(prompt('s : panjang sisi alas '))
const t = Number(prompt('t : tinggi limas ')) 
const sn = Number(prompt('sn : tinggi sisi tegak '))
let volume = 1 / 3 * (s * s) * t
let luas_permukaan = s * s + (4 * 1/2 *s * sn)
console.log(`Volume : ${Number(volume).toFixed(2)} cm3`)
console.log(`Luas permukaan : ${Number(luas_permukaan).toFixed(2)} cm2`)
console.log(' ====== <FINISH> ======')