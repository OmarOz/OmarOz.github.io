const gameBoard = document.querySelector("#gameBoard");
const info = document.querySelector("#info");
const dynamic_island = document.getElementById("role_changer");
let dynamic_island_alter = "circle_dynamic_island";
let role = "cross";
let playstate = true;
let track = 11;
let remove_welcome = false;
let remove_roles = false;
//info.textContent = `${role}'s time`;
const cells = ["", "", "", "", "", "", "", "", ""];

function startGame() {
  cells.forEach((_a, index) => {
    let cell = document.createElement("div");
    cell.classList.add("square");
    cell.id = index;
    gameBoard.append(cell);
    cell.addEventListener("click", play);
  });
}
startGame();

function play(e) {
  if (!remove_welcome) {
    var welcome_rm = document.getElementById("role_changer");
    welcome_rm.remove();
    remove_welcome = true;
  }
  const display = document.createElement("div");
  display.classList.add(role);
  e.target.append(display);
  role = role === "cross" ? "circle" : "cross";
  //info.textContent=`${role}'s time`;

  if (playstate) {
    let notch = document.querySelector(".notch");
    dynamic_island_alter =
      dynamic_island_alter === "circle_dynamic_island"
        ? "cross_dynamic_island"
        : "circle_dynamic_island";
    let cross_dynamic_island = document.createElement("div");
    cross_dynamic_island.classList.add(dynamic_island_alter);
    cross_dynamic_island.id = track;
    notch.append(cross_dynamic_island);
    cross_dynamic_island.textContent = `${role}'s time`;
    let stID = (track - 1).toString();
    track++;
    console.log("stid" + stID);
    if (stID > "10") {
      var element_rm = document.getElementById(stID);
      element_rm.remove();
      console.log(`track: ${track}`);
    }
  }
  e.target.removeEventListener("click", play);
  console.log(e.target);
  winCheck();
  drawCheck();
}

function drawCheck() {
  const allSquares = document.querySelectorAll(".square");
  const winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let count = 0;
  winnings.forEach((arr) => {
    let draw;
    arr.forEach((pos) => {
      if (allSquares[pos].firstElementChild?.classList.contains("cross")) {
        count++;
      }
      if (allSquares[pos].firstElementChild?.classList.contains("circle")) {
        count++;
      }
    });
    console.log(count);
    if (count === 24) {
      draw = true;
    }

    if (draw) {
      if (!remove_roles) {
        let stID = (track - 1).toString();
        var welcome_rm = document.getElementById(stID);
        welcome_rm.remove();
        remove_roles = true;
      }

      info.textContent = `draw`;

      if (playstate) {
        let notch = document.querySelector(".notch");
        let cross_dynamic_island = document.createElement("div");
        cross_dynamic_island.classList.add("draw_dynamic_island");
        notch.append(cross_dynamic_island);
        cross_dynamic_island.textContent = info.textContent;
        playstate = false;
      }
      //allSquares.forEach( square => square.replaceWith(square.cloneNode(true)));
      role = "blank";

      return;
    }
  });
}

function winCheck() {
  const allSquares = document.querySelectorAll(".square");
  const winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winnings.forEach((arr) => {
    let cross_wins;
    let count = 0;
    arr.forEach((pos) => {
      if (allSquares[pos].firstElementChild?.classList.contains("cross")) {
        count++;
      }
    });
    if (count === 3) {
      cross_wins = true;
    }
    console.log(cross_wins);
    if (cross_wins) {
      if (!remove_roles) {
        let stID = (track - 1).toString();
        var welcome_rm = document.getElementById(stID);
        welcome_rm.remove();
        remove_roles = true;
      }

      info.textContent = `cross's win`;

      if (playstate) {
        let notch = document.querySelector(".notch");
        let cross_dynamic_island = document.createElement("div");
        cross_dynamic_island.classList.add("win_dynamic_island");
        notch.append(cross_dynamic_island);
        cross_dynamic_island.textContent = info.textContent;
        playstate = false;
      }
      role = "blank";
      //allSquares.forEach( square => square.replaceWith(square.cloneNode(true)));
      return;
    }
  });

  winnings.forEach((arr) => {
    let cross_wins;
    let count = 0;
    arr.forEach((pos) => {
      if (allSquares[pos].firstElementChild?.classList.contains("circle")) {
        count++;
      }
    });
    if (count === 3) {
      cross_wins = true;
    }
    console.log(cross_wins);
    if (cross_wins) {
      if (!remove_roles) {
        let stID = (track - 1).toString();
        var welcome_rm = document.getElementById(stID);
        welcome_rm.remove();
        remove_roles = true;
      }

      info.textContent = `circle's win`;

      if (playstate) {
        let notch = document.querySelector(".notch");
        let cross_dynamic_island = document.createElement("div");
        cross_dynamic_island.classList.add("win_dynamic_island");
        notch.append(cross_dynamic_island);
        cross_dynamic_island.textContent = info.textContent;
        playstate = false;
      }
      //allSquares.forEach( square => square.replaceWith(square.cloneNode(true)));
      role = "blank";
      return;
    }
  });
}
