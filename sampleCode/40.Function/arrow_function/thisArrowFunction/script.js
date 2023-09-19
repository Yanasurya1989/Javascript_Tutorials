// constructor function
// const Mahasiswa = function(){ //Mahasiswa adalah object dan harus ditulis dengan Proppercase
//     this.Nama = "Yana" //this mengacu pada Mahasiswa
//     this.umur = 34 //this yang ditulis dalam sebuah object maka mengacu pada object itu
//     this.sayHalo = function(){ //untuk menjalankannya ketik yana.sayHalo() pada console
//         console.log(`Halo nama saya ${this.Nama} berusia ${this.umur}`) //jika tidak menggunakan this pada setiap pemanggilan variable maka tidak akan bisa dijalankan
//     }
// }

// const yana = new Mahasiswa()//mencetak isi dari object

// Mengubah kode diatas kedalam arrow funcion
// const Mahasiswa = function(){ //ini tidak bisa begitu saja diubah
//     this.Nama = "Yana" 
//     this.umur = 34 
//     this.sayHalo = () => { //klo ini bisa
//         console.log(`Halo nama saya ${this.Nama} berusia ${this.umur}`) 
//     }
// }
// const yana = new Mahasiswa()


// code seperti diatas tidak akan bisa dijalankan jika menggunakan object literal
// const Mahasiswa = { 
//     Nama: "Yana", 
//     umur: 34,
//     sayHalo: () => { //jalankan dengan ketik Mahasiswa.sayHalo() maka yang tmapil adalah window, bukan objectkrn arrow function tidak meiliki konsep this
//     // sayHalo: function () { //jika ini diganti ke arrow function akan menghasilkan nilai undefined
//         // console.log(`Halo nama saya ${this.Nama} berusia ${this.umur}`) 

//         console.log(this)//untuk memastikan this ini mengacu kemana, jalankan dengan ketik Mahasiswa.sayHalo()
//     }
// }
// const yana = new Mahasiswa()//ini tidak diperlukan jika dalam object literal
// menjalankannya : Mahasiswa.sayHalo()
// jika menggunakan function akan mencari ke leksikal scopenya

// contoh lain fungsi this
// pada constructor function
// const Mahasiswa = function(){
//         this.Nama = "Yana" 
//         this.umur = 34
//         this.sayHalo = function(){ 
//             console.log(`Halo nama saya ${this.Nama} berusia ${this.umur}`) 
//         }

//         // kode ini untuk cek fungsi this
//         setInterval(function () {
//             console.log(this.umur++)//ini akan menhasilkan NaN
//             console.log(this)//karna ketika menjalankan ini yang dikembalikan adalah window(scope thisnya akan mencari di luar jika diluar tidak ada akan mencari di window)
//             console.log(this.umur)//umur menjadi undefined
//         }, 500)
//     }
    
//     const yana = new Mahasiswa()

//ganti kode diatas ke arrow function
const Mahasiswa = function(){
    this.Nama = "Yana" 
    this.umur = 34
    this.sayHalo = function(){ 
        console.log(`Halo nama saya ${this.Nama} berusia ${this.umur}`) 
    }

    // kode ini untuk cek fungsi this
    setInterval( () => {
        // console.log(this.umur++)
        console.log(this.umur++)//dgn arrow function ini menjadi ke object Mahasiswa
        // console.log(this.umur)
    }, 900)
}

const yana = new Mahasiswa()