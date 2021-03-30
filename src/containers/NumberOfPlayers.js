import React, {useContext, useState} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import PlayerContext from "../helpers/PlayerContext";
import Player from "../components/Player";
import {isNumeric} from "../helpers/Validation";

const NumberOfPlayers = ({ advanceStage, assumeDefaultSetup }) => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [ nbrOfPlayersInput, setNbrOfPlayersInput ] = useState("");

  const setNumberOfPlayers = () => {

    let value = nbrOfPlayersInput.replace(/\s/g,''); // strip of whitespace
    if (isNumeric(value, 1)){
      let tmpPlayers = players;

      // Since we want player.number and player.name to always be >1
      // we start forloop at 1
      // But we still want number arg to be accurate, therefore check i < number + 1
      for (let i = 1; i < parseInt(nbrOfPlayersInput) + 1; i++) {
        const player = {
          number: i,
          name: `Player_${i}`,
          location: 0
        }
        tmpPlayers.push(player);
      }
      // Should be an easier way to do this
      // Especially since we don't care about history
      // Probably using spread operator: ..players
      setPlayers(tmpPlayers);
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

      <Button
        onClick={() => {
          // advanceStage() is called in fun below
          if (setNumberOfPlayers())
            advanceStage();
          }
        }
        className="mb-3">Continue</Button>
      <Button onClick={() => {
        if (setNumberOfPlayers())
          assumeDefaultSetup(parseInt(nbrOfPlayersInput));
        }
      }>Quick play - default setup</Button>
    </div>
  )
};

export default NumberOfPlayers;