const prompt = require("prompt-sync")({ sigint: true });
console.log(' ========================')
console.log(' KALKULATOR BOLA SETENGAH');
console.log(' ========================')
let r = Number(prompt('r : jari-jari '))
let volume = (2 / 3) * Math.PI * r ** 3
let luas = 2 * Math.PI * r ** 2
console.log('Volume bola setengah:', volume.toFixed(1), 'cm3')
console.log('Luas bola setengah:', luas.toFixed(1), 'cm2')
console.log(' ====== <FINISH> ======')