import React, {useState} from "react";

import NumberOfPlayers from "./NumberOfPlayers";
import PlayerNames from "./PlayerNames";
import CharacterSelect from './CharacterSelect';
import Player from "../component/Player";

const stages = [
  "nbrOfPlayers",
  "playerNames",
  "characterSelect",
  "questions",
];


// need to change set of nbr of players
// should probably use context for these, as top level component needs to know
const GamePreparation = () => {
  const [stage, setStage] = useState(stages[0]);

  const advanceStage = () => {
    let i = stages.indexOf(stage);
    setStage(stages[i + 1])
  };

  return (
    <div className="gamePreparation">
      <Player />

      {stage === "nbrOfPlayers" ? <NumberOfPlayers advanceStage={advanceStage} /> : null}
      {stage === "playerNames" ? <PlayerNames advanceStage={advanceStage} /> : null}
      {
        stage === "characterSelect" ?
        <CharacterSelect
          advanceStage={advanceStage}
        />
        : null
      }
    </div>
  )
};

export default GamePreparation;