const boardEl = document.querySelector(".board");
const keyboardEl = document.querySelector(".keyboard");
const popUp = document.querySelector(".popup");

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["BACKSPACE", "Z", "X", "C", "V", "B", "N", "M", "ENTER"],
];

const board = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const targetWord = "APPLE";

let currentRow = 0;
let currentColumn = 0;
let gameOver = false;

const checkMatch = (i, j, cell) => {
  if (i < currentRow) {
    const letter = board[i][j];

    const key = Array.from(document.querySelectorAll(".key")).find(
      (k) => k.textContent === letter,
    );

    if (targetWord[j] === letter) {
      cell.classList.add("correct");
      if (key) {
        key.classList.remove("present");
        key.classList.add("correct");
      }
    } else if (targetWord.includes(letter)) {
      cell.classList.add("present");
      if (key && !key.classList.contains("correct")) {
        key.classList.add("present");
      }
    } else {
      cell.classList.add("absent");
      if (key) {
        key.classList.add("absent");
      }
    }
  }
};

const renderBoard = () => {
  boardEl.innerHTML = "";

  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < board[0].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = board[i][j];

      checkMatch(i, j, cell);

      row.appendChild(cell);
    }

    boardEl.appendChild(row);
  }
};

const buildKeyboard = () => {
  keyboardEl.innerHTML = "";

  for (let i = 0; i < keys.length; i++) {
    const row = document.createElement("div");
    row.classList.add("keyboard-row");

    for (let j = 0; j < keys[i].length; j++) {
      const keyName = keys[i][j];
      const key = document.createElement("div");
      key.classList.add("key");
      key.textContent = keyName;

      key.addEventListener("click", () => {
        handleClick(keyName);
      });

      row.appendChild(key);
    }

    keyboardEl.appendChild(row);
  }
};

const handleClick = (key) => {
  if (gameOver) return;

  if (key === "BACKSPACE") {
    if (currentColumn === 0) return;
    board[currentRow][currentColumn - 1] = "";
    currentColumn--;
    renderBoard();
  } else if (key === "ENTER") {
    if (currentColumn < 5) {
      alert("Not enough letters!");
      return;
    }

    const currentGuess = board[currentRow].join("");

    currentRow++;
    currentColumn = 0;
    renderBoard();

    if (currentGuess === targetWord) {
      gameOver = true;
      setTimeout(() => {
        document.getElementById("title").textContent = "You won!";
        document.getElementById("message").textContent = "Congratulations";
        popUp.classList.remove("hidden");
      }, 300);
      return;
    }

    if (currentRow === 6) {
      gameOver = true;
      setTimeout(() => {
        document.getElementById("title").textContent = "You lost!";
        document.getElementById("message").textContent = "Out of guesses";
        popUp.classList.remove("hidden");
      }, 300);
      return;
    }
  } else {
    if (currentColumn > 4) return;
    board[currentRow][currentColumn] = key;
    currentColumn++;
    renderBoard();
  }
};

buildKeyboard();
renderBoard();
