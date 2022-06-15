const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(num1: number, num2: number) {
    return num1 + num2;
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
