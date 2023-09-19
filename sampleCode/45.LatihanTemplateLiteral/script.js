// 1. HTML Fragments
// const mhs = {
//     nama: 'Yana',
//     umur: 34,
//     nim:'18111059',
//     emai: 'yanasurya1989@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`


// 2. looping
// const mhs = [
//     {
//         nama: 'Yana',
//         emai: 'yanasurya1989@gmail.com'
//     },
//     {
//         nama: 'Yani',
//         emai: 'yanisurya1989@gmail.com'
//     },
//     {
//         nama: 'Yuni',
//         emai: 'yunisurya1989@gmail.com'
//     },
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.emai}</li>
//     </ul>`).join('')}
// </div>`


// 3. Conditionals
// ternary
const mhs = {
    judul: 'Kau Adalah',
    penyanyi: 'Isyana Syara',
    feat: 'Ray Putra'
}

const el = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`
// console.log(el)
document.body.innerHTML = el