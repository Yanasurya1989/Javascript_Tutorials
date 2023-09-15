let panggilNama = (nama) => { //bentuk penyederhanaan dari expression function 
    console.log('hallo ' + nama)
}
panggilNama('Yana Surya')

// penyederhanaan
const tampilNama = (nama) => {return `hallo ${nama} dua`}
tampilNama('Yana')

const upilNama = (nama)=>{console.log('aya ' + nama)}
upilNama('Naon')


// parameter labih dari satu
const parameterLebih = (nama, waktu) => {
    return `Selamat ${waktu} ${nama}`
}
console.log(parameterLebih('Yana Surya', 'Pagi'))


// jika parameter hanya satu maka boleh tidak menggunakan tanda kurung
const noKurung = disiniKurung => {console.log('ini : ' + disiniKurung)}
noKurung('Parameter ga dikurung')


// boleh ga pake return dan kurung kurawal - implisit return
const noReturn = disiniKurung => console.log('ini : ' + disiniKurung)
noReturn('ga pake return dan kurung kurawal')

// boleh ga pake parameter dan return
const tanpaParam = () => `hallo werod`;
console.log(tanpaParam())


// contoh lain - Menghitung character
let mahasiswa = ['Yana Surya', 'Aa', 'Adi', 'Mimi', 'Nanda', 'Nandan', 'Nandang']
let hitungHuruf = mahasiswa.map(function(nama){
    return nama.length
})

console.log(hitungHuruf)


// menghilangkan kurung parameter dan return serta kurung kurawal
// kurung di nama sebelum arrow function
// kurung kurawal setelah arrow function
// return setelah kurung kurawal
let hitungLagi = mahasiswa.map(nama => nama.length)
console.log(hitungLagi)

// mau mengembaikan dalam bentuk object (bukan lagi array)
// let hitungJumlahHuruf = mahasiswa.map(nama => {}) //harusnya begini klo mau membuat object, jika seperti itu dianggapnya akan melakukan return, maka untuk mengatasinya agar tetap dianggap sebagai object adalah dengan membuat kurung kurawal berada didalam kurung biasa
let hitungJumlahCharObject = mahasiswa.map(nama => ({
    nama: nama,
    jmlHurufe: nama.length
}))

console.log(hitungJumlahCharObject)
console.table(hitungJumlahCharObject) //menampilkan array dalam bentuk table

// jika nama field sama dengan nama parameter maka boleh tidak usah ditulis
let hitungNotWriteParam = mahasiswa.map(nama => ({
    nama,
    jmlHurufe: nama.length,
    apa: 'Naon'
}))

console.table(hitungNotWriteParam)