const prompt = require('prompt-sync')({ sigint: true });
console.log(' ================')
console.log(' KALKULATOR BOLA');
console.log(' ================')
const r = Number(prompt( 'jari_jari :'))
let volume = 4/3 *Math.PI * r * r * r
let luas = 4 * Math.PI * r * r
console.log(`volume : ${volume.toFixed(2)} cm3`);
  console.log(`luas   : ${luas.toFixed(2)} cm2`);
console.log('=========END===========')