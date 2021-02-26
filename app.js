// TIC TAC TOE GAME
const player1 = "<i class='fas fa-tint'></i>"; //symbole kyogre
const player2 = "<i class='fas fa-fire-alt'></i>"; //symbole groudon

let currentPlayer = player1;
let victory = false;
let counter = 0;
let counterParty = 0;
let counterVictory = 0;

// hide select-box and show playboard
const selectBox = document.querySelector(".select-box"),
  selectKyogre = selectBox.querySelector(".kyogrePlayer"),
  selectGroudon = selectBox.querySelector(".groudonPlayer"),
  game = document.querySelector(".game"),
  pokemon1 = document.querySelector(".pokemon1"),
  pokemon2 = document.querySelector(".pokemon2");

window.onload = () => {
  selectKyogre.onclick = () => {
    selectBox.classList.add("hide");
    game.classList.add("show");
    pokemon1.classList.add("showPokemon1");
    pokemon2.classList.add("showPokemon2");
    var audioK = document.getElementById("audioKyogre");
    audioK.volume = 0.2;
    audioK.play();
  };
  selectGroudon.onclick = () => {
    selectBox.classList.add("hide");
    game.classList.add("show");
    pokemon1.classList.add("showPokemon1");
    pokemon2.classList.add("showPokemon2");
    var audioG = document.getElementById("audioGroudon");
    audioG.volume = 0.2;
    audioG.play();
  };
};

// message
let msg = document.getElementById("message");
msg.innerHTML = "Let's battle !";

// Groudon score
let scoreG = document.getElementById("pointScoreGroudon");
scoreG.innerHTML = 10;
// Groudon score
let scoreK = document.getElementById("pointScoreKyogre");
scoreK.innerHTML = 10;

// Hit sound
var audioHit = document.getElementById("audioHit");

// Cells' array
let cells = document.getElementsByTagName("td");
let state = [];

for (let i = 0; i < cells.length; i++) {
  let cell = cells[i];
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "" && victory === false) {
      counter++;
      cell.innerHTML = currentPlayer;
      state[i] = currentPlayer;

      if (counter >= 5) {
        // line
        if (
          state[0] === currentPlayer &&
          state[0] === state[1] &&
          state[1] === state[2]
        ) {
          victory = true;
        }
        if (
          state[3] === currentPlayer &&
          state[3] === state[4] &&
          state[4] === state[5]
        ) {
          victory = true;
        }
        if (
          state[6] === currentPlayer &&
          state[6] === state[7] &&
          state[7] === state[8]
        ) {
          victory = true;
        }
        // column
        if (
          state[0] === currentPlayer &&
          state[0] === state[3] &&
          state[3] === state[6]
        ) {
          victory = true;
        }
        if (
          state[1] === currentPlayer &&
          state[1] === state[4] &&
          state[4] === state[7]
        ) {
          victory = true;
        }
        if (
          state[2] === currentPlayer &&
          state[2] === state[5] &&
          state[5] === state[8]
        ) {
          victory = true;
        }
        // diagonal
        if (
          state[0] === currentPlayer &&
          state[0] === state[4] &&
          state[4] === state[8]
        ) {
          victory = true;
        }
        if (
          state[2] === currentPlayer &&
          state[2] === state[4] &&
          state[4] === state[6]
        ) {
          victory = true;
        }
      }

      if (victory === true) {
        if (currentPlayer === player1) {
          msg.innerHTML = "Kyogre has won this turn !";
          scoreG.innerHTML--;
          // hitEffect();
        } else {
          msg.innerHTML = "Groudon has won this turn !";
          scoreK.innerHTML--;
          // hitEffect();
        }
      } else if (counter === 9 && victory === false) {
        msg.innerHTML = "Draw !";
      } else {
        // players switch ternary condition
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        msg.innerHTML = "It's " + currentPlayer + "'s turn";
      }
    }
  });
}

// function hitEffect() {
//   audioHit.volume = 0.1;
//   audioHit.play();
//   hitPokemon2 = document.getElementByClassName("pokemon2");
//   hitPokemon2.addClass("blink");
//   setTimeout(RemoveClass, 3000);
// }

// reset button
const reset = () => {
  counter = 0;
  victory = false;
  state = [];
  msg.innerHTML = "Let's battle !";
  // revoir cette ligne avec la sélection du pokemon !!!
  currentPlayer = player1;
  for (let cell of cells) {
    cell.innerHTML = "";
  }
};
document.querySelector("#reset").addEventListener("click", function (event) {
  event.preventDefault(); //block the reload event of the empty href
  counter = 0;
  reset();
});
