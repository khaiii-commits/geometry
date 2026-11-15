const prompt = require("prompt-sync")({ sigint: true });
console.log(' =========================')
console.log(' KALKULATOR LIMAS SEGITIGA');
console.log(' =========================')
const s = Number(prompt('s : sisi alas '))
const t = Number(prompt('t : tinggi limas '))
const luasAlas = s ** 2
const volume = (1 / 3) * luasAlas * t
const luasPermukaan = luasAlas + 4 * ((s * Math.sqrt(t ** 2 + (s / 2) ** 2)) / 2)
console.log(`  Volume : ${Number(volume).toFixed(2)} cm3`)
console.log(`  Luas    : ${Number(luasAlas).toFixed(2)} cm2`)
console.log(`  Luas permukaan : ${Number(luasPermukaan).toFixed(2)} cm2`)
console.log(' ====== END ======')