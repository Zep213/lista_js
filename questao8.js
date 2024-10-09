const numeros = [1, 3, 5, 6, 9, 12];
var multiplos = []
let multiplos_3 = 0;

for(let i = 0;i< numeros.length;i++){
    if(numeros[i] % 3 === 0){
        console.log(numeros[i])
        multiplos_3++
        multiplos.push(numeros[i])
    }
}
console.log(multiplos)
console.log(multiplos_3)