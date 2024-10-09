let num = 10;
function numeroPrimo(){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num;i++){
        if (num % i === 0){
            return false;
        }      
    }
    return true;    
}

if(numeroPrimo(num)){
    console.log(num + " é primo");
}else{
    console.log(num + " nao é primo");
}