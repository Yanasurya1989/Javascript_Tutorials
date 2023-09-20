// for..of
const mhs = ['Yana', 'Surya', 'Yayan']

// for(let i = 0; i < mhs.length; i++){ //menggunakan let karena i akan terus berubah setiap looping
//     console.log(mhs[i])
// }

// foreach
// mhs.forEach(m => console.log(m))

// for of
// for(const m of mhs){
//     console.log(m)
// }

// looping string
// const nama = 'Yana'
// for (const n of nama){
//     console.log(n)
// }


// looping string dengan forEach
// nama.forEach(n => console.log(n))//tidak bisa digunakan

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mehasiswa ke-${i + 1}`)
// })

// menggunakan for..of
// for (const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }
// console.log(liNama);

// nodeList
// const liNama = document.querySelectorAll('.nama')

// liNama.forEach(n => console.log(n.textContent))
// for(n of liNama){
//     console.log(n.innerHTML)
// }

// arguments
// function jumlahAngka(){
//     let jumlah = 0
//     for (a of arguments){
//         jumlah += a
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5));

// for..in
const mhs2 = {
    nama: 'Yana',
    umur: 23,
    email: 'yana@yan.com'
}

// for (m of mhs2) //akan error krn m dianggap tidak iterable
//note : looping property dari object gunakan for in
//note : mengulang isi array dan iterable object lain gunakan for of
for (m in mhs2)
{
    // console.log(m) mengembalikan property object
    console.log(mhs2[m]) //mengembalikan value property
}