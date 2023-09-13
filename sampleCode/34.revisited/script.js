// Cara membuat object pada javascript
// 1. Object literal
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

// function Mahasiswa(nama, energi){ //ini proses pembuatan object
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`)
//     }

//     return mahasiswa;
// }

// let yana = Mahasiswa('Yana', 100); //ini proses instansiasi 
// let yeni = Mahasiswa('Yeni', 20); //penambahan instansiasi bisa langsung tana harus membuat object lagi


// cara 3 - constructor function
// keyword new
function Mahasiswa(nama, energi){ //ini proses pembuatan object
    // let mahasiswa = {}; //ini ga perlu klo dalam constructor function
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`)
    }

    // return mahasiswa; //ini tidak perlu dalam constructor function
}

let yana = new Mahasiswa('Yana', 10)