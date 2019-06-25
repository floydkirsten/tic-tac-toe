
let board = [ // 2D array signifying the board
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let currentPlayer = 1; // Player whos turn it currently is
let turnNumber = 1;  // Number of the current turn
let previousLoser = 1; // Loser of the previous game

let gameOver = 0 // Whether or not the game is currently over

let playerOneWins = 0; // How many wins for player 1
let playerTwoWins = 0; // How many wins for player 2
let draws = 0; // Number of draws

function getCurrentPlayer() { return currentPlayer; } // Returns the current player
function getPlayerOneWins() { return playerOneWins; } // Returns the number of wins for player 1
function setPlayerOneWins(wins) { playerOneWins = wins; } // Sets the number of wins for player 1
function getPlayerTwoWins() { return playerTwoWins; } // Returns the number of wins for player 2
function setPlayerTwoWins(wins) { playerTwoWins = wins; } // Sets the number of wins for player 2
function getDraws() { return draws; } // Returns the number of draws
function setDraws(draws) { draws = draws; } // Sets the number of draws


exports.playerMove = function(row, column) { // Performs a move for the current player
    if(board[row][column] != 0) // Checks if there the selected space has already been selected
    {
        window.alert("That space has already been chosen!");
    }
    else if (gameOver) window.alert("The game is over!"); // Checks if the game is already over
    else {
        board[row][column] = currentPlayer; // Sets the correct space to the current player
        checkWin(); 
        if (currentPlayer == 1) currentPlayer = 2; // Changes current player
        else currentPlayer = 1; 
    }
}

function checkWin() { // Checks to see if a win condition has been met
    if (checkEqual(board[0])) win(board[0][0]); // Checks the first row
    else if (checkEqual(board[1])) win(board[1][0]); // Checks the second row
    else if (checkEqual(board[2])) win(board[2][0]); // Checks the third row
    else if (checkEqual([board[0][0], board[1][0], board[2][0]])) win(board[0][0]); // Checks the first column
    else if (checkEqual([board[0][1], board[1][1], board[2][1]])) win(board[0][0]); // Checks the second column
    else if (checkEqual([board[0][2], board[1][2], board[2][2]])) win(board[0][0]); // Checks the third column
    else if (checkEqual([board[0][0], board[1][1], board[2][2]])) win(board[0][0]); // Checks the first diagonal
    else if (checkEqual([board[2][0], board[1][1], board[0][2]])) win(board[2][0]); // Checks the second diagonal
    else if (turnNumber == 9) win(0); // Ends the game if there is a draw
    
    if (!gameOver) turnNumber ++; // Advances the turn number while the game is not over
}

function win(winner) {
    if (winner == 1) {
        playerOneWins ++; 
        previousLoser = 2;
        let name = "oneWins";
        setCookie(name);
    }
    else if (winner == 2) {
        playerTwoWins ++;
        previousLoser = 1;
        let name = "twoWins";
        setCookie(name);
    } 
    gameOver = 1;

}

function checkEqual(row) { // Checks if the input array is equal at all elements
    if(row[0] == row[1] && row[1] == row[2]) return true; 
    return false; 
}

function reset() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    currentPlayer = previousLoser;
    turnNumber = 1; 
    gameOver = 0;
}

function setCookie(name) {
    deleteCookie(name);
    if (name==="oneWins") {
        document.cookie = name + "=" + getPlayerOneWins() + ";";
    } else if (name==="twoWins") {
        document.cookie = name + "=" + getPlayerTwoWins() + ";";
    }
}

function getCookie(name) {
    let cname = name + "=";
    let cookie = decodeURIComponent(document.cookie);
    let win = cookie.split(';');
    for(var i = 0; i < win.length; i++) {
        var c = win[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return " ";
}

function deleteCookie(name) {
    document.cookie = name + "=;expires= Thu, 01 Jan 1970 00:00:00 UTC;";
}
