"use strict";
function somarValoresNumericosETratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero ** 2;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(3, 5, aoQuadrado));
console.log(somarValoresNumericosETratar(3, 5, dividirPorEleMesmo));
