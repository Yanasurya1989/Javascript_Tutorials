var angka = ['before filter: ' + 3,5,4,7,6,8,10,1,2]
// console.log(angka.join(' - '))
// var angka2 = angka.filter(function(elemenArraynya){
//     // return elemenArraynya == 5
//     // return elemenArraynya == 9
//     return elemenArraynya > 4
// })

// console.log('after filter : ' + angka2)//dengan filter, angka yang diminta dikembalikan dalam bentuk array, sehingga jika angka yang diminta tidak terdapat dalam array akan mengembalikan array kosong
// console.log(angka2)

//find
var angkaFind = angka.find(function(elemenArraynya){
    return elemenArraynya > 5
})
console.log(angkaFind)//jangan menggunakan join karna join akan mengembalikan angka berupa array sedangkan find hanya mengembalikan satu index sehingga akan eror jika menggunakan join.