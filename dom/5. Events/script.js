const p4 = document.querySelector('.p4')
p4.style.backgroundColor = 'lightblue'

function ubahWarna(){
    p4.style.backgroundColor = 'salmon'
    p4.innerHTML = 'text berganti'
}

function ubahViaJs(){
    p3.style.backgroundColor = 'orange'
    p3.innerHTML = 'text diganti via JS'
}

const p3 = document.querySelector('.p3')
p3.onclick = ubahViaJs


const paragrap4 = document.querySelector('section#b p')
paragrap4.addEventListener('click', function(){
    // alert('ok')

    const ul = document.querySelector('section#b ul')

    const liBaru = document.createElement('li')
    const teksLiBaru = document.createTextNode('baru ditambahkan')

    liBaru.appendChild(teksLiBaru)
    ul.appendChild(liBaru)
    console.log('added success')
})


// perbedaan event handler dan addEventsListener = memanggil nama fungsi di file html
const liTiga = document.querySelector('section#b #lima')

// menggunakan events handler
// liTiga.onclick = function(){
//     liTiga.style.backgroundColor = 'lightblue'
// }
// liTiga.onclick = function(){
//     liTiga.style.color = 'red'
// }


// menggunakan addEventsListener
liTiga.addEventListener('click', function(){
    liTiga.style.backgroundColor = 'lightblue'
})

liTiga.addEventListener ('click', function(){
    liTiga.style.color = 'salmon'
})


const liEnam = document.querySelector('section#b #enam')
liEnam.addEventListener('dblclick', function(){
    liEnam.style.backgroundColor = 'salmon'
    liEnam.innerHTML = 'component has double clicked'
})


const liTujuh = document.querySelector('section#b #tujuh')

liTujuh.addEventListener('mouseenter', function(){
    liTujuh.style.backgroundColor = 'lightgreen'
    liTujuh.innerHTML = 'component is hovered'
})
liTujuh.addEventListener('mouseleave', function(){
    liTujuh.style.backgroundColor = 'lightblue'
    liTujuh.innerHTML = 'component is not hover'
})