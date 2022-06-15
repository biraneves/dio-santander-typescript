let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest1: string = 'verificar';
stringTest1 = anyEstaDeVolta;

let unknownValue: unknown;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'vai sim';

let stringTest2: string = 'agora vai';
// stringTest2 = unknownValue;

if (typeof(unknownValue) === 'string')
    stringTest2 = unknownValue;