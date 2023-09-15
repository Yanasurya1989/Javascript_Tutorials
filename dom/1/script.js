// DOM Selection
// getElementById -> hanya mengembalikan element 
const judul = document.getElementById('judul');//ambilkan element dg id judul yg ada pada document (element yg diambil hanya h1)
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'werod diganti';

// getElementsByTagName - mengembalikan HTMLCollection
const gantiPe = document.getElementsByTagName('p') //buat cek nya ketik gantiPe terus enter di console
gantiPe[2].style.color='yellow'

for(let i = 0; i < gantiPe.length; i++){
    gantiPe[i].style.backgroundColor = 'magenta'
}

const h1 = document.getElementsByTagName('h1')//ini jadi html collection
const hejee = document.getElementsByTagName('h1')[0] //mengganti htmlcollection jadi element
hejee.style.fontSize = '90px'

// getElementsByClassName - mengembalikan HTMLCollection
const pehiji = document.getElementsByClassName('p1')[0]
pehiji.innerHTML = 'diganti dari js'