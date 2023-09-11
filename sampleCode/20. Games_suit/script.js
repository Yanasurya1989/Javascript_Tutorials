var tanya = true
while(tanya){

    // Menangkap pilihan user
    var p = prompt('pilih : gajah, manusia, semut')

    //Menangkap pilihan komputer

    //Membangkitkan bilangan random
    var comp = Math.random();
    // console.log(comp)
    if (comp < 0.34){
        comp = 'gajah'
    }else if(comp > 0.34 && comp < 0.67){
        comp = 'orang'
    }else{
        comp = 'semut'
    }
    console.log(comp)

    var hasil = '';
    //Menentukan rules
    if(p == comp){
        hasil = 'SERI';
    }else if (p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'MENANG'
        // }else{
        //     hasil = 'KALAH'
        // }
        // pengkondisian diatas bisa disingkat dengan menggunakan ternary seperti berikut
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';

    }else if(p == 'orang'){
        //menggunakan ternary utk kondisi
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    }else if(p == 'semut'){
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    }else{
        hasil = 'Tidak ada hasil karena kamu memasukan nama pilihan yang tidak terdaftar';
    }

    //tampilkan hasil
    alert('Kamu memilih : ' + p + '\nkomputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil); 
    tanya = confirm('main lagi?')
}

alert('Terimakasih sudah bermain')