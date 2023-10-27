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


    function moveCursor(deltaX, deltaY) {
        const newRow = Math.floor(cursorPosition / 3) + deltaY;
        const newCol = (cursorPosition + deltaX) % 3;

        if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3) {
            cursorPosition = newRow * 3 + newCol;
        }
    }
    function hover(cursorPosition) {
        const currentCell = document.getElementsByClassName('cell')[cursorPosition];
        currentCell.classList.add('selected');
    }
    function handleArrowKey(key) {
        switch (key) {
            case "ArrowUp":
                moveCursor(0, -1);
                hover(cursorPosition);
                break;
            case "ArrowDown":
                moveCursor(0, 1);
                hover(cursorPosition);
                break;
            case "ArrowLeft":
                moveCursor(-1, 0);
                hover(cursorPosition);
                break;
            case "ArrowRight":
                moveCursor(1, 0);
                hover(cursorPosition);
                break;
        }
    }

    switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
            handleArrowKey(event.key);
            break;
        case "Enter":
            makeMove(cursorPosition);
            break;
        case "R":
        case "r":
            resetBoard();
            break;
        default:
            break;
    }


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





