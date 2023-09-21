// callback
// synchronous callback = sebuah function yang parameternya bentuk function juga

function tampilkanPesan(iniParam){
    const nama = prompt('Masukan nama !')
    iniParam(nama)
}

tampilkanPesan((nama) => alert(`halo ${nama}`))

// tampilkanPesan((nama) => {
//     alert(`halo ${nama}`)
// })