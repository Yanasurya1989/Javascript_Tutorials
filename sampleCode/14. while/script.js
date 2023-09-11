// Basic syntax
// tapi akan menghasilkan infinit loop (perulangan yang tidak ada akhirnya)
// while(true){
//     console.log('hallo word')
// }

// var ulang = true;

// menghentikan looping dengan confirm
// while(ulang){
//     console.log('hallo word');
//     ulang = confirm('looping lagi ?');
// }

// menghantikan looping dengan program
// var nilaiAwal = 1
// while(nilaiAwal <= 5) //nilaiAwal : kondisi terminasi
// {
//     console.log('hallo word')//aksi
//     nilaiAwal++ //increment(penambahan)/decrement (pengurangan)
// }

//customize looping
var nilaiAwal = 1;
while(nilaiAwal <= 10){
    console.log('hallo word ' + nilaiAwal + 'x');
    nilaiAwal++;
}