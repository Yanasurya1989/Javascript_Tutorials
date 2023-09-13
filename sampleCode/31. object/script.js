// membuat object kosong /onject literal
var mhs = {};
// untuk menjalankannya ketik nama objectnya di console
// mhs -> enter
// mengisi objeknya bisa dalam baris code atau di console
// syntax menambahkan object -> mhs.nama = "Yana"

// membuat object dengan 
var mhs = {
    nama: "Yana",
    umur: 34,
    ips: [3.89, 3.75, 3.38, 3.12, 3.70, 3.68, 3.58],
    alamat: {
        jalan: 'Gatsu No. 50',
        kota: "Bandung",
        provinsi: "Jawa Barat"
    }
}
document.writeln(mhs.nama)

// cara mengakesnya
// mhs.nama | mhs.umur | mhs["nama"] | mhs.ips | mhs.ips[2] | mhs.alamat.kota | mhs.alamat["provinsi"] | mhs["alamat"]["jalan"]

// membuat objek dengan function declaration
function iniBuatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
   return mhs;
}

// mengisi object yang sudah dibuat diatas
var mhs1 = iniBuatObjectMahasiswa('Yana', '18111059', 'yana@yana.com', 'Teknik Informatika'); //ketik mhs1 pada console untuk menjalankan


// Membuat objek dengan cara constructor
function Mhs(nama, nip, email, jurusan){
    // var this = {}; ini sudah dibuatkan javascriptnya
    this.nama = nama;
    this.nip = nip;
    this.email = email;
    this.jurusan = jurusan;
    // return this //ini sudah dibuatkan javascriptnya
}
// mengisi objek construktor diatas
var mhs2 = new Mhs('Nyanyang', '18111059', 'yana@yana.com', 'Teknik Informatika'); //new menjadi kunci untuk constructor