// agar a tidak bisa diakses diluar scopenya

function tes(){
    for (var a=0; a < 10; a++){
        console.log(a)
    }   
}

tes()//code ini berfungsi agar fungsi yang dibuat diatas bisa direturn ke layar
console.log(a)//sekarang a tidak bisa diakses dari sini

// function scope : tidak bisa mengakses variable dari luar
// block scope : bisa mengakses variable dalam suatu fungsi dari luar funtionnya