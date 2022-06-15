function somarValoresNumericosETratar(num1: number, num2: number, callback: (numero: number) => number): number {
    let resultado: number = num1 + num2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero ** 2;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(3, 5, aoQuadrado));
console.log(somarValoresNumericosETratar(3, 5, dividirPorEleMesmo));