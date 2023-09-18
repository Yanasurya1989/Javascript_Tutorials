// membuat element baru
const pBaru = document.createElement('p');//membuat elemen p
const teksBaru = document.createTextNode('Paragraf baru') //membuat tulisan dan menyimpannya kedalam variable

// menyimpan tulisan kedalam elemen p
pBaru.appendChild(teksBaru);

// simpan pBaru pada tag a terakhir
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li')
const teksLi = document.createTextNode('Item tambahan')
liBaru.appendChild(teksLi)

const ul = document.querySelector('section#b ul')
// const ndLi = document.querySelector('section#b li ul:nth-child(2)') //code ini bisa diganti dengan scope yang lebih sempit, seperti ini :
const ndLi = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, ndLi);//menampilkan ke layar

const rmLink = document.getElementsByTagName('a')[0]
sectionA.removeChild(rmLink)


const sectionB = document.getElementById('b')
const pOpat = sectionB.querySelector('p')

const yangDitambahkan = document.createElement('h2')
const teksBuatYangDitambahkan = document.createTextNode('Judul Baru')

yangDitambahkan.appendChild(teksBuatYangDitambahkan)
sectionB.replaceChild(yangDitambahkan, pOpat)

//item2 yang ditambahkan
pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
yangDitambahkan.style.backgroundColor = 'lightgreen'