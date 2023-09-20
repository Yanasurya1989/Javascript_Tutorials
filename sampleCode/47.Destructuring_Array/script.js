// const perkenalan = ['Halo', 'nama', 'saya', 'Yana Surya'];

// const [salam, satu, dua, nama] = perkenalan

// const [salam, , , nama] = perkenalan
// console.log(salam)
// console.log(nama)

// swaping items / menukar
// let a = 1
// let b = 2
// console.log(a)
// console.log(b)

// [a, b] = [b, a] //menukar value
// console.log(a)
// console.log(b)

// return value pada function
// function coba (){
//     return ['yana', 2]
// }

// const [a, b] = coba()
// console.log(a)

// rest parameter
// const [a, ...penampungParameter] = [1, 'yana', true, 3, 4, 5]
// console.log(a)
// console.log(penampungParameter)

// distructuring objek
// const mhs = {
//     nama: "Yana",
//     umur: 34
// }

// const {nama, umur} = mhs
// console.log(nama)

// const {a, b} = mhs
// console.log(a) //tidak bisa krn harus sesuai dengan objeknya


// Mempersimple code diatas
// ({nama, umur} = {nama: "Yana", umur: 34})

// console.log(nama)


// assign ke variable baru
// const mhs = {
//     nama: 'Yana',
//     umur: 34
// }

// const {nama: n, umur: u} = mhs
// console.log(n) //bukan lagi ke properti object
// console.log(nama) //dan ini tidak bisa diakses lagi


// memberikan default value
// const mhs = {
//     nama: 'Yana',
//     umur: 34
// }

// const {nama, umur, email = 'emaildefault@email.com'} = mhs
// console.log(email)


// Memberi nilai default + assign ke variable baru
// const mhs = {
//     nama: 'Yana',
//     umur: 34
// }

// const {nama: n, umur: u, email:e = 'emaildefault@email.com'} = mhs
// console.log(e)

// rest parameter
// const mhs = {
//     nama: 'Yana',
//     umur: 34,
//     email:'emaildefault@email.com'
// }

// const {nama, ...tampungan} = mhs
// console.log(tampungan)

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
        id: 123,
        nama: 'Yana',
        umur: 34,
        email:e = 'emaildefault@email.com'
    }
    
    function getIdMhs ({ id, nama }){
        // return id
        return nama
    }
    console.log(getIdMhs(mhs))