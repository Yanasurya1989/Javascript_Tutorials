// var number = prompt('Masukan angka !')
// switch (number){
//     case '1' :
//         alert('anda memasukan angka ' + number)
//         break;
//     case '2' :
//         alert('anda memasukan angka ' + number)
//         break;
//     case 3 :
//         alert('anda memasukan angka ' + number)
//         break;
//     case 4 :
//         alert('anda memasukan angka ' + number)
//         break;
//     case 5 :
//         alert('anda memasukan angka ' + number)
//         break;
//     case 6:
//         alert('anda memasukan angka ' + number)
//         break;

//     default :
//         alert('yang anda masukan bukan angka tuh')
//         break;
// }

var food = prompt('Masukan nama makanan/minuman : \n (contoh : Nasi, daging, susu, hamburger, softdrink)');

// switch(food){
//     case 'nasi':
//         alert('ini makanan SEHAT !')
//         break
//     case 'daging':
//         alert('ini makanan SEHAT !')
//         break
//     case 'susu':
//         alert('ini makanan SEHAT !')
//         break
//     case 'hamburger':
//         alert('ini makanan TIDAK SEHAT !')
//         break
//     default :
//         alert(food + ' tidak termasuk list')
//         break
// }

//untuk alert yang sama break boleh dihilangka
switch(food){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('ini makanan SEHAT !')
        break
    case 'cocacoca':
    case 'hamburger':
        alert('ini makanan TIDAK SEHAT !')
        break
    default :
        alert(food + ' tidak termasuk list')
        break
}