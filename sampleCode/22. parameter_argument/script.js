// function perkalian (satu, dua){
//     hasil = satu * dua ;

//     return hasil
// }

// var hasil = perkalian(2, 3)
// document.writeln(hasil)

// ===============================================================================================
//Cara 2
// function perkalian(a, b){
//     return a * b
// }

// var a = 3
// var b = 3
// var hasil = perkalian(a,b)
// document.writeln(hasil)

// ===============================================================================================
//Cara 3
// function perkalian(a, b){
//     return a * b
// }

// var a =parseInt(prompt('Angka 1 : '))//parseInt untuk mengubah inputan prompt jadi integer
// var b = prompt('Angka 2 : ')
// hasil = perkalian(a, b)
// document.writeln(hasil)

// ===============================================================================================
// Cara 4
// function perkalian(a, b){
//     return a * b
// }
// var a = 4
// var b = 4
// document.writeln(perkalian(a*2, b*2))

// ===============================================================================================
// Case 5
// function tambah(a, b){
//     return a + b
// }

// function kali(a, b){
//     return a * b
// }

// var hasil = kali(tambah(2,3), tambah(4,2))//artinya : kali(5, 6) => 5 * 6 = 30
// document.writeln(hasil)

// ===============================================================================================
// case 6 - argument lebih banyak dari parameter
// function argumenKelebihan(a, b){
//     return a + b
// }

// document.writeln(argumenKelebihan(20, 80, 30))//angka 30 akan diabaikan

// ===============================================================================================
// case 7 - parameter lebih banyak dari argumen (parameter lebihnya akan bernilai undefined)
// function parameterLebih(a, b, c){
//     return a * b
// }

// document.writeln(parameterLebih(2, 4))

// ===============================================================================================
//case 8 - array argument
// function arrayArgument(){
//     return arguments
// }

// arrayArgument(2,5,4,"hallo",false)//argument2 ini tetap tertampung

// ===============================================================================================
//case 9 - pseudo variable
function tambah(a, b){
    var hasil = 0
    for(i=0; i < arguments.length; i++){
        hasil += arguments[i]
    }
    return hasil
}

document.writeln(tambah(2,4,3,4))