"use strict";
const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function somarNumeros(num1, num2, deveImprimir, frase) {
    let soma = num1 + num2;
    if (deveImprimir)
        console.log(frase, soma);
    return soma;
}
let deveImprimir = true;
let frase = 'O resultado é';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), deveImprimir, frase));
        }
    });
}
