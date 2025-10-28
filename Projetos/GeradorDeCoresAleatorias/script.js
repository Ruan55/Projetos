// 1. Pegar os elementos HTML para manipular
const colorCodeElement = document.getElementById('color-code');
const colorButton = document.getElementById('color-button');
const body = document.body;

// 2. Função principal para gerar cor aleatória
function GenerateRandomHexColor(){

    // Definimos os possíveis caracteres para um código hexadecimal (0-9 e A-F)
    const hexaCharacters = '0123456789ABCDEF';
    let color = '#';

    // Um código hex tem 6 dígitos após o '#'
    for(let i = 0; i < 6; i++){

        // Gerando um índice aleatório (0 a 15)
        const randomIndex = Math.floor(Math.random() * hexaCharacters.length);

        // Concatenando o caractere correspondente ao índice
        color += hexaCharacters[randomIndex];

    }

    return color; // Retorna o código hexadecimal completo

}

// 3. Função que muda a cor
function ChangeColor(){

    // Gera uma nova cor
    const newColor = GenerateRandomHexColor();

    // Aplica a cor de fundo da página (Elemento body)
    body.style.backgroundColor = newColor;

    // Atualiza o texto com o novo código da cor
    colorCodeElement.textContent = newColor;

}

// 4. Adicionar um "ouvinte de evento" ao botão
colorButton.addEventListener('click', ChangeColor);

// 5. Chamada inicial para definir uma cor ao carregar a página
ChangeColor();