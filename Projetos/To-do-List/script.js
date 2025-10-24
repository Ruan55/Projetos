let lista = []; // Array para armazenar as tarefas

let texto = document.getElementById('texto'); // Elemento do input do tipo texto

let listaElement = document.getElementById('lista'); // Elemento HTML para a lista

const btnAdicionar = document.getElementById('btnAdicionar'); // Elemento do botão de adicionar

// Adiciona o ouvinte de evento na inicialização
btnAdicionar.addEventListener('click', Adicionar);

const btnRemover = document.getElementById('btnRemover'); // Elemento do botão de remover todos

btnRemover.addEventListener('click', Remover);

function Adicionar(){

    const textoTarefa = texto.value.trim(); // Pega o valor do input e remove espaços em brancos extras

    // Verifica se o input não está vazio
    if(textoTarefa !== ''){

        const novaTarefa = {

            texto: textoTarefa,
            concluida: false // Sinalizador booleano começando com false, indicando que a tarefa ainda não foi adicionada

        };

        lista.push(novaTarefa); // Adiciona a nova tarefa ao array
        texto.value = ''; // Limpa o input após adicionar a tarefa
        AtualizarListaNaTela(); // Atualiza a lista na tela

    }

    else{

        // Alerta o usuário caso o campo esteja vazio
        alert("Por favor, digite uma tarefa no campo");

    }

}

// Função para alternar o status de concluída e pendente
function AlternarConcluida(index){

    lista[index].concluida = !lista[index].concluida; // Inverte o status da tarefa de pendente para concluído
    AtualizarListaNaTela(); // Atualiza a lista na tela

}

// Função para remover uma tarefa da lista
function Remover(indexParaRemover){

    // Remove a tarefa armazenada na lista
    lista.splice(indexParaRemover, 1);

    AtualizarListaNaTela(); // Atualiza a lista na tela

}

// Função para atualizar a lista na tela
function AtualizarListaNaTela(){

    // Limpa a lista HTML atual para exibir os dados do array
    listaElement.innerHTML = '';

    // Percorre a lista de tarefas e cria elementos HTML para cada uma
    lista.forEach((tarefa, index) => {

        const li = document.createElement('li'); // Cria um elemento <li>
        li.style.textDecoration = tarefa.concluida ? 'line-through' : 'none'; // Estilização para quando uma tarefa for concluída
        li.style.listStyle = 'none'; // Remove as bolinhas da lista

        // 1. Span para o texto da tarefa
        const spanTexto = document.createElement('span');
        spanTexto.textContent = tarefa.texto;
        li.appendChild(spanTexto);

        // 2. Botão de Concluir/Pendente
        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = tarefa.concluida ? 'Pendente' : 'Concluída';

        // Adiconando o evento no elemento criado
        btnConcluir.addEventListener('click', () => AlternarConcluida(index));
        li.appendChild(btnConcluir);

        // 3. Botão de Remover  
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';

        // Adicionando o evento no elemento criado
        btnRemover.addEventListener('click', () => Remover(index));
        li.appendChild(btnRemover);

        listaElement.appendChild(li); // Adiciona o elemento <li> à lista HTML

    });

}