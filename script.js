let turns = ["red", "blue"];
let turn = "red";
let box = [
  "box0",
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
];
let score = {
  red: 0,
  blue: 0,
};
let modalTitleElement = document.querySelector(".modal-title");
let activeModalBtn = document.querySelector("#active-modal");
let turnMarkElement = document.querySelector("#turn-mark");

function choose(id) {
  let boxElement = document.querySelector(`#${id}`);
  boxElement.style.backgroundColor = turn;
  let boxIndex = box.indexOf(id);
  box[boxIndex] = turn;
  boxElement.disabled = true;
  setTimeout(() => {
    checkWinner();
  }, 0);
}

function checkWinner() {
  if (
    (box[0] === turn && box[3] === turn && box[6] === turn) ||
    (box[0] === turn && box[1] === turn && box[2] === turn) ||
    (box[0] === turn && box[4] === turn && box[8] === turn) ||
    (box[2] === turn && box[5] === turn && box[8] === turn) ||
    (box[6] === turn && box[7] === turn && box[8] === turn) ||
    (box[2] === turn && box[4] === turn && box[6] === turn) ||
    (box[1] === turn && box[4] === turn && box[7] === turn) ||
    (box[3] === turn && box[4] === turn && box[5] === turn)
  ) {
    if (turn === "red") {
      score.red += 1;
    } else {
      score.blue += 1;
    }
    modalTitleElement.innerText = `${turn} Wins!`;
    activeModalBtn.click();
    reset();
  } else if (box.join(" ").indexOf("box") === -1) {
    modalTitleElement.innerText = "Ties!";
    activeModalBtn.click();
    reset();
  } else {
    turn = turns.filter((t) => {
      return t !== turn;
    })[0];
    turnMarkElement.innerHTML = `<${turn}>${turn}'s turn</${turn}>`;
  }
}

function reset() {
  turn = "red";
  box = [
    "box0",
    "box1",
    "box2",
    "box3",
    "box4",
    "box5",
    "box6",
    "box7",
    "box8",
  ];
  box.forEach((each) => {
    let boxElement = document.querySelector(`#${each}`);
    boxElement.style.backgroundColor = "wheat";
    boxElement.disabled = false;
  });
  let redElement = document.querySelector("#score-red");
  redElement.innerText = score.red;
  let blueElement = document.querySelector("#score-blue");
  blueElement.innerText = score.blue;
}
