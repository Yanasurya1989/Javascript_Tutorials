var i = 10
console.log(i)

b = 100
console.log(b)


console.log(a) //ini HOisting
var a = 1000
// contoh hoisting : pengangkat bendera 
// code hoisting diatas seolah seperti ini

var a //makanya bernilai undefined karna variable a sudah terdefinisi hanya tidak memiliki valu
console.log(a) //jadi si var a diangkat (seperti bendera digeret) dengan nilai defaultnya undefined
a = 1000

console.log('ini contoh lain : ')
for (var a=0; a < 10; a++){
    console.log(a)
}

console.log('ini contoh lain : ')
for (var a=0; a < 10; a++){
    console.log(a)
}
console.log(a)//ini masih bisa diakses krn dlm js menggunakan fuction scope
