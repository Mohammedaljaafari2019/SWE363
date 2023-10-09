let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
const boardd = document.getElementById("board");
let cursorPosition = 0;
let isGameOver = false;
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    const previousCell = document.getElementsByClassName('cell')[cursorPosition];
    previousCell.classList.remove('selected');


    switch (event.key) {
        case "ArrowUp":
            if (cursorPosition >= 3) {
                cursorPosition -= 3;
            }
            break;
        case "ArrowDown":
            if (cursorPosition < 6) {
                cursorPosition += 3;
            }
            break;
        case "ArrowLeft":
            if (cursorPosition % 3 !== 0) {
                cursorPosition--;
            }
            break;
        case "ArrowRight":
            if (cursorPosition % 3 !== 2) {
                cursorPosition++;
            }
            break;
        case "Enter":
            makeMove(cursorPosition);
            break;
        case "R", "r":
            resetBoard();

            break;
        default:
            break;
    }
    const currentCell = document.getElementsByClassName('cell')[cursorPosition];
    currentCell.classList.add('selected');
}
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
    console.log("hi");
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    cursorPosition = 0;
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
        cell.classList.remove('selected');
    }
    document.getElementById('status').innerText = '';
    document.activeElement.blur();
}





