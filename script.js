const container = document.querySelector(".grid-container");
const button = document.querySelector("#grid-size");
const resetButton = document.querySelector("#reset");
const colorBoxes = document.querySelectorAll(".color-container .cell");
const colors = [
  "blk",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "cyan",
  "pink",
  "brown",
];

let selectedColor = "blk"; // Default color

button.addEventListener("click", handleClick);
resetButton.addEventListener("click", resetClick);

//assign color
colorBoxes.forEach((box) =>
  box.addEventListener("click", () => {
    selectedColor = Array.from(box.classList).find((c) => c != "cell");
  })
);

let choice;

function handleClick() {
  container.innerHTML = "";
  choice = parseInt(prompt("Enter the size of grid(range 0-64): "));
  if (!isNaN(choice) && choice > 0 && choice <= 64) {
    for (let j = 0; j < choice; j++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let i = 0; i < choice; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", "grid-cell");
        row.appendChild(cell);
        cell.addEventListener("mouseenter", toggleColor);

        function toggleColor() {
          colors.forEach((color) => {
            cell.classList.remove(color);
          });
          cell.classList.add(selectedColor);
        }
      }

      container.appendChild(row);
    }
  } else {
    alert("Please enter a number from 0-64");
  }
}

function resetClick() {
  const cells = document.querySelectorAll(".grid-cell");

  cells.forEach((cell) => {
    colors.forEach((color) => {
      cell.classList.remove(color);
    });
  });
}
