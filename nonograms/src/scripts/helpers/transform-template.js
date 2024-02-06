function helper(lineGameField) {
  const initialTemplate = [];
  const length = lineGameField.length;

  for (let i = 0; i < 5; i++) {
    const line = [];

    for (let j = 0; j < length; j++) {
      const localArr = lineGameField[j].children;

      for (let k = 0; k < 5; k++) {
        line.push(Number(localArr[k + 5 * i].getAttribute('data-status')) || 0);
      }
    }

    initialTemplate.push(line);
  }

  return initialTemplate;
}

export default function (gameField) {
  const localArr = [];
  const gameFieldLength = gameField.children.length;
  const coeff = Math.sqrt(gameFieldLength);
  let index = 0;

  while (index < gameFieldLength) {
    localArr.push(
      ...helper(Array.from(gameField.children).slice(index, index + coeff))
    );
    index += coeff;
  }

  return localArr;
}
