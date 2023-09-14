// contoh function expression 
var x = function(){

}

// contoh self invoking anonymous function
(function(){
    for( var a=0; a < 10; a++){
        console.log(a)
    }
}())

console.log(a) //ini tidak bisa memanggil a krn sudah blocked scop bukan lagi function scope