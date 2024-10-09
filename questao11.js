const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var novosNum = []

function quadradoMaiorDez(){
    for(let i = 0;i < numeros.length;i++){
        if (numeros[i] > 10){
            numeros[i] *2;
            let duplicado = numeros[i] * 2;
            novosNum.push(duplicado)
            
        }
    }
}
quadradoMaiorDez()
console.log(novosNum)