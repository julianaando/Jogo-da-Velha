//Armazena a referência de cada célula do tabuleiro
const cells = Array.from(document.querySelectorAll('.board div'));

// Variáveis para armazenar o jogador atual e o estado do jogo
let currentPlayer = 'X';
let gameOver = false; 

// Evento de clique para cada célula 
cells.forEach(cell => cell.addEventListener('click', handleClick));

// Função para lidar com o clique em uma célula
function handleClick() {
    // Verifica se a célula já foi clicada ou se o jogo acabou
    if (this.innerHTML !== '' || gameOver) return;
    // Adiciona o símbolo do jogador atual na célula clicada
    this.innerHTML = currentPlayer;
    // Verifica se há um vencedor
    checkForWinner();
    // Alterna o jogador atual
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkForWinner() {
    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (cells[a].innerHTML === currentPlayer && cells[b].innerHTML === currentPlayer && cells[c].innerHTML === currentPlayer) {
            gameOver = true;
            alert(`O jogador ${currentPlayer} venceu!`);
            cells.forEach(cell => cell.removeEventListener('click', handleClick));
        }
    });
}

function resetGame() {
    cells.forEach(cell => cell.innerHTML = '');
    cells.forEach(cell => cell.addEventListener('click', handleClick));
    currentPlayer = 'X';
    gameOver = false;
}

document.querySelector('#buttonReset').addEventListener('click', resetGame);
