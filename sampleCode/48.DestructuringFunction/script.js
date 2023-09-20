// destructuring
function kalkulasi(a, b){
    return [a + b, a * b, a-b, a/b]
}

// const jumlah = penjumlahanPerkalian(2, 3)[0]
// const kali = penjumlahanPerkalian(2, 3)[1]
// console.log(kali)
// console.log(jumlah)

// meringkas code diatas dengan distructuring
// const [jumlah, kali] = penjumlahanPerkalian(2, 3)
// console.log(jumlah)
// console.log(kali)

const [tambah, kali, kurang, bagi, mod = 'tidak ada'] = kalkulasi(2, 3) //urutan operator harus sesuai dengan index arraynya
console.log(bagi)
console.log(kurang)
console.log(kali)
console.log(mod)
console.log(tambah)


// agar tidak dipengaruhi urutan
function notSort(a, b){
    return {
        kalikeun: a * b,
        bere: a / b,
        kalikeun: a * b,
        cokot: a - b,
    }
} 

const {bere, tamah, kalikeun, cokot} = notSort(2,3) //ini tidak usah ngurut dengan object
console.log('ga ngurut : ' + kalikeun)

// destructuring function arguments
const mhs1 = {
    nama: 'Yana',
    umur: 34,
    email: 'yana@email.com',
    nilai:{
        tugas:98,
        uts:99,
        uas:100,
    }
}

// function cetakMhs(nama, umur){
//     return `halo, nama saya ${nama}, umur ${umur} tahun.`
// }

// cara lain penulisan function cetakMhs diatas
// function cetakMhs(mhs){
//     return `halo, nama saya ${mhs.nama}, umur ${mhs.umur} tahun.`
// }

// console.log(cetakMhs(mhs1));

// function cetakMhs({nama, umur, nilai}){
//     return `halo, nama saya ${nama}, umur ${umur} tahun, nilai uas ${nilai.uas}.`
// }

// menyederhanakan pemanggilan nilai
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `halo, nama saya ${nama}, umur ${umur} tahun, nilai uas ${uas}.`
}

console.log(cetakMhs(mhs1));