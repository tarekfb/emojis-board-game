import React, {useContext, useState} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import PlayerContext from "../Contexts/PlayerContext";
import Player from "../components/Player";
import {isNumeric} from "../helpers/Validation";

const NumberOfPlayers = ({ advanceStage, assumeDefaultSetup, initializePlayersList }) => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [ nbrOfPlayersInput, setNbrOfPlayersInput ] = useState("");

  const setNumberOfPlayers = () => {
    let value = nbrOfPlayersInput.replace(/\s/g,''); // strip off whitespace
    if (isNumeric(value, 1)){
      setPlayers(initializePlayersList(parseInt(nbrOfPlayersInput)));
      return true;
    } else {
     alert("not validated");
     return false;
    }
  };

  const updateNbrOfPlayersInputValue = (event) => {
    setNbrOfPlayersInput(event.target.value);
  };

  return (
    <div className="d-flex flex-column">
      <Player />
      <h1>How many players?</h1>

      <InputGroup className="mb-3">
        <FormControl
          value={nbrOfPlayersInput}
          onChange={event => updateNbrOfPlayersInputValue(event)}
          placeholder="For example: &quot;3&quot; "
          aria-label="number of players"
        />
      </InputGroup>

      <div className="container d-flex flex-row justify-content-around">
      <Button
        onClick={() => {
            if (setNumberOfPlayers())
              advanceStage();
          }
        }
        className="w-50 mr-3">Continue</Button>
      <Button
        className="w-50"
        onClick={() => {
          if (setNumberOfPlayers())
            assumeDefaultSetup(parseInt(nbrOfPlayersInput));
          }
      }>Default setup</Button>
      </div>
    </div>
  )
};

export default NumberOfPlayers;