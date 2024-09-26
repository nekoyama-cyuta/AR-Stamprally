const cells = document.querySelectorAll('.cell');
const winningCombinations = [
  [0, 1, 2], // 横のライン
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // 縦のライン
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // 斜めのライン
  [2, 4, 6]
];

function checkBingo() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (cells[a].classList.contains('marked') &&
        cells[b].classList.contains('marked') &&
        cells[c].classList.contains('marked')) {
      return true;
    }
  }
  return false;
}

// マスをクリックしたときの処理
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.classList.add('marked');
    if (checkBingo()) {
      alert('Bingo!');
    }
  });
});
