  // console.log('mulai')
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++){
//         let date = new Date()
//     }
//     console.log(m.nama)
// });
// console.log('selesai')

function getDataMahasiswa(url, success, error){
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response)
            }else if(xhr.status === 404){
                error()
            }
        }
    }

    xhr.open('get', url)
    xhr.send()
}

// function success(){

// }

// function error(){

// }

console.log('mulai')
getDataMahasiswa('mahasiswa.json', result => { //asynchronous, dikerjakan terakhir, jadi yang di cetak mulai san selesai dulu, baru arraynya
    // console.log(JSON.parse(result));
    // console.log(result)

    const mhs = JSON.parse(result)
    mhs.forEach(m => console.log(m.nama)) 
}, () => {
})
console.log('selesai')