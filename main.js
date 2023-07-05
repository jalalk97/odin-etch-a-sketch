const gridWidth = 720;
let sideLength = 16;

const containerDiv = document.querySelector(".container");
containerDiv.style.width = `${gridWidth}px`;

function createGrid(sideLength) {
  containerDiv.innerHTML = "";
  const cells = Array(sideLength * sideLength);
  for (let i = 0; i < sideLength * sideLength; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("grid-cell");
    cellDiv.classList.add("square");
    cellDiv.style.width = `${(gridWidth - 2 * sideLength) / sideLength}px`;
    containerDiv.appendChild(cellDiv);
    cells[i] = cellDiv;
  }
  return cells;
}

createGrid(sideLength);
