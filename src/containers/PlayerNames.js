import React, {useContext, useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PlayerContext from "../PlayerContext";
import {isString} from "../helpers/validation";

const PlayerNames = ({ advanceStage }) => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [ playerNameInputValues, setPlayerNameInputValues ] = useState([]);

  useEffect(() => {
    let inputList = [];
    for (let i = 1; i < players.length + 1; i++) {
      inputList.push({["value" + i]: ""});
    }
    setPlayerNameInputValues(inputList);
  }, []) ;

  const updatePlayerNameInputValue = (event, playerNumber) => {
    let updatedValue = {["value" + playerNumber]: event.target.value};

    let tmpArray = playerNameInputValues;
    for (let i = 1; i < playerNameInputValues.length + 1 ; i++) {
      if (i === playerNumber)
        tmpArray[playerNumber - 1] = updatedValue;
    }
     setPlayerNameInputValues(tmpArray);
  };

  const setPlayerNames = () => {
    let tmpPlayers = players;

    let validated = true;
    for (let i = 0; i < playerNameInputValues.length; i++) {
      let tmpIndex = playerNameInputValues[i];

      if (isString(tmpIndex["value" + (i + 1)], 15)){
        tmpPlayers[i].name = tmpIndex["value" + (i + 1)];
        console.log(tmpIndex["value" + (i + 1)].length)
      } else
        validated = false;
    }

    if (validated){
      setPlayers(tmpPlayers);
      advanceStage();
    } else {
      alert("not validated");
    }
  };

  return (
    <div className="d-flex flex-column">
      <h1>Player names?</h1>
      {
        players.map(player => (
          <div key={player.number}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id={`player${player.number}`}>Player {player.number}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={event => updatePlayerNameInputValue(event, player.number)}
                value={playerNameInputValues["value" + player.number]}
                placeholder="Kalle Kula"
                aria-label="Name"
              />
            </InputGroup>
          </div>
        ))
      }
      <Button
        onClick={ () => {
          setPlayerNames();
          }
        }
      >Continue</Button>
    </div>
  )
};

export default PlayerNames;
