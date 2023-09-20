// spread operator
// memecah iterables menjadi single element

// const mhs = ['Yana', 'Yani', 'Yayan']
// const dosen = ['Nana', 'Nini', 'Nunu']
// const orang = [...mhs, ...dosen] //menggabungkan dua buah index array menjadi satu
// const orang = [mhs, dosen]//mengembalikan dua buah array
// const orang = mhs.concat(dosen)//menggabungkan dua buah index array menjadi satu
// const orang = [...mhs, 'Aman', ...dosen]//menambah index pada gabungan array
// mengcopy array
// const mhs1 = mhs // jika maksdunya mengcopy array jangan gunakan cara seperti ini
// const mhs1 = [...mhs]
// mhs1[0] = 'Fajar' 
// console.log(mhs)
// console.log(mhs1)

// console.log(mhs);
// console.log(...mhs);//memecah array menjadi indexnya saja
// console.log(...mhs[0]);//memecah array index[0]
// console.log(orang);//memecah array index[0]

// const liMhs = document.querySelectorAll('li')
// console.log(liMhs)//akan mereturn nodelist bukan array
// console.log(...liMhs[0].textContent)
// const mhs = []
// for (let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent)
// }
// console.log(mhs)

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
// console.log(huruf)
nama.innerHTML = huruf