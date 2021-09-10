function esPalindromo(texto){
    if (typeof texto != 'string'){
        throw TypeError('el argumento es invalido');
    }

    texto = texto.toLowerCase().replace(' ' , ' ');

    return texto == texto.split('').reverse().join('');
    
}
try {
    console.log(esPalindromo('ana'));//true
} catch (e) {
    console.log('error')
    
}
