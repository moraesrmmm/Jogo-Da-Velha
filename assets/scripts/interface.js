const btnReset = document.querySelector('#btn-reset');
const p = document.querySelector('#p-info');
const score0 = document.querySelector('.score-0');
const score1 = document.querySelector('.score-1');
const stage = document.querySelector('.stage');
let scorePlayer0 = 0;
let scorePlayer1 = 0;

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
        btnClear()
        document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' width=\'30\' height=\'20\'><text x=\'5\' y=\'16\' font-family=\'Arial\' font-size=\'16\' fill=\'black\'>⭕</text></svg>"), auto';
    })

})

btnReset.addEventListener('click', () => {
    resetGame();
    btnClear()
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' width=\'30\' height=\'20\'><text x=\'5\' y=\'16\' font-family=\'Arial\' font-size=\'16\' fill=\'black\'>⭕</text></svg>"), auto';
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            setMessage(" O jogo Acabou - O vencedor foi o player " + playerTime);
        }, 10)
        setScore();
        btnOn();
        setCursorAuto()
    } else if (allSquaresClicked() == true) {
        setTimeout(() => {
            setMessage("O jogo acabou sem um vencedor!");
        }, 10)
        btnOn();
        setCursorAuto()
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}

function setMessage(msg) {
    if (isWin() == true) p.style.color = 'green';
    else p.style.color = 'red';
    p.textContent = msg;
}

function setScore() {
    if (playerTime === 0) {
        scorePlayer0 = scorePlayer0 + 1;
        score0.textContent = scorePlayer0;
    }

    if (playerTime === 1) {
        scorePlayer1 = scorePlayer1 + 1;
        score1.textContent = scorePlayer1;
    }
}

function btnClear() {
    btnReset.style.display = "none";
}

function btnOn() {
    btnReset.style.display = "";
}
