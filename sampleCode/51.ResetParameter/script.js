// function arGument(a, b, ...arg){
//     // return `a = ${a}, b = ${b}, argument = ${arg}`
//     // return arg
//     // return arguments
//     // return Array.from(arguments)
//     return[...arguments] 
// }
// console.log(arGument(1,2,3,4,5,6,7,))


// function jumlahkan(...angka){
    // let total = 0
    // for (const a of angka){
    //     total += a;

    // }

    // return total

    // menggunakan reduce
//     return angka.reduce((a, b) => a + b)
// }

// console.log(jumlahkan(1,2,3,4,5))


// array destructuring
// const kelompok1 = ['Yana', 'Yani', 'Yuni', 'Yayan', 'Yuyun']
// const [ketua, wakil, ...anggota] = kelompok1
// console.log('ketua: '+ketua)
// console.log('wakil: ' + wakil)
// console.log('anggota: ' + anggota)


//object destructuring
// const team = {
//     pm: 'Yana',
//     frontend1: 'Yani',
//     frontend2: 'Yayan',
//     backend: 'Maman',
//     ux: 'Mimin',
//     depOvs: 'Mumun',
// }

// const {pm, ...myTeam} = team
// console.log('pm : ' + pm)
// console.log('team: ' + myTeam)
// console.log(myTeam)


// filtering
function filterBy(type, ...valueSisanya){
    return valueSisanya.filter(v => typeof v ===type)
    
}

console.log(filterBy('number', 1, 2, 'Yana', false, 10, 44,true, 'Mimin'))
console.log(filterBy('string', 1, 2, 'Yana', false, 10, 44,true, 'Mimin'))
console.log(filterBy('boolean', 1, 2, 'Yana', false, 10, 44,true, 'Mimin'))