// const name = 'Yana'
// const umur = 34

// function coba(apapun, ...apapun2){
//     // return apapun2 //akan mengembalikan semua ekspression dan tidak ditentukan jumlahnya
//     // return name
//     // return apapun //menjadikan string sebagai array dan dipisahkan expression
    
//     // let result = ''
//     // apapun.forEach((setringnya, ekspressionnya) => {
//     //     result += `${setringnya}${apapun2[ekspressionnya] || ''}` //|| diikuti '' untuk menghilangkan undefined krn ekspression akan selalu menampilkan satu value setelahnya sehingga jika tidak ada value akan diisi undefined dan untuk menghilangkannya menggunakan string kosong
//     // })

//     // return result

//     // meringkas code diatas
//     return apapun.reduce((resulet, sitring, indeks) => `${resulet}${sitring}${apapun2[indeks] || ''}`)
// }

// const str = coba`Halo nama saya ${name} berusia ${umur} tahun `
// console.log(str)


// memberi tanda(highlight) pada ekspression
const name = 'Yana'
const umur = 34
const emil = 'yana@emil.com' //untuk menguji otomatis bertambah tanpa menyentuh functionnya lagi

function coba(apapun, ...apapun2){
    return apapun.reduce((resulet, sitring, indeks) => `${resulet}${sitring}<span class="hael">${apapun2[indeks] || ''}</span>`, '')
}

const str = coba`Halo nama saya ${name} berusia ${umur} tahun emil saya ${emil}`
// console.log(str)
document.body.innerHTML = str