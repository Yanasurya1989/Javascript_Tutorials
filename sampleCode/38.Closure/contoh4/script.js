let add = (function (){
    let counter = 0;
    return function (){
        return ++counter;
    }
})();

counter = 100;//ini tidak akan mengganti counter yang diatas

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());