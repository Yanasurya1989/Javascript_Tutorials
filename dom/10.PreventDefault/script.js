// const close = document.querySelectorAll('.close')

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault();
//         e.stopPropagation();//menghantikan aksi pembungkus ketika komponen yang didalam pembungkusnya di klik
//     })
// })

// const card = document.querySelectorAll('.card')
// card.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok')
//     })
// })


const container = document.querySelector('.container')

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none'
        // e.preventDefault();
    }

    // console.log(e.target)
})