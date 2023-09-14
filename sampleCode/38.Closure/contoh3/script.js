function ucapanSelamat(waktu){
    return function(nama){
        console.log(`Halo ${nama} dan selamat ${waktu}`)
    }
}

let selamatPagi = ucapanSelamat('pagi')
let selamatMalam = ucapanSelamat('Malam')
let selamatSiang = ucapanSelamat('Siang')

// selamatPagi('Yana')
console.dir(selamatMalam('Yana'))
// console.dir(selamatMalam)