let A1 = document.querySelector(".A1");
let tile = document.querySelector(".tile");
let clicked_button;
turn = "x";
flag = 0;
function reply_click(clicked_id) {
  clicked_button = document.getElementById(clicked_id);
  console.log("clicked");
  if (
    (turn === "x") &
    (clicked_button.innerHTML != '<img src="assets/x.svg">') &
    (clicked_button.innerHTML != '<img src="assets/o.svg">')
  ) {
    clicked_button.innerHTML = setx();
    turn = "o";
    flag++;
    game();
  } else if (
    (turn === "o") &
    (clicked_button.innerHTML != '<img src="assets/x.svg">') &
    (clicked_button.innerHTML != '<img src="assets/o.svg">')
  ) {
    clicked_button.innerHTML = seto();
    turn = "x";
    flag++;
    game();
  } else {
    alert("Can't choose an already selected tile");
  }
}

function setx() {
  return '<img src="assets/x.svg">';
}

function seto() {
  return '<img src="assets/o.svg">';
}

function game() {
  //Check if horizontal win
  if (
    (document.getElementById("A1").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("A2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("A3").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  } else if (
    (document.getElementById("B1").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B3").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  } else if (
    (document.getElementById("C1").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C3").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  }
  if (
    (document.getElementById("A1").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("A2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("A3").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  } else if (
    (document.getElementById("B1").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B3").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  } else if (
    (document.getElementById("C1").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C3").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  }
  //Check if vertical win
  if (
    (document.getElementById("A1").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B1").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C1").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  } else if (
    (document.getElementById("A2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C2").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  } else if (
    (document.getElementById("A3").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B3").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C3").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  }

  if (
    (document.getElementById("A1").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B1").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C1").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  } else if (
    (document.getElementById("A2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C2").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  } else if (
    (document.getElementById("A3").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B3").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C3").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  }
  //Check if cross win
  else if (
    (document.getElementById("A3").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C1").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  } else if (
    (document.getElementById("A1").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/o.svg">') &
    (document.getElementById("C3").innerHTML === '<img src="assets/o.svg">')
  ) {
    alert("O won the games");
    endGame();
  } else if (
    (document.getElementById("A3").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C1").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  } else if (
    (document.getElementById("A1").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("B2").innerHTML === '<img src="assets/x.svg">') &
    (document.getElementById("C3").innerHTML === '<img src="assets/x.svg">')
  ) {
    alert("X won the games");
    endGame();
  } else if (flag >= 9) {
    alert("Its a draw!");
    endGame();
  }
}

function endGame() {
  flag = 0;
  document.getElementById("A1").innerHTML = '<img src="">';
  document.getElementById("B1").innerHTML = '<img src="">';
  document.getElementById("C1").innerHTML = '<img src="">';
  document.getElementById("A2").innerHTML = '<img src="">';
  document.getElementById("B2").innerHTML = '<img src="">';
  document.getElementById("C2").innerHTML = '<img src="">';
  document.getElementById("A3").innerHTML = '<img src="">';
  document.getElementById("B3").innerHTML = '<img src="">';
  document.getElementById("C3").innerHTML = '<img src="">';
}
