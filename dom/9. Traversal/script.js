// const close = document.querySelector('.close')
// const card = document.querySelector('.card')

// close.addEventListener('click', function(){
//     card.style.display = 'none'
// })

// DOM Traversal
const close = document.querySelectorAll('.close')
// const card = document.querySelectorAll('.card')
// console.log(close)

// for (let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         // card[i].style.display = 'none'//cara ini tidak direkomendasikan
    
//         // close[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }


// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.dsiplay = 'none'
//     })
// })

const nama = document.querySelector('.nama')
// console.log(nama)
// console.log(nama.parentElement)// mengambil parent dari class nama
// console.log(nama.parentNode) //mengambil parent dari kelas nama
// console.log(nama.parentElement.parentElement) //mengambil grand parent dari kelas nama
console.log(nama.nextSibling) //mengambil element saudaranya(satu parent)
console.log(nama.nextElementSibling) //ambil element saudaranya dengan mengabaikan enter
console.log(nama.previousElementSibling) //ambil element saudaranya dengan mengabaikan enter