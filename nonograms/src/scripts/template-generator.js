function generatorHints(arr) {
  function helper(localArr, status, pending) {
    if (!status) {
      return true;
    }

    if (pending) {
      localArr.push(1);
    } else {
      localArr[localArr.length - 1]++;
    }

    return false;
  }

  const { length } = arr;
  const topHints = [];
  const leftHints = [];

  for (let i = 0; i < length; i++) {
    let topPending = true;
    let leftPending = true;
    leftHints.push([]);
    topHints.push([]);

    for (let j = 0; j < length; j++) {
      leftPending = helper(leftHints.at(-1), arr[i][j], leftPending);
      topPending = helper(topHints.at(-1), arr[j][i], topPending);
    }
  }

  return { topHints, leftHints };
}

function generatorDOMHints(size, hints, direction) {
  const hintField = document.querySelector(`.${direction}-hints`);
  const countSubgrids = size / 5;
  const countHintLines = 5;
  let index = 0;

  for (let i = 0; i < countSubgrids; i++) {
    const subgrid = document.createElement('div');
    subgrid.classList.add(`${direction}-hints__subgrid`);
    hintField.append(subgrid);

    for (let j = 0; j < countHintLines; j++) {
      const hintLine = document.createElement('div');
      hintLine.classList.add(`${direction}-hints__item`);
      subgrid.append(hintLine);

      for (const hint of hints[index++]) {
        const hintText = document.createElement('div');
        hintText.classList.add(`${direction}-hints__text`);
        hintText.textContent = hint;
        hintLine.append(hintText);
      }
    }
  }
}

export default function (size, template) {
  const gameField = document.querySelector('.game-field');
  const countSubgrids = (size / 5) ** 2;
  const countLastSubgrids = size / 5;
  const { leftHints, topHints } = generatorHints(template);
  const countCells = 25;

  gameField.setAttribute('data-size', size);
  gameField.style.gridTemplateColumns = `repeat(${countLastSubgrids}, min-content)`;
  gameField.style.gridTemplateRows = `repeat(${countLastSubgrids}, min-content)`;

  for (let i = 0; i < countSubgrids; i++) {
    const subgrid = document.createElement('div');
    subgrid.classList.add('game-field__subgrid');
    gameField.append(subgrid);

    if ((i + 1) % countLastSubgrids === 0) {
      subgrid.setAttribute('data-last-right-subgrid', '');
    }

    for (let j = 0; j < countCells; j++) {
      const cell = document.createElement('div');
      cell.classList.add('game-field__item');
      subgrid.append(cell);
    }
  }

  Array.from(gameField.children)
    .slice(-countLastSubgrids)
    .forEach((subgrid) => {
      subgrid.setAttribute('data-last-bottom-subgrid', '');
    });

  generatorDOMHints(size, leftHints, 'left');
  generatorDOMHints(size, topHints, 'top');
}
