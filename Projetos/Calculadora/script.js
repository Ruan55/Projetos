// 1. Seleção dos elementos 
const primeiroNumeroInput = document.getElementById('primeiroNumero');
const segundoNumeroInput = document.getElementById('segundoNumero');
const resultadoDiv = document.getElementById('Resultado');

// 2. Seleção dos novos botões de operação
const btnSomar = document.getElementById('btnSomar');
const btnSubtratir = document.getElementById('btnSubtrair');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');

// Função principal para calcular o resultado com base na operação
// @param {string} operação O símbolo da operação ('+', '-', '*', '/').

function Calcular(operacao){

    // A. Obtém e converte os valores
    const numero1 = parseFloat(primeiroNumeroInput.value);
    const numero2 = parseFloat(segundoNumeroInput.value);
    let resultado;

    // B. Validação
    if(isNaN(numero1) || isNaN(numero2)){

        resultadoDiv.innerHTML = 'Por favor, insira dois números válidos.';
        return;

    }

    // C. Lógica Condicional
    switch(operacao){

        case '+':
            resultado = numero1 + numero2;
            break;

        case '-':
            resultado = numero1 - numero2;
            break;

        case '*':
            resultado = numero1 * numero2;
            break;

        case '/':
            // Validação para evitar divisão por zero
            if(numero2 !== 0){
                resultado = numero1 / numero2;
                break;
            }

        default:
            resultadoDiv.innerHTML = 'Operação inválida.';
            return;

    }

    // D. Exibe o resultado
    resultadoDiv.innerHTML = `Resultado da operação (${operacao}: <strong>${resultado.toFixed(2)}</strong>)`;

}

// 3. Adiciona os Event Listeners
btnSomar.addEventListener('click', () => {

    Calcular('+');

});

btnSubtratir.addEventListener('click', () => {

    Calcular('-');

});

btnMultiplicar.addEventListener('click', () => {

    Calcular('*');

});

btnDividir.addEventListener('click', () => {

    Calcular('/');

});