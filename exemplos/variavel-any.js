"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Olá!';
valorAny = true;
let valorString = 'teste';
// valorString = 3;
// valorString = true;
valorString = valorAny; // Temos um problema aqui... Mas é permitido pelo TypeScript.
let valorString2 = 'teste2';
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2); // Vai dar 2!!! 🤦🏻‍♂️
