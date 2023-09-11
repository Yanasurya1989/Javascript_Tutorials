var s = '';

for (var i=0; i <= 5; i++){
    s += '*';
    //agar bintangnya tercetak secara vertical
    s += '\n';
}
console.log(s)

// ============================================================================================================
//menampilkan bintang sebanyak 5 baris dan masing2 baris 5 bintang
var pagar = ''
for(j=0; j<=7; j++){ //jumlah baris ada 7
    for(k=0; k<=10; k++){ //jumlah pagar tiap baris ada 10
        pagar += '#';
    }
    pagar += '\n';
}
console.log(pagar)

//=============================================================================================================
//menampilkan bintang segitiga siku
var siku = '';
for (baris=0; baris <= 5; baris++){ //jumlah baris ada 5
    for(bintangnya=0; bintangnya <= baris; bintangnya++){//jumlah bintang sesuai dengan posisi baris keberapa
        siku += '*';        
    }
    siku += '\n'

}
console.log(siku)
