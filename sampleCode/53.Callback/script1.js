// callback
// synchronous callback
function halo(nama){
    alert(`halo ${nama}`)
}

function tampilkanPesan(iniParam){
    const nama = prompt('Masukan nama !')
    iniParam(nama)
}

// tampilkanPesan(halo())//akan langsung menampilkan alert(menjalankan function halo)
tampilkanPesan(halo)