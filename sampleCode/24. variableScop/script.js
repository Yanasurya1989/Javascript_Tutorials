// Note : dari dalam bisa mengakses variable global tapi dari luar tidak bisa mengakses variable local

// var a = 20; //ini sebagai global scope/window scope(berada dipaling luar layar)

// function tampil(){
//     var b = 100; //variable ini hanya akan bisa digunakan didalam function ini saja
//     document.writeln(a)//a berada diluar functin dan bisa dipanggil dari dalam function
// }

// tampil()

// document.writeln(b) //memanggil variable b dari luar functionnya(tidak bisa)
// ilustrasi seperti kemampuan melihat dan tidaknya dari jendela dengan arah dari dalam dan dari luar ruangan

//====================================================================================================
// Case 2 - dengan menggunakan nama yang sama
// var a = "luar scope"
// var a = "bakal_nimpa_yang_atas"
// function scope(){
//     var a = 10


//     document.writeln(a) //ini a yg didalam func scope(variable local)
//     document.writeln(window.a) //ini a yg diluar func scope(variable global)
// }

// scope()

//=====================================================================================================
//conflik - nama variable yang sama tapi beda lingkup tidak akan menimpah(replace)
// var a = "luar"
// function tes(){
//     var a = "dalam"
//     document.writeln('<p>' + a + '</p>')
// }
// tes()
// document.writeln(a)


//=====================================================================================================
//Memanggil variable global didalam function - nama variable yang sama tapi beda lingkup tidak akan menimpah(replace)
// var a = "luar"
// function tes(){
//     var a = "dalam"
//     document.writeln('<p>' + window.a + '</p>')
// }
// tes()
// document.writeln(a)


//=====================================================================================================
//Case 3 - panggunaan var sebelum nama variable akan tertimpah oleh variable yang tidak menggunakan var sebelumnya
// var a = "brada di luar function"
// function tes(){
//     a = "berada di dalam function"
// }
// tes()
// document.writeln('Manggil dari luar function, yang terpanggil adalah yang : ' +a)//yang menggunakan var akan tereplace dgn yg tidak menggunakan var


//==========================================================================================================
// Case 4 - variable local yang tidak menggunakna var didepannya akan dianggap variable global sehingga dapat dipanggil dari luar functionnya

// function tes(){
//     // var a = "nah ini baru variable local"
//     a = "ini berada didalam function tapi posisinya global variable krn tidak menggunakan var" //jika ingin membuat agar variable ini hanya bisa digunakan di lokal, maka jangan lupa tambahkan var sebelum variablenya
// }

// tes()
// document.writeln('ini manggilnya dari luar function : ' + a)


//=============================================================================
//gunakan usestrict untuk menghindari variable local dianggap variable global
// "use strict"

// function tes(){
//     a = "ini didalem"
// }

// tes()
// console.log(a)


//=============================================================================
//global vs argumen
// var a = "global"
// function tes (a){
//     document.writeln('<p> manggil di local, hasilnya : ' + a + '</p>')
// }

// tes("local")
// document.writeln('<p>manggil diluar hasilnya :' + a + '</p>')


//========================================================
//yang dilocal tetap sebagai local namun tidak terpanggil
var a = "global"
function tes (a){
    document.writeln('<p> manggil di local, hasilnya : ' + a + '</p>')
}

tes(a)
document.writeln('<p>manggil diluar hasilnya :' + a + '</p>')

