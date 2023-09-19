// template literals / template string
const nama = 'Yana'
const usia = 34

console.log(`hasil back tick : Halo nama saya ${nama} usia ${usia} tahun`)

console.log('Halo, nama saya '+nama+' usia '+usia+' tahun')

// Embedded Expressions
console.log(`${1 + 1}`)
// console.log(`${alert('halo')}`)
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)

 
// HTML Fragments
const mhs = {
    nama: 'Yana',
    umur: 34,
    nim:'18111059',
    emai: 'yanasurya1989@gmail.com'
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`

console.log(el)