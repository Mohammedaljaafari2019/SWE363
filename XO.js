let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && !gameOver) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById('status').innerText = `Player ${board[a]} wins!`;
        }
    }

    if (!board.includes('') && !gameOver) {
        gameOver = true;
        document.getElementById('status').innerText = "It's a draw!";
    }
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
    }
    document.getElementById('status').innerText = '';
}

resetBoard(); // Initialize the game
