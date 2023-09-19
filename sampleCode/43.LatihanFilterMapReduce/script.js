// ambil semua elemen video
// const videos = document.querySelectorAll('[data-duration]') //akan mengembalikan list dalam bentuk node dan tidak bisa dijumlahkan
const videos = Array.from(document.querySelectorAll('[data-duration]'))
// console.log(videos)


// ambil hanya yang bertuliskan 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))//ganti let krn dibawah mengganti isi dari jsLanjut
// console.log(jsLanjut)

// ambil durasi masing2 video
.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1]
})

// jumlah semua detik
.reduce((total, detik) => total + detik)

// ubah formatnya jadi jam, meni, detik
const jam = Math.floor(jsLanjut / 3600)//floor : pembulatan kebawah, ceil:pembulatan keatas, around:pembulatan ambil bilai terdekatnya
jsLanjut = jsLanjut - jam * 3600

const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60


// simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.textContent = `${jmlVideo} video.`

console.log(jsLanjut)