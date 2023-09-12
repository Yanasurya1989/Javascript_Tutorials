// contoh function deklaration
// function name(nama){
//     document.writeln(nama)
// }
// name("Yana")

// bisa juga seperti ini untuk func deklaration
// tampilNama("Nyanyang")
// function tampilNama(name){
//     document.writeln(name)
// }


// ini contoh function expression, 
// disimpan dalam variable, kemudian nama function hilangkan, kemudian untuk function expression tidak bisa dibalik pembarian argumentnya
var tampilNama = function (nama){
                document.writeln(nama)
}
                tampilNama("Yana")