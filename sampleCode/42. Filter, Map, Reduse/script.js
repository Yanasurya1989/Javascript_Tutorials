const angka = [-1,8,9,1,4,-5,-4,3,2,9]

// mencari angka > 3
// menggunakan for
const newAngka = []
for(let i = 0; i < angka.length; i++){
    if(angka[i] >= 3){
        newAngka.push(angka[i])
    }
}

console.log(newAngka)

// menggunakan filter
const newAngka2 = angka.filter(function(a){ //bisa di singkat
    return a >= 3 //tampilkan angka yang > 3
})

const newAngkaSort = angka.filter(a => a >= 3) //mempersingkat code newAngka2

console.log(newAngka2)
console.log(newAngkaSort)


// menggunakan map 
const mapAngka = angka.map(a => a * 2)
console.log('Map: ' + mapAngka)


// reduce
// jumlahkan seluruh element pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const reduceAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(reduceAngka)


// methode chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5 ) //dari array angka berarti : 8, 9, 9
.map(a => a * 3) //angka hasil filter akan dikalikan 3
.map(a => a / 2) //haisl pengalian dibagi dua
.reduce((acc, cur)=> acc + cur) 
console.log(hasil)

const hasilLurus = angka.filter(a => a > 5 ).map(a => a * 3).map(a => a / 2).reduce((acc, cur)=> acc + cur) 
console.log('Penulisan lurus : ' + hasil)