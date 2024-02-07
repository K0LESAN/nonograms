function generatorRows() {
  const records =
    JSON.parse(localStorage.getItem('k32d04sXgxnd312bd-records')) || [];
  const copySortedRecords = [].concat(records).sort((a, b) => b.time - a.time);
  const rows = [];

  for (const record of copySortedRecords) {
    const { name, size, time } = record;
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const sizeCell = document.createElement('td');
    const timeCell = document.createElement('td');

    row.classList.add('modal-score__row');
    nameCell.classList.add('modal-score__cell');
    sizeCell.classList.add('modal-score__cell');
    timeCell.classList.add('modal-score__cell');

    nameCell.textContent = name;
    sizeCell.textContent = `${size}x${size}`;
    timeCell.textContent = `${minutes}:${seconds}`;

    row.append(nameCell, sizeCell, timeCell);
    rows.push(row);
  }

  return rows;
}

export default function () {
  const table = document.querySelector('.modal-score');
  const tableBody = document.querySelector('.modal-score__tbody');

  tableBody.innerHTML = '';
  tableBody.append(...generatorRows());

  table.classList.add('open');

  return 0;
}
