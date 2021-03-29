import React, { useContext } from "react";

import BoardMiddle from '../components/BoardMiddle';
import PlayerContext from "../helpers/PlayerContext";

// this component has errors: location is unknown
// no location property has been implemented for player
const Game = ({  }) => {
  const { players } = useContext(PlayerContext);
  const squares = generateSquares();

  // let playerLocations = [];
  // if (squares.length > 0) {
  //   playerLocations = players.map(player => (
  //     squares[player.location % squares.length]
  //   ));
  // }

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

      if (i % 2 !== 0) {
        //square.type = player_1.pawn;
      } else if (i % 2 === 0) {
        //square.type = player_2.pawn;
      }

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
                '.' :
                '.'
            }
          </div>
        ))
      }
      {/*{*/}
      {/*  playerLocations.map((location, i) => {*/}
      {/*    const player = players[i];*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        key={player.number}*/}
      {/*        style={{*/}
      {/*          gridRow: location.row,*/}
      {/*          gridColumn: location.col*/}
      {/*        }}*/}
      {/*        className="player-avatar">*/}
      {/*          <span>player.character</span>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  })*/}
      {/*}*/}
     <BoardMiddle  squares={squares} />
    </div>
  )
};

export default Game;


