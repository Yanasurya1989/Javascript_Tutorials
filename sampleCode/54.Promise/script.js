// $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: listPilem => console.log(listPilem)
// })

// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response))
//         }else {
//             console.log(xhr.responseText)
//         }
//     }
// }

// xhr.open('get', 'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// xhr.send()

// fetch('https://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(naon => naon.json())
//     .then(naon => console.log(naon))

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('ditepati')
//     } else {
//         reject('diingkari')
//     }
// })

// janji1
//     .then(Response => console.log('OK! : ' + Response))
//     .catch(Response => console.log('NOT OK! : ' + Response))

// contoh2
// let ditepati = true
// const janji2 = new Promise((resoleve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resoleve('ditepati setelah beberapa waktu')
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             resoleve('tidak ditepati setelah beberapa waktu')
//         }, 2000)
//     }
// })

// console.log('mulai')
// // console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(Response => console.log('OK! : ' + Response))
//     .catch(Response => console.log('NOT OK! : ' + Response))
// console.log('selesai')

// promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Yana Surya',
            pemeran: 'Yuyun, Mimin'
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(()=> {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }])
    }, 500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    .then(Response => {
        const [film, cuaca] = Response
        console.log(film)
        console.log(cuaca)
    })