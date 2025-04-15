const container = document.querySelector('.grid-container');
const button = document.querySelector('#grid-size');
button.addEventListener('click', handleClick);

let choice;
function handleClick() {
  container.innerHTML = '';
  choice = parseInt(prompt('Enter the size of grid: '));
  for (let j = 0; j < choice; j++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (i = 0; i < choice; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}
