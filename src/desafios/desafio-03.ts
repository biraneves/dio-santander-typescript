let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma: number): void {
    let saldoAtual = parseFloat(campoSaldo.innerHTML);
    saldoAtual += soma;
    campoSaldo.innerHTML = saldoAtual.toString();
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(parseFloat(soma.value));
});

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});