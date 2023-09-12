// proses refactoring
// function jumlahDuaKubus(a, b){
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB
//     return total
// }

// document.writeln(jumlahDuaKubus(2,3))


//===========================================
// hilangkan variable volumeA
// function jumlahDuaKubus(a, b){
//     var volumeB;
//     var total;

//     volumeB = b * b * b;
//     total = a * a * a; + volumeB
//     return total
// }

// document.writeln(jumlahDuaKubus(2,3))


//=============================================
//hilangkan volumeB
// function jumlahDuaKubus(a, b){
//     var total;

//     total = a * a * a; + b * b * b
//     return total
// }

// document.writeln(jumlahDuaKubus(2,3))


//================================================
//hilangkan variable total
function jumlahDuaKubus(a, b){
    
    return a * a * a + b * b * b
}

document.writeln(jumlahDuaKubus(2,3))