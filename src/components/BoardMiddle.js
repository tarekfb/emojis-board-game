import React, {useContext, useState} from "react";
import PlayerContext from "../helpers/PlayerContext";
import {Button} from "react-bootstrap";


const BoardMiddle = ({ currentAction, setCurrentAction, squares }) => {
  const { players, setPlayers, currentPlayer, setCurrentPlayer } = useContext(PlayerContext);
  const [rolledNumber, setRolledNumber] = useState('⚀');

  const movePlayer = (number) => {
    console.log("move played was called and numberis: " + number);
  }

  const rollDie = () => {
    const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const index = Math.floor(dice.length * Math.random());
    const rolledNumber = dice[index];
    setRolledNumber(rolledNumber);

    if (currentPlayer + 1 > players.length)
      setCurrentPlayer(1);
    else
      setCurrentPlayer(currentPlayer + 1);
    movePlayer(index + 1, squares);
  }

  /*
    grid-column: 2 / 5;
  grid-row: 2 / 5;
  */

  return (
    <div
      className="board-middle"
       // this style tag dynamically sets the middle of the board to take up the full width/height of inner space
      style={
        players.length * 2 > 5 ?
        {gridColumn: "2 / " + (players.length * 2), gridRow: "2 / " + (players.length * 2)} :
        {gridColumn: "2 / 5", gridRow: "2 / 5"}
      }
    >
      {
        players.map(player => (
          player.number === currentPlayer ? <h3 key={player.number}>{player.name}, roll the die!</h3> : null
        ))
      }
      <span className="die">{rolledNumber}</span>
      <Button
        className="btn-light"
        style={
          {fontSize: "30px", cursor: "pointer"}
        }
        onClick={rollDie}>
        Roll
      </Button>
    </div>
  )
};

export default BoardMiddle;


