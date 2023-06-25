function clickXHandler(event) {
  // Get the clicked cell element
  var cell = event.target;

  // Check if the cell is empty
  if (cell.innerHTML === "") {
    // Set the content of the cell to "X"
    cell.innerHTML = "X";
    cell.style.color = "red";
  }
}

function clickOHandler(event) {
  // Get the clicked cell element
  var cell = event.target;

  // Check if the cell is empty
  if (cell.innerHTML === "") {
    // Set the content of the cell to "O"
    cell.innerHTML = "O";
    cell.style.color = "lightblue";
  }
}

function myWebsite() {
  window.location.href = "/";
}
