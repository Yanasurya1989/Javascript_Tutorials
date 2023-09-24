function cobaPromise(){
    return new Promise((resolveSuccess, rejectGagal) =>{
        // const waktu = 3000
        const waktu = 2000
        if(waktu < 5000){
            setTimeout(() => {
                resolveSuccess('selesai')            
            }, waktu)
        }else {
            rejectGagal('kelamaan')
        }
    })
}

// const coba = cobaPromise()
// coba
//     .then(coba => console.log(coba)) //then untuk handle yg success
//     .catch(coba => console.log(coba)) //catch untuk handle error
    // .then(() => console.log(coba))
    // .catch(() => console.log(coba))


    async function cobaAsync(){
        try{ //untuk handle success
            const coba = await cobaPromise()
            console.log(coba);
        }catch (errApapun){ //untuk handle error
            console.error(errApapun)
        }
    }
    
    cobaAsync();