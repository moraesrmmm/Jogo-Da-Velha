let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(position) {
    if (gameOver) {
        return;
}
    if (board[position] == '') {
        board[position] = symbols[playerTime];
        gameOver = isWin();
        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0
        }
        setCursor()
    }
    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        } 
    }
    return false;
}

function resetGame(){
    let squares = document.querySelectorAll('.square');
    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;
    squares.forEach((square) => {
        square.innerHTML = '';
    });
    setMessage('');
}

function allSquaresClicked() {
    return board.every((value) => value !== '');
}

function setCursor(){
    if (playerTime === 1) {
        document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' width=\'30\' height=\'20\'><text x=\'5\' y=\'16\' font-family=\'Arial\' font-size=\'16\' fill=\'black\'>✖️</text></svg>"), auto';
    } else if (playerTime === 0) {
        document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' width=\'30\' height=\'20\'><text x=\'5\' y=\'16\' font-family=\'Arial\' font-size=\'16\' fill=\'black\'>⭕</text></svg>"), auto';
    }
}

function setCursorAuto(){
    document.body.style.cursor =  'auto';
}
