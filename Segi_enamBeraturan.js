const prompt = require("prompt-sync")({ sigint: true });
console.log(' ==============================')
console.log(' KALKULATOR SEGI ENAM BERATURAN');
console.log(' ==============================')
const s = Number(prompt('s : panjang sisi '))
const luas = (3 * Math.sqrt(3) * s * s) / 2
const keliling = 6 * s
console.log('luas segi : ' + Number(luas).toFixed(2))
console.log('keliling segi : ' + keliling)
console.log(' ====== <FINISH> ======')