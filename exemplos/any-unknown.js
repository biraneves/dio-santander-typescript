"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest1 = 'verificar';
stringTest1 = anyEstaDeVolta;
let unknownValue;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'vai sim';
let stringTest2 = 'agora vai';
// stringTest2 = unknownValue;
if (typeof (unknownValue) === 'string')
    stringTest2 = unknownValue;
