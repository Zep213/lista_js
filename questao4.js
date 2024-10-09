var num1 = 5;
var fatorial = 1;
function calcFat(){
    for(let i = 1; i <= num1; i++) {
         fatorial *= i;
        }
        console.log("o fatorial de "+ num1 + " é " + fatorial)
    }
calcFat()