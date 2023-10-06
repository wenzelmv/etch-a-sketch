const DEFAULT_SIZE = 8;

const grid = document.getElementById("grid");
const gridSizeSlider = document.getElementById("grid-size-slider");
const gridWidth = grid.clientWidth;
let gridSize = DEFAULT_SIZE;

createGrid(gridSize);

// Create a div that will be a box in the grid
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${gridWidth / size}px`;
  div.style.height = `${gridWidth / size}px`;

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
  });

  return div;
}

// Creates a grid that is of size
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid.appendChild(createDiv(size));
    }
  }
}

// When the user clicks on the button, open the popup
function showPopup() {
  let popup = document.getElementById("popup-input");
  popup.classList.toggle("show");
}

// Reset Grid
function resetGrid() {
  let gridBoxes = grid.querySelectorAll("div");
  gridBoxes.forEach((gridBox) => (gridBox.style.backgroundColor = "#ffffff"));
}

function setPointerToEraser() {
  let cells = grid.querySelectorAll("div");
  cells.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#fff";
    })
  );
}

function setNewGridSize(size) {}
