// dialog confirm akan menyimpan data berupa bolean (true/false)

var ask = confirm('are you sure?')

if(ask === true){
    alert('user telah menekan tombol OK')
}else{
    alert("user telah menekan tombol CANCEL")
}