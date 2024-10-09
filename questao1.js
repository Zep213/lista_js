var num1 = 6;
var num2 = 7;

function verificar_maior(){
    var maior_num = num1;
    if (maior_num < num2){
        maior_num = num2;
    }
    console.log(maior_num);
}

function verificar_soma(){
    var soma = num1 + num2;
    if (soma % 2 == 0){
        console.log("a soma dos numeros é par");
    }else{
        console.log("a soma dos numeros é impar");
    }
}
verificar_maior()
verificar_soma()