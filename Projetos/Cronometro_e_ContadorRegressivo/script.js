// Variáveis de controle
let interval;
let totalMilliseconds = 0; // O tempo total em milissegundos
let isRunning = false;
let isTimerMode = false;

// Seleção de Elementos do DOM
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesInput = document.getElementById('minutesInput');
const setTimerBtn = document.getElementById('setTimerBtn');

// Função de formatação
function FormatTime(ms){

    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Garantir que todos tenham dois dígitos (EX: 05 ao invés de 5)
    const pad = (num) => num.toString().padStart(2, '0');

    // Se as horas forem 0, mostre apenas Minutos:Segundos
    if(hours === 0){

        return `${pad(minutes)}:${pad(seconds)}`;

    }

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

}

// Lógica Principal de Atualização (Chamada pelo setInterval)
function UpdateDisplay(){

    if(isTimerMode){

        // Modo Contador Regressivo (Timer)
        if(totalMilliseconds <= 0){

            clearInterval(interval);
            isRunning = false;
            display.textContent = 'TEMPO ESGOTADO!';
            startStopBtn.textContent = 'Iniciar';
            return;

        }

        totalMilliseconds -= 100; // Subtrai 1 segundo

    }

    else{

        // Modo Cronômetro
        totalMilliseconds += 100; // 100

    }

    display.textContent = FormatTime(totalMilliseconds);

}

// Função dos botões
function StartStop(){

    if(isRunning){

        // Parar
        clearInterval(interval);
        startStopBtn.textContent = 'Continuar';
        isRunning = false;

    }

    else{

        // Iniciar/Continuar
        if(totalMilliseconds > 0 || !isTimerMode){

            // Chama updateDisplay a cada 1000ms (1 segundo)
            interval = setInterval(UpdateDisplay, 100);
            startStopBtn.textContent = 'Parar';
            isRunning = true;

        }

    }

}

// Função de resetar o Timer
function Reset(){

    clearInterval(interval);
    isRunning = false;
    isTimerMode = false;
    totalMilliseconds = 0;
    display.textContent = '00:00';
    startStopBtn.textContent = 'Iniciar';
    minutesInput.value = 5;

}

function SetTimer(){

    const minutes = parseInt(minutesInput.value);
    if(isNaN(minutes) || minutes <= 0){

        alert("Por favor, insira um número de minutos válido!");
        return;

    }  

    // Parar o que estiver rodando e configurar o modo Timer
    clearInterval(interval);
    isRunning = false;
    isTimerMode = false;

    totalMilliseconds = minutes * 60 * 1000; // Converte minutos para milissegundos
    display.textContent = FormatTime(totalMilliseconds);
    startStopBtn.textContent = 'Iniciar';

    // Iniciar o Timer imediatamente após configurar
    StartStop();

}

// Atribuir Listeners de Evento aos Botões
startStopBtn.addEventListener('click', StartStop);
resetBtn.addEventListener('click', Reset);
setTimerBtn.addEventListener('click', SetTimer);