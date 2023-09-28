const bgSatu = document.querySelector('.area-komputer')

function ubahWarna(){
    // bgSatu.style.backgroundColor = 'red'
    console.log('clc')
}

const silaSatu = document.querySelector('.satu')

silaSatu.addEventListener('click', function(){
    body.style.backgroundColor = 'salmon'
})

silaSatu.addEventListener('click', function(){
    const title = document.querySelector('.area-komputer .title')
    const inTitle = document.createElement('h1')
    const textTitle = document.createTextNode('Output sila ke - 1')
    inTitle.appendChild(textTitle)
    title.appendChild(inTitle)

})

silaSatu.addEventListener('click', function(){
    const ulCompArea = document.querySelector('.area-komputer ul')
    const liBaruCompArea = document.createElement('li')
    const textBaru = document.getElementById("img-komputer").src = "img/shalat.png"
    liBaruCompArea.appendChild(textBaru)
    ulCompArea.appendChild(liBaruCompArea)
})

const silaDua = document.querySelector('.dua')
silaDua.addEventListener('click', function(){
    const title = document.querySelector('.area-komputer .title')
    const inTitle = document.createElement('h1')
    const textTitle = document.createTextNode('Output sila ke - 2')
    inTitle.appendChild(textTitle)
    title.appendChild(inTitle)

})

silaDua.addEventListener('click', function(){
    const ulCompArea = document.querySelector('.area-komputer ul')
    const liBaruCompArea = document.createElement('li')
    const textBaru = document.getElementById("img-komputer").src = "img/siladua.png"
    liBaruCompArea.appendChild(textBaru)
    ulCompArea.appendChild(liBaruCompArea)
})


const silaTiga = document.querySelector('.tiga')
silaTiga.addEventListener('click', function(){
    const title = document.querySelector('.area-komputer .title')
    const inTitle = document.createElement('h1')
    const textTitle = document.createTextNode('Output sila ke - 3')
    inTitle.appendChild(textTitle)
    title.appendChild(inTitle)

})

silaTiga.addEventListener('click', function(){
    const ulCompArea = document.querySelector('.area-komputer ul')
    const liBaruCompArea = document.createElement('li')
    const textBaru = document.getElementById("img-komputer").src = "img/silatiga.png"
    liBaruCompArea.appendChild(textBaru)
    ulCompArea.appendChild(liBaruCompArea)
})

const silaEmpat = document.querySelector('.empat')
silaEmpat.addEventListener('click', function(){
    const title = document.querySelector('.area-komputer .title')
    const inTitle = document.createElement('h1')
    const textTitle = document.createTextNode('Output sila ke - 4')
    inTitle.appendChild(textTitle)
    title.appendChild(inTitle)

})

silaEmpat.addEventListener('click', function(){
    const ulCompArea = document.querySelector('.area-komputer ul')
    const liBaruCompArea = document.createElement('li')
    const textBaru = document.getElementById("img-komputer").src = "img/silaempat.png"
    liBaruCompArea.appendChild(textBaru)
    ulCompArea.appendChild(liBaruCompArea)
})

const silaLIma = document.querySelector('.lima')
silaLIma.addEventListener('click', function(){
    const title = document.querySelector('.area-komputer .title')
    const inTitle = document.createElement('h1')
    const textTitle = document.createTextNode('Output sila ke - 5')
    inTitle.appendChild(textTitle)
    title.appendChild(inTitle)

})

silaLIma.addEventListener('click', function(){
    const ulCompArea = document.querySelector('.area-komputer ul')
    const liBaruCompArea = document.createElement('li')
    const textBaru = document.getElementById("img-komputer").src = "img/silalima.png"
    liBaruCompArea.appendChild(textBaru)
    ulCompArea.appendChild(liBaruCompArea)
})

const warnaBodySatu = document.querySelector('.satu')
warnaBodySatu.onclick = function(){
    document.body.style.backgroundColor = 'lightblue'
    // alert('ok')
}

const warnaBodyDua = document.querySelector('.dua')
warnaBodyDua.onclick = function(){
    document.body.style.backgroundColor = 'salmon'
}

const warnaBodyTiga = document.querySelector('.tiga')
warnaBodyTiga.onclick = function(){
    document.body.style.backgroundColor = 'gold'
}

const warnaBodyEmpat = document.querySelector('.empat')
warnaBodyEmpat.onclick = function(){
    document.body.style.backgroundColor = 'aqua'
}

const warnaBodyLima = document.querySelector('.lima')
warnaBodyLima.onclick = function(){
    document.body.style.backgroundColor = 'violet'
}