const numeros = [1,2,3,4,5,6,7,8]

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
let dobrados = pares.map(function(numero){
    return numero * 2
});


console.log(dobrados);
console.log(pares);