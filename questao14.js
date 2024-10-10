function verificarPalindromo(texto) {
    
    let textoLimpo = texto.replace(/\s+/g, '').toLowerCase();
    
    // Inverte o texto
    let textoInvertido = textoLimpo.split('').reverse().join('');
    
    
    if (textoLimpo === textoInvertido) {
        return "É um palíndromo!";
    } else {
        return "Não é um palíndromo.";
    }
}


let texto = prompt("Digite uma palavra ou frase:");
alert(verificarPalindromo(texto));
