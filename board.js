let board = [ 
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let currentPlayer = 1; 
let turnNumber = 1; 
let previousLoser = 1; 

let gameOver = 0

let playerOneWins = 0; 
let playerTwoWins = 0; 
let draws = 0; 

function getCurrentPlayer() { return currentPlayer; }
function getPlayerOneWins() { return playerOneWins; }
function setPlayerOneWins(wins) { playerOneWins = wins; }
function getPlayerTwoWins() { return playerTwoWins; }
function setPlayerTwoWins(wins) { playerTwoWins = wins; }
function getDraws() { return draws; }
function setDraws(draws) { draws = draws; }


function playerMove(row, column) {
    if(board[row][column] != 0) 
    {
        window.alert("That space has already been chosen!");
    }
    else if (gameOver) window.alert("The game is over!");
    else {
        board[row][column] = currentPlayer;
        if (currentPlayer == 1) currentPlayer = 2;
        else currentPlayer = 1; 
    }
    checkWin(); 
}

function checkWin() {
    if (checkEqual(board[0])) win(board[0][0]); // 
    else if (checkEqual(board[1])) win(board[1][0]);
    else if (checkEqual(board[2])) win(board[2][0]);
    else if (checkEqual([board[0][0], board[1][0], board[2][0]])) win(board[0][0]);
    else if (checkEqual([board[0][1], board[1][1], board[2][1]])) win(board[0][0]);
    else if (checkEqual([board[0][2], board[1][2], board[2][2]])) win(board[0][0]);
    else if (checkEqual([board[0][0], board[1][1], board[2][2]])) win(board[0][0]);
    else if (checkEqual([board[2][0], board[1][1], board[0][2]])) win(board[2][0]);
    else if (turnNumber == 9)
    turnNumber ++; 
}

function win(winner) {
    if (winner == 1) {
        playerOneWins ++; 
        previousLoser = 2; 
    }
    else if (winner == 2) {
        playerTwoWins ++;
        previousLoser = 1; 
    } 
    gameOver = 1;

}

function checkEqual(row) {
    if(row[0] == row[1] && row[1] == row[2]) return true; 
    return false; 
}

function reset() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    currentPlayer = perviousLoser; 
    turnNumber = 1; 
    gameOver = 0;
}