// contoh promise
// const coba = new Promise(resolveSuccess => resolveSuccess('success'))
// console.log(coba) 

// promisnya ga langsung resolve tapi nunggu selama 2 detik supaya terlihat asyncronusnya
// step 1
// const coba = new Promise(resolveSuccess => {resolveSuccess('success')})
// console.log(coba) 

// step 2
// const coba = new Promise(resolveSuccess =>{
//     setTimeout(() => {

//     })
//     resolveSuccess('selesai')
// })
// console.log(coba)

// step 3
// const coba = new Promise(resolveSuccess =>{
//     setTimeout(() => {
        
//     })
//     resolveSuccess('selesai')
// }, 2000)
// coba.then(()=>console.log(coba))

// step 4
function cobaPromise(){
    return new Promise(resolveSuccess =>{
        setTimeout(() => {
            resolveSuccess('selesai')            
        }, 2000)
    })
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba))

// function cobaAsync(){
//     const coba = cobaPromise()
//     console.log(coba);
// }

// cobaAsync(); //coba jalankan hasilnya masih promis, untuk bisa mencetak 'selesai' tambahkan async

async function cobaAsync(){ //deskripsikan disini
    const coba = await cobaPromise() //ini yang dijalankan yang merupakan asyncronus
    console.log(coba);
}

cobaAsync();