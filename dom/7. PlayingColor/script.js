const tUbahWarna = document.getElementById('tUbahWarna')
// const body = document.getElementsByTagName('body')[0]//krn getElementByTagName mengembalikan html collection sehingga berisi array karenanya harus diberi index keberapanya tapi khusus untuk body bisa seperti ini

// document.body

tUbahWarna.onclick = function(){
    // alert('ok')

    // document.body.style.backgroundColor = 'lightblue'

    // document.body.setAttribute('class', 'biru-muda')

    document.body.classList.toggle('biru-muda') //toggle: on-off artinya adakan dan hilangkan class, jika class ada maka hilangkan jika tidak ada maka adakan
}


const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTombol)
tAcakWarna.setAttribute('type', 'button')//membuat komponen baru
tUbahWarna.after(tAcakWarna) //menambahkan button baru setelah button yang dibuat oleh html

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1) //mengambil nilai random antara 1 - 255 dan dibulatkan dengan fungsi round
    // console.log(r)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')' //untuk ambil variable harus menggunakan concatinasi (menggabungkan huruf dan tanda plus)
})


const sMerah = document.querySelector('input[name=sMerah]')//menangkap tag input
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function(){ //ganti methode change menjadi input agar warna berubah secara realtime
    // alert('ok')
    // console.log(sMerah.value)
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgba('+ r +', '+ g +', '+ b +')'
})

sHijau.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgba('+ r +', '+ g +', '+ b +')'
})

sBiru.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgba('+ r +', '+ g +', '+ b +')'
})

document.body.addEventListener('mousemove', function(){
    const posisiX = Math.round((event.clientX / window.innerWidth) * 255)
    const posisiY = Math.round((event.clientY / window.innerHeight) * 255)

    document.body.style.backgroundColor = 'rgba('+ posisiX +', '+ posisiY +', 100)'
})