const prompt = require('prompt-sync')({ sigint: true })
console.log(' ====================')
console.log(' KALKULATOR LINGKARAN');
console.log(' ==================')
let r = Number(prompt('jari-jari : '))
let luas = Math.PI * r * r
let keliling = 2 * Math.PI * r
console.log (`
Luas     : ${luas.toFixed(2)} cm2
Keliling : ${keliling.toFixed(2)} cm`)
console.log(' ====== END ======')