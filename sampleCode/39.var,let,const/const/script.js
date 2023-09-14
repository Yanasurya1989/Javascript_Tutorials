// const digunakan jika dipastikan tidak akan ada perubahan

// console.log(a)
// const a = 10//ini pun sama dengan let, tidak seperti var yang mengembalikan niai berupa undefined, jika ini dijalankan tidak akan mengembalikan nilai undefined tapi akan eror

const a = 10;
// a = 20; //nonaktifkan ini agar tidak eror
console.log(a)

const mhs = {
    nama : 'Yana',
    umur: 34,
}

mhs.pekerjaan = 'Programmer'//dengan cost bisa menambahkan isi object
mhs.umur = 33 //juga mengganti nilainya

// mhs = {
//     jurusan: 'IT' //tp klo ini ga bisa, tidak bisa mengganti objecnya hanya bisa isinya
// }

// contoh lain dalam array

const i = [1,2,3]

i.push(4) //ini bisa krn hanya menambahkan isi

// i = [1,2,3,4] //tp jika ini tidak bisa krn dianggap mengganti arraynya padahal maksudnya sama menambahkan angka 4 pada arraynya

console.log(i)

console.log(mhs)