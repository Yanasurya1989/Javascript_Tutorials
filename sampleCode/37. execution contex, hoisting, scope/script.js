// console.log(nama) //akan terjadi eror

// tapi jika seperti ini akan terjadi undefined
// console.log(nama) //eror terjadi krn log lebih dulu dari deklarasi
// var nama = 'Yana'

// console.log(hallo) //kode ini akan mengembalikan function persis seperti code 
// console.log(hallo()) //kode ini akan menjalankan function yaitu console dalam functionnya, dengan menambahkan kurung berarti mengeksekusi program
// var nama = 'Yana'
// var umur = 34

// console.log(hallo())

// function hallo(){
    // return `Halo nama saya ${nama}, umur saya ${umur}`//ini akan mengembalikan sesuai isi variable
// }

// function hallo(){
    // console.log(`Halo nama saya ${nama}, umur saya ${umur}`)//ini akan mengembalikan nilai undefined
    
// }


// var username = '@YanaSurya'
// function cetakUrl(){
//     var url = 'http://instagram.com/'
//     return url + username
// }

// console.log(cetakUrl())


// function a(){
//     console.log('a')
//     function b(){
//         console.log('b')

//         function c(){
//             console.log('c')
//         }

//         c ()
//     }
//     b()
// }
// a ()


// scope - pada kasus ini akan mendahulukan variable local yang dikirim dari argumen
// var username = '@YanaSurya'
// function cetakUrl(username){ //dengan menambahkan parameter dan argumen pada consol maka yang akan dicetak adalah variable local melalui argumen di parameter
    // var url = 'http://instagram.com/'
    // return url + username //urutan yang diambil : variable lokal, parameter, baru variable global
// }

// console.log(cetakUrl('@sipalagi'))

// contoh lain - argumen yang tidak dipanggil tersimpan dalam variable argumen, ceknya dari consol
// var username = '@YanaSurya'
// function cetakUrl(){
//     console.log(arguments);
//     var url = 'http://instagram.com/'
//     return url + username
// }

// console.log(cetakUrl('@siapa_satu', '@siapa_dua'))

// contoh lain - menangkap argumen
// var username = '@YanaSurya'
// function cetakUrl(){
//     console.log([0],[1])
//     var url = 'http://instagram.com/'
//     return url + username
// }

// console.log(cetakUrl('siapa_satu', 'siapa dua'))

function satu(){
    var nama = 'Yana'
    console.log(nama)
}

function dua(){
    console.log(nama)
}

// urutan pengembalian nilai
console.log(nama) 
var nama = 'Mimin' //ini dengan consol diatas ini urutan 1 dikembalikan dg nilai undefined
satu() //urutan kedua mengembalikan string berupa 'Yana'
dua('Mumun') //argumentnya tidak dikembalikan karena tidak ditangkap di parameter function dua, function dua hanya mengembalikan nama dari variable global yaitu Mimin(kode kedua diatas ini)
console.log(nama)//ini mengembalikan Mimin sebagai var global

// Hoisting : menggeret variable yang terletak dibawah consol sehingga mengembalikan nilai undefined
