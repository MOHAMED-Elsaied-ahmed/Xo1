let sequere = [];
let trurn = "x";
let title = document.getElementById("title");
//end
function end(num1, num2, num3) {
  title.innerHTML = `${sequere[num1]} win`;
  document.getElementById("item" + num1).style.background = "#000";
  document.getElementById("item" + num2).style.background = "#000";
  document.getElementById("item" + num3).style.background = "#000";

  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

// winer
function winer() {
  for (let i = 1; i < 10; i++) {
    sequere[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    sequere[1] == sequere[2] &&
    sequere[2] == sequere[3] &&
    sequere[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    sequere[1] == sequere[4] &&
    sequere[4] == sequere[7] &&
    sequere[1] != ""
  ) {
    end(1, 4, 7);
  } else if (
    sequere[2] == sequere[5] &&
    sequere[5] == sequere[8] &&
    sequere[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    sequere[3] == sequere[6] &&
    sequere[6] == sequere[9] &&
    sequere[3] != ""
  ) {
    end(3, 6, 9);
  } else if (
    sequere[4] == sequere[5] &&
    sequere[5] == sequere[6] &&
    sequere[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    sequere[7] == sequere[8] &&
    sequere[8] == sequere[9] &&
    sequere[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    sequere[1] == sequere[5] &&
    sequere[5] == sequere[9] &&
    sequere[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    sequere[3] == sequere[5] &&
    sequere[5] == sequere[7] &&
    sequere[3] != ""
  ) {
    end(3, 5, 7);
  }
}
function turn(id) {
  let element = document.getElementById(id);
  if (trurn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    trurn = "o";
    title.innerHTML = "o";
    title.style.fontSize = "50px";
  } else if (trurn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    trurn = "x";
    title.innerHTML = "x";
  }
  winer();
}
