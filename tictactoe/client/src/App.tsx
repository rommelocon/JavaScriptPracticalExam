import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Box from "./components/Box";
import { SERVER_URL } from "./constant";

function App() {
  const [gameInitialize, setGameInitialize] = useState<string[]>([]);
  const [winningAPICombo, setWinningAPICombo] = useState<number[][]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<string>("o");

  const initializeGame = async (): Promise<void> => {
    try {
      const res = await axios.get<string[]>(`${SERVER_URL}/game/gameinitial`);
      setGameInitialize(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const initializeWinCombo = async (): Promise<void> => {
    try {
      const res = await axios.get<number[][]>(
        `${SERVER_URL}/game/winningcombo`
      );
      setWinningAPICombo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initializeGame();
    initializeWinCombo();
  }, []);

  useEffect(() => {
    CheckWinner();
  }, [gameInitialize]);

  const resetGameBoard = async (): Promise<void> => initializeGame();
  //reset Board using Default Empty Arrays
  const onChangePlayer = (): void =>
    setSelectedPlayer((prevPlayer) => (prevPlayer === "o" ? "x" : "o"));
  const handleWin = (): void => {
    setTimeout(() => {
      resetGameBoard();
      alert(`${selectedPlayer.toUpperCase()} wins!`);
    }, 500);
  };
  const handleDraw = (): void => {
    setTimeout(() => {
      resetGameBoard();
      alert(`Draw`);
    }, 500);
  };

  function CheckWinner(): void {
    let wonByRound = false;

    winningAPICombo.forEach((_elem, index) => {
      const winningCombo = winningAPICombo[index];
      const a = gameInitialize[winningCombo[0]];
      const b = gameInitialize[winningCombo[1]];
      const c = gameInitialize[winningCombo[2]];

      if ([a, b, c].includes("")) return;
      if (a === b && b === c) {
        wonByRound = true;
        return;
      }
    });

    if (wonByRound) {
      handleWin();
      return;
    }

    if (!gameInitialize.includes("") && gameInitialize.length > 0) {
      handleDraw();
      return;
    }

    onChangePlayer();
  }

  function HandleBoxClick(e: React.MouseEvent<HTMLDivElement>): void {
    const boxIndex = parseInt(e.currentTarget.getAttribute("data-index")!);
    const selectedValue = gameInitialize[boxIndex];
    if (selectedValue) return;
    const newValue = [...gameInitialize];
    newValue[boxIndex] = selectedPlayer;
    setGameInitialize(newValue);
  }

  return (
    <>
      <div className="h-full p-8 text-slate-700 bg-gradient-to-l from-purple-500 to-purple-700">
        <h1 className="text-center text-4xl mb-3 font-display text-white">
          TicTacToe Game
        </h1>
        <div className="text-white grid grid-cols-3 gap-4 mx-auto w-96">
          {gameInitialize.map((player, index) => (
            <Box
              key={index}
              onClick={HandleBoxClick}
              index={index}
              player={player}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
