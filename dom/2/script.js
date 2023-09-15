// // document.querySelector() -> mengembalikan element
// const pOpat = document.querySelector('#b p');
// pOpat.style.color = 'green'
// pOpat.style.fontSize = '30px' 

// const li2 = document.querySelector('section#b ul li:nth-child(4)')
// li2.style.backgroundColor = 'red'

// const pNganHiji = document.querySelector('p')
// pNganHiji.innerHTML = 'ganti ku JS tp ngan hiji'

// const pKabeh = document.querySelectorAll('p')
// for(let i = 0; i < pKabeh.length; i++){
//     pKabeh[i].style.backgroundColor = 'lightblue'
// }

// posisi p sesuai urutan di htmlnya
// const p4 = document.getElementsByTagName('p')
// p4[3].style.backgroundColor = 'lightblue'

// posisi p sesuai urutan di htmlnya
// const p4 = document.querySelectorAll('p')
// p4[3].style.backgroundColor = 'lightblue'

// // posisi p sesuai urutan di htmlnya
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = 'orange'


// posisi p sesuai urutan di htmlnya
const sectionB = document.querySelector('section#b')
const p4 = sectionB.getElementsByTagName('p')[0]
p4.style.backgroundColor = 'green'