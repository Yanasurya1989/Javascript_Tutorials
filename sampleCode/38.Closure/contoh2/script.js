// contoh lain penggunaan closure

function init (){
    // let nama = 'Yana'//utk customize nama, ganti dengan parameter
    return function tampilNama(nama){
        console.log(nama)
    }
    // return tampilNama; //menampilkan tanpa menjalankan
}
let panggilNama = init()
panggilNama('Yani')
panggilNama('mimin')