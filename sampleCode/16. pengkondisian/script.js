// var angka = prompt('Masukan angka !')
// if(angka % 2 == 0){
//     alert('Angka ' + angka + ' adalah bilangan genap')
// }else{
//     alert('Angka ' + angka + ' adalah bilangan ganjil')
// }


var noAngkot = 1
var angkotBeroperasi = 6
jmlAngkot = 10

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkon No. ' + noAngkot + ' beroperasi dengan baik')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
    }
}