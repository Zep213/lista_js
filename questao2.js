var num1 = 5;
var soma = 0;
function somaAteN(){
    for(let i = 0; i <= num1; i++) {
         soma += i;
        }
    console.log("o numero é " + num1 +" e a soma de todos os numeros ate ele é " + soma);
}
somaAteN()