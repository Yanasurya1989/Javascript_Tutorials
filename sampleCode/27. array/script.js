// 1. menampilkan isi array
// arr = ['a', 2, true]
// console.log(arr)

// 2. Mengisi array
// arr = [];
// arr[0] = "Yana";
// arr[1] = 1;
// arr[2] = true;
// arr[5] = "Yana Surya";

// console.log(arr)

//3. Menghapus array
// arr = ['a', 1, true]
// arr [1] = undefined
// console.log(arr)

//4. Menampilkan isi array dengan looping
// arr = ['Yana', 'Yani', 'Yuni', 'Yeni', 'Yuyun', 'nambah', 'nambah lagi'];

// for(i=0; i < arr.length; i++){//length berfungsi untuk mengetahui jumlah index dalam array
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + arr[i])
//     document.writeln('<p>Mahasiswa ke-' + (i+1) + ' adalah : ' + arr[i] + '</p>')
// }


// Method dalam array
// 1. Join
// arr = ['Yana', 'Yani', 'Yuni', 'Yeni', 'Yuyun', 'nambah', 'nambah lagi'];
// console.log(arr.join(' - '))

//2. push - Menambahkan index array
// arr = ['Yana', 'Yani', 'Yuni', 'Yeni', 'Yuyun', 'nambah', 'nambah lagi'];
// arr.push('satu', 'dua', 'tiga')
// console.log(arr)

//3. pop - menghapus index terakhir dalam array
var arr = ['Yana', 'Yani', 'Yuni', 'Yeni', 'Yuyun', 'nambah', 'nambah lagi'];
// arr.pop()
// arr.pop()
// console.log(arr)

// arr.unshift('nambahdidepan', 'nambah didepandua')
// console.log(arr)

// arr.shift()
// arr.shift()
// console.log(arr)

//4. splice - Menyisipkan, menghapus data dengan customize posisi index

// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// arr.splice(2, 0, 'nyisipditengah');//nyisip data di index[2], tidak ada yg dihapus, index yg disisipkan

// arr.splice(1, 2, 'tambahsatu', 'tambahkedua')//dimulai dari index[1] dihapus sebanyak dua data kemudian tambahkan dua index lagi
// console.log(arr.join(' - '));

//5. slice - mengambil element
var arr2 = arr.slice(1,3)//ambil index [1] kemudian index[3] dikurangi 1 jadinya index[2], nomer belakang itu selalu dikurangi 1 jadinya yg di slice index[1], [2]
console.log(arr.join(' - '));
console.log(arr2.join(' - '));

