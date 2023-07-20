const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//! Sending an array of Game Initials Here
const GAME_STATE_INITIAL = ["", "", "", "", "", "", "", "", ""]; //plan to transfer this to NODE JS
//! Sending an array of Winning Combinations Here
const WINNING_COMBINATION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

app.get("/game/gameinitial", (req, res) => {
  res.send(GAME_STATE_INITIAL);
});

app.get("/game/winningcombo", (req, res) => {
  res.send(WINNING_COMBINATION);
});

app.listen(8000, () => {
  console.log("Server started in 8000");
});
