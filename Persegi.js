const prompt = require ('prompt-sync') ({sigint : true});
console.log(' ==================')
console.log(' KALKULATOR PERSEGI');
console.log(' ==================')
let s = Number(prompt('sisi : '))
let luas = s * s
let keliling = 4 *s
console.log (`
Luas     : ${Number(luas).toFixed(2)} cm2
Keliling : ${Number(keliling).toFixed(2)} cm`)
console.log(' ====== <FINISH> ======')