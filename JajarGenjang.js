const prompt = require('prompt-sync')({ sigint: true });
console.log(' ========================')
console.log(' KALKULATOR JAJAR GENJANG');
console.log(' ========================')
let a = Number(prompt('a : alas '))
let t = Number(prompt('t : tinggi '))
let luas = a * t
let keliling = 2 * (a + t)
console.log (`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)
console.log("=+=+=+=<FINISH>=+=+=+") 