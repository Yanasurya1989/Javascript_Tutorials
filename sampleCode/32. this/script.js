// console.log(this) //jika dibuka pada console akan menampilkan variable global(window)
// console.log(window)
// console.log(window === this) //akan menghasilkan nilai true

// setiap membuat variable di scope global sama aja dia adalah properti atau methode dari object window dan object windows sama dengan this
// var a = 10
// console.log(a)
// console.log(this.a)
// console.log(window.a)

// membuat object

// cara 1 - Menggunakan function declaration
// function halo(){
    // console.log('werod')
    // console.log(this)
// }
// this.halo()
// halo()
// window.halo()
// this pada function declaration mengembalikan object global

// ==============================================================
// cara 2 - menggunakan object literal
// var obeje = {}
// var obeje = {a:10, nama:"Yana"}
// obeje.halo = function(){
    // console.log('halowerod')
    // console.log(this)
// }
// obeje.halo()
// this pada object literal akan mengembalikan apapun yang ada pada dirinya(object yang bersangkutan)

// menggunakan constructor
function Halo(){
    // console.log('halo constr')
    console.log(this)
} 
var abj1 = new Halo()
var abj2 = new Halo()
// this pada constructor mengembalikan object yang baru dibuat