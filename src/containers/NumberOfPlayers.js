import React, {useContext} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import PlayerContext from "../PlayerContext";
import Player from "../component/Player";

const NumberOfPlayers = ({ advanceStage }) => {
  const { players, setPlayers } = useContext(PlayerContext);


  const setNumberOfPlayers = (number) => {
    let tmpPlayers = players;

    // Since we want player.number and player.name to always be >1
    // we start forloop at 1
    // But we still want number arg to be accurate, therefore check i < number + 1
    for (let i = 1; i < number + 1; i++) {
      const player = {
        number: i,
        name: `Player_${i}`,
      }
      tmpPlayers.push(player);
    }

    // Should be an easier way to do this
    // Especially since we don't care about history
    // Probably using ..players, etc
    setPlayers(tmpPlayers);

  };

  return (
    <div className="d-flex flex-column">
      <Player />
      <h1>How many players?</h1>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="For example: &quot;3&quot; "
          aria-label="number of players"
        />
      </InputGroup>

      <Button onClick={() => {
        advanceStage();
        setNumberOfPlayers(2);
        }
      }>Continue</Button>
    </div>
  )
};

export default NumberOfPlayers;