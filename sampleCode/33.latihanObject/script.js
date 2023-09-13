// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas){ //simpan disini properti2(vriable dalam object) yang dibutuhkan pada saat intansiasi
    this.sopir = sopir; //perhatikan fungsi this untuk setiap cara dalam pembuatan object(pada kasus ini dengan constructor function akan mengembalikan dirinya(yang ada dalam objectnya))
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if (this.penumpang.length === 0){
            alert('angkot masih kosong');
            return false;
        }

        for(i=0; i<this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

// proses instansiasi
var angkot1 = new Angkot('Maman', ['Cicaheum', 'Cibiru'], [], 0);//untuk melihatnya, buka dalam console dengan mengetikan angkot1

var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0);

// cara menjalankan : 
// buka inspec element dan pada bagian console :
// angkot1.penumpangNaik('namaPenumpang')
// angkot1.penumpangTurun('namaPenumpang', 2000)
// angkot1.kas
