const container = document.querySelector(".grid-container");
const button = document.querySelector("#grid-size");
const resetButton = document.querySelector("#reset");

button.addEventListener("click", handleClick);
resetButton.addEventListener("click", resetClick);

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
        cell.classList.add("cell");
        row.appendChild(cell);
        cell.addEventListener("mouseenter", toggleColor);

        function toggleColor() {
          cell.classList.add("blk");
        }
      }

      container.appendChild(row);
    }
  } else {
    alert("Please enter a number from 0-64");
  }
}

function resetClick() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("blk");
  });
}
