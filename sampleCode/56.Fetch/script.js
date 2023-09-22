// Fetch
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword')
    fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + inputKeyword.value)
        .this
})



function showCards(m){
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal_detail-button" data-toggle="modal" data-target="#movieDetilModal" data-imdbid="${m.imdbID}">show detil</a>
        </div>
    </div>
</div>`
}

function showMovieDetil(m){
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
        <ul class="list-group">
            <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
            <li class="list-group-item"><strong>Actor</strong>${m.Actors}</li>
            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
            <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
        </ul>
        </div>
    </div>
</div>`
}