const numeros = [1, 3, 5, 6, 9, 12];

function somatudo(array){
    return array.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual; 
    }, 0);
}
console.log(somatudo(numeros));


