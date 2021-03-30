import React, {useContext, useState} from "react";
import PlayerContext from "../helpers/PlayerContext";
import {Button} from "react-bootstrap";

const BoardMiddle = ({ movePlayer, currentAction }) => {
  const {players, currentPlayer} = useContext(PlayerContext);
  const [rolledNumber, setRolledNumber] = useState('⚀');

  const rollDie = () => {
    const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const index = Math.floor(dice.length * Math.random());
    const rolledNumber = dice[index];
    setRolledNumber(rolledNumber);
    movePlayer(index + 1);
  }

  const gridValue = players.length * 2 > 5 ?
    {gridColumn: "2 / " + (players.length * 2), gridRow: "2 / " + (players.length * 2)} :
    {gridColumn: "2 / 5", gridRow: "2 / 5"};

  return (
    <div
      className="board-middle"
      // this style tag dynamically sets the middle of the board to take up the full width/height of inner space
      // to prevent the width from changing depdning on length of player name, declare this anywhere else
      // for example, use the library that lets you declare css per component (react pixel maker - heroku)
      style={
        gridValue
      }
    >
      {
        players.map(player => (
          player.number === currentPlayer ?
            <div key={player.number}>
              <h3>
                {player.name}, roll the die!
              </h3>
              {currentAction ?
                <span>{player.name + ", " + currentAction}</span>
                : null
              }
            </div>
          : null
        ))
      }
      <span className="die">{rolledNumber}</span>
      <Button
        className="btn-light"
        style={
          {fontSize: "20px", cursor: "pointer"}
        }
        onClick={rollDie}>
        Roll
      </Button>
    </div>
  )
};

export default BoardMiddle;


