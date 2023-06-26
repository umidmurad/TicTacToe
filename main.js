var turnX = true;
var turnO = false;
var turnP = document.getElementById("turnP");
var turnSpan = document.getElementById("turn");
var winnerP = document.getElementById("winnerP");
var winnerName = document.getElementById("winner");
var cellClicked = false;
var board = document.getElementById("board");
var gameEnded = false;

function clickHandler(event) {
  // Check if a cell has already been clicked
  if (cellClicked) {
    return;
  }
  if (gameEnded) {
    return;
  }

  var cell = event.target;
  // Check if the cell is empty
  if (cell.innerHTML === "" && turnX && !turnO) {
    cellClicked = true;

    // Set the content of the cell to "X"
    cell.innerHTML = "X";
    cell.style.color = "red";

    // Change the turn indicator
    turnX = false;
    turnO = true;
    console.log("O's turn");
    turnSpan.innerHTML = "AI";
    turnSpan.style.color = "lightblue";
    whoWon();
  }
  if (!turnX && turnO) {
    // Find all the cells with the class "cell"
    var allCells = document.getElementsByClassName("cell");

    // Create an empty array to store the empty cells
    var emptyCells = [];

    // Loop through all the cells and check if they are empty
    for (var i = 0; i < allCells.length; i++) {
      if (allCells[i].innerHTML === "") {
        emptyCells.push(allCells[i]);
      }
    }

    // Check if there are any empty cells
    if (emptyCells.length > 0) {
      // Select a random empty cell from the array and proceed with placing the "O"
      var randomIndex = Math.floor(Math.random() * emptyCells.length);
      var randomCell = emptyCells[randomIndex];

      setTimeout(function () {
        // Place the "O" in the randomly selected empty cell
        randomCell.innerHTML = "O";
        randomCell.style.color = "lightblue";
        turnO = false;
        turnX = true;
        console.log("X's turn");
        turnSpan.innerHTML = "You";
        turnSpan.style.color = "red";
        cellClicked = false;
        whoWon();
      }, 500);
    } else {
      //Somebody wins here or it's a tie
      winnerP.style.display = "block";
      winnerName.innerHTML = "Umid";
      turnP.style.display = "none";
    }
  }
}

function whoWon() {
  var cell1 = document.getElementById("cell1").innerHTML;
  var cell2 = document.getElementById("cell2").innerHTML;
  var cell3 = document.getElementById("cell3").innerHTML;
  var cell4 = document.getElementById("cell4").innerHTML;
  var cell5 = document.getElementById("cell5").innerHTML;
  var cell6 = document.getElementById("cell6").innerHTML;
  var cell7 = document.getElementById("cell7").innerHTML;
  var cell8 = document.getElementById("cell8").innerHTML;
  var cell9 = document.getElementById("cell9").innerHTML;

  // Check if X or O won
  if (
    (cell1 === "X" && cell2 === "X" && cell3 === "X") ||
    (cell4 === "X" && cell5 === "X" && cell6 === "X") ||
    (cell7 === "X" && cell8 === "X" && cell9 === "X") ||
    (cell1 === "X" && cell4 === "X" && cell7 === "X") ||
    (cell2 === "X" && cell5 === "X" && cell8 === "X") ||
    (cell3 === "X" && cell6 === "X" && cell9 === "X") ||
    (cell1 === "X" && cell5 === "X" && cell9 === "X") ||
    (cell3 === "X" && cell5 === "X" && cell7 === "X")
  ) {
    winnerP.style.display = "block";
    winnerName.innerHTML = "You Won!";
    turnP.style.display = "none";
    endGame();
  } else if (
    (cell1 === "O" && cell2 === "O" && cell3 === "O") ||
    (cell4 === "O" && cell5 === "O" && cell6 === "O") ||
    (cell7 === "O" && cell8 === "O" && cell9 === "O") ||
    (cell1 === "O" && cell4 === "O" && cell7 === "O") ||
    (cell2 === "O" && cell5 === "O" && cell8 === "O") ||
    (cell3 === "O" && cell6 === "O" && cell9 === "O") ||
    (cell1 === "O" && cell5 === "O" && cell9 === "O") ||
    (cell3 === "O" && cell5 === "O" && cell7 === "O")
  ) {
    winnerP.style.display = "block";
    winnerName.innerHTML = "AI Won!";
    turnP.style.display = "none";
    endGame();
  } else if (
    // Check if all cells are filled (tie)
    Array.from(document.getElementsByClassName("cell")).every(function (cell) {
      return cell.innerHTML !== "";
    })
  ) {
    winnerP.style.display = "block";
    winnerName.innerHTML = "It is a tie!";
    turnP.style.display = "none";
    endGame();
  }
}

// Function to end the game
function endGame() {
  gameEnded = true;

  turnX = false;
  turnO = false;
  // Remove event listeners from the cells
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", clickHandler);
  }
}

// Buttons
function myWebsite() {
  window.location.href = "/";
}

function reset() {
  window.location.href = "/TicTacToe";
}
