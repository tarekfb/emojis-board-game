import React, {useContext, useState} from "react";

import BoardMiddle from '../components/BoardMiddle';
import PlayerContext from "../Contexts/PlayerContext";
import { fetchRandomAction } from "../helpers/Actions";

const Game = () => {
  const { players, setPlayers, currentPlayer, setCurrentPlayer } = useContext(PlayerContext);
  const [ currentAction, setCurrentAction ] = useState("");
  const squares = generateSquares();

  let playerLocations = [];
  if (squares.length > 0) {
    playerLocations = players.map(player => (
      squares[player.location % squares.length]
    ));
  }

  const movePlayer = (number) => {
    let tmpPlayers = players;

    tmpPlayers.forEach(player => {
      if (player.number === currentPlayer)
        player.location = player.location + number;
    });

    setPlayers(tmpPlayers);

    if (currentPlayer + 1 > players.length)
      setCurrentPlayer(1);
      else {
      setCurrentPlayer(currentPlayer + 1);
      setCurrentAction(fetchRandomAction()); 
    }

  }

  function generateSquares() {
    let gridSize = 5;
    if (players.length * 2 > 5)
      gridSize = players.length * 2;
    const squares = [{
      row: 1,
      col: 1,
      type: 'start'
    }];

    let i = 1;
    let row = 1;
    let col = 2;
    const total_squares = (gridSize * 2 + ((gridSize - 2) * 2));
    while (squares.length < total_squares) {
      const square = {
        row, col
      };

      // if (i % 2 !== 0) {
      //   square.type = player_1.pawn;
      // } else if (i % 2 === 0) {
      //   square.type = player_2.pawn;
      // }

      // if (i % 3 === 0) {
      //   square.type = "face-off";
      // }

      squares.push(square);
      i++;

      if (i < gridSize) {
        col ++;
      } else if (i < 2 * gridSize - 1) {
        row ++;
      } else if (i < 3 * gridSize - 2) {
        col --;
      } else {
        row --;
      }
    }
    return squares;
  };

  return (
    <div className="game-board">
      {
        squares.map((square, i) => (
          <div
            style={{
              gridRow: square.row,
              gridColumn: square.col,
            }}
            key={i}
            className="game-square">
            {
              square.type !== 'start' ?
                <span>⬛</span> :  // mostly used to keep grids from changing size
                                  // if this span size > character size, then the grid depends on this span for size
                'start'
            }
          </div>
        ))
      }
      {
        playerLocations.map((location, i) => {
          const player = players[i];
          return (
            <div
              key={player.number}
              style={{
                gridRow: location.row,
                gridColumn: location.col
              }}
              className="player-avatar">
                <span>{player.character}</span>
            </div>
          )
        })
      }
     <BoardMiddle squares={squares} movePlayer={movePlayer} currentAction={currentAction} />
    </div>
  )
};

export default Game;


