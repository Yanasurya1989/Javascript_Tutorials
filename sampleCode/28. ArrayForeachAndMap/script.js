var angka = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// for(i=0; i<angka.length; i++){
//    console.log(angka[i]);
// }

//mengganti looping diatas dengan foreach
// angka.forEach(function(e) {
//     console.log(e)
// });

// Cara lain
// var cetak = function(e){
//     console.log(e)
// }

// angka.forEach(cetak)

//Memanggil index array dengan forEach
// nama = ['Yana','Yeni','Yani','Yayan']
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke ' + (i+1) + ': ' + e)
// });

// angka = [1,2,3,4,5,6,7,8,9,10]
// var angka2 = angka.map(function(e){//e adalah element(semua index array) dan jika map diganti dengan foreach return tidak bisa dijalankan
//     return(e * 4)
// })
// console.log(angka2.join('-'))

// angka = [3,2,4,7,5,8,6,9,2]
// console.log('array awal : ' + angka.join(' - '))
// angka.sort(); //berfungsi untuk mengurutkan angka
// console.log('setelah di sort : ' + angka.join(' - '))
// abjad = ['e','s','b','a','b']
// abjad.sort();
// console.log('hasil sort: ' + abjad)

//sort memerlukan perlakuan khusus untuk angka yang terdiri dari dua digit
angka = [4,1,3,2,7,5,6,8,10,9,13,11,12,14, 23,20,22,30,34,40,41]
console.log('sebelum sort : ' + angka.join(' - '))
angka.sort()
console.log('after sort : ' + angka.join(' - '))
angka.sort(function(a,b){
    return (a-b)
})
console.log('after sort with function: ' + angka.join(' - '))
