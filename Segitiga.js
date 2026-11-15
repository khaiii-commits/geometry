const prompt = require ('prompt-sync') ({sigint : true});
console.log(' ===================')
console.log(' KALKULATOR SEGITIGA');
console.log(' ===================')
let a = Number(prompt('a : alas '))
let t = Number(prompt('t : tinggi '))
let luas = 0.5 * a * t
let s1 = Number(prompt('s1 : sisi 1 '))
console.log(`  Luas     : ${luas} cm2
  Keliling : ${a + t + s1} cm`)
console.log(' ====== <FINISH> ======')