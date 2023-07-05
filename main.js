const gridWidth = 720;
let sideLength = 16;

const sizeChangeButton = document.querySelector(".button");
const containerDiv = document.querySelector(".container");
containerDiv.style.width = `${gridWidth}px`;

function createGrid(sideLength) {
  containerDiv.innerHTML = "";
  const cells = Array(sideLength * sideLength);
  for (let i = 0; i < sideLength * sideLength; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("grid-cell");
    cellDiv.classList.add("square");
    cellDiv.classList.add("bg-light");
    cellDiv.style.width = `${(gridWidth - 2 * sideLength) / sideLength}px`;

    cellDiv.addEventListener("mouseover", (event) => {
      console.log(event.target);
      event.target.classList.replace("bg-light", "bg-dark");
      console.log(event.target);
    });

    containerDiv.appendChild(cellDiv);
    cells[i] = cellDiv;
  }
  return cells;
}

sizeChangeButton.addEventListener("click", () => {
  let newSize;
  do {
    newSize = prompt("How many squares per sides?");
  } while (isNaN(newSize) || newSize > 100 || newSize < 0);
  createGrid(newSize);
});

function main() {
  createGrid(sideLength);
}

main();
