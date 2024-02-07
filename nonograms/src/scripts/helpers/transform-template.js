function helper(lineGameField, getElement) {
  const initialTemplate = [];
  const length = lineGameField.length;
  const getter = getElement
    ? (cell) => cell
    : (cell) => Number(cell.getAttribute('data-status')) || 0;

  for (let i = 0; i < 5; i++) {
    const line = [];

    for (let j = 0; j < length; j++) {
      const localArr = lineGameField[j].children;

      for (let k = 0; k < 5; k++) {
        line.push(getter(localArr[k + 5 * i]));
      }
    }

    initialTemplate.push(line);
  }

  return initialTemplate;
}

export default function (gameField, getElement = false) {
  const localArr = [];
  const gameFieldLength = gameField.children.length;
  const coeff = Math.sqrt(gameFieldLength);
  let index = 0;

  while (index < gameFieldLength) {
    localArr.push(
      ...helper(
        Array.from(gameField.children).slice(index, index + coeff),
        getElement
      )
    );
    index += coeff;
  }

  return localArr;
}
