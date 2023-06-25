var turnX = true;
var turnO = false;
var turnP = document.getElementById("turnP");
var turnSpan = document.getElementById("turn");
var winnerP = document.getElementById("winnerP");
var winnerName = document.getElementById("winner");
var cellClicked = false;

function clickHandler(event) {
  // Check if a cell has already been clicked
  if (cellClicked) {
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
      }, 500);
    } else {
      //Somebody wins here or it's a tie
      winnerP.style.display = "block";
      winnerName.innerHTML = "Umid";
      turnP.style.display = "none";
    }
  }
}

// Buttons
function myWebsite() {
  window.location.href = "/";
}

function reset() {
  window.location.href = "/";
}

