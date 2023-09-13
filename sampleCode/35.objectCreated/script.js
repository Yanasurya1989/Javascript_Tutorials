// Cara membuat object pada javascript
// 1. Object literal - tidak efektif jika memiliki data yang banya
// let mahasiswa = {
//     nama: "Yana",
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     pendapatanHarian:parseInt(prompt('Masukan pendapatan hari ini!')),
//     totalPendapatan: function(tambahan){
//         this.pendapatanHarian = this.pendapatanHarian + tambahan;
//         console.log(`Halo, selamat...`)
//     }
// }

// let mahasiswa2 = {
//     nama: "Yana",
//     energi: 8,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// untuk menjalankan, pada halaman console, ketik mahasiswa, kemudian ketik mahasiswa.makan(1), kemudian ketik mahasiswa.

// cara 2 - function deklaration (bisa membuat object yang bisa digunakan untuk beberapa instansiasi(pengisian object))
const methodMahasiswa = {
    makan : function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    },

    main : function (jam){ //sama dengan diganti titikdua krn object
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`)
    },

    tidur : function(jam){
        this.energi += jam + 2;
        console.log(`Halo ${this.nama}, selamat tidur`)
    }
}

function Mahasiswa(nama, energi){ //ini proses pembuatan object
    // let mahasiswa = {}; ini ganti dengan object.create
    let mahasiswa = Object.create(methodMahasiswa); //untuk mengenalkan method yang telah dibuat agar bisa tetap dipanggil tanpa dibuatkan parameter
    mahasiswa.nama = nama;
    mahasiswa.energi = energi; 
    // bagian dari sini kebawah dihilangkan dan ganti dengan object.create
    // mahasiswa.makan = methodMahasiswa.makan;//sekarang makan diambil dari object lain, bukan parameter
    // mahasiswa.main = methodMahasiswa.main;

    return mahasiswa;
}

let yana = Mahasiswa('Yana', 100); //ini proses instansiasi 
let yeni = Mahasiswa('Yeni', 20); //penambahan instansiasi bisa langsung tana harus membuat object lagi


// cara 3 - constructor function
// keyword new
// function Mahasiswa(nama, energi){ //ini proses pembuatan object
//     // let mahasiswa = {}; //ini ga perlu klo dalam constructor function
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`)
//     }

//     // return mahasiswa; //ini tidak perlu dalam constructor function
// }

// // let yana = new Mahasiswa('Yana', 10)