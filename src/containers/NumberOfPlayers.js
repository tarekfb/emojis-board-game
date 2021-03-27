import React, {useContext, useState} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import PlayerContext from "../PlayerContext";
import Player from "../component/Player";
import {isNumeric} from "../helpers/validation";

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
        }
        tmpPlayers.push(player);
      }
      // Should be an easier way to do this
      // Especially since we don't care about history
      // Probably using spread operator: ..players
      setPlayers(tmpPlayers);

      advanceStage();
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
          setNumberOfPlayers();
          }
        }
        className="mb-3">Continue</Button>
      <Button onClick={() => assumeDefaultSetup(3)}>Quick play - default setup</Button>
    </div>
  )
};

export default NumberOfPlayers;