// var number = prompt('Masukan angka !')
// if(number % 2 == 0){
//     alert('Angka ' + number + ' merupakan angka genap')
// }else if(number % 2 == 1){
//     alert('Angka ' + number + ' merupakan angka ganjil')
// }else{
//     alert('Character ' + number + ' bukan merupakan angka')
// }


// var noAngkot = 1
// var jmlAngkot = 10
// var angkotBeroperasi = 6

// for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
//     if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur')
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
//     }
// }


// var number = prompt('Masukan angka !')
// if(number === '1'){ //Note : (===) harus sama versis berikut jenisnya, dan hasil input dari promp adalah berbentuk sring, maka jika menggunakan sama dengan tiga kali, angka satu harus diapit kutip
// if(number === 1){
//     alert('anda memasukan angka ' + number)
// }else {
//     alert('yang anda masukan adalah character')
// }


// agar inputan dari promp berjenis angka (bukan char)
var number = parseInt(prompt('Masukan angka !'))
if(number === 1){
    alert('yang anda masukan adalah angka ' + number)
}else{
    alert('yang anda masukan bukan angka')
}