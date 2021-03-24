import React, {useState} from "react";

import NumberOfPlayers from "./NumberOfPlayers";
import PlayerNames from "./PlayerNames";
import Characters from './Characters';
import Player from "../component/Player";
import Actions from "./Actions";

const stages = [
  "nbrOfPlayers",
  "playerNames",
  "characters",
  "actions",
];

// need to change set of nbr of players
// should probably use context for these, as top level component needs to know
const GamePreparation = () => {
  const [stage, setStage] = useState(stages[0]);

  const advanceStage = () => {
    let i = stages.indexOf(stage);
    setStage(stages[i + 1])
    console.log("index is " + stages.indexOf(stage));
    console.log("stages length is" + stages.length);
    if (stages.indexOf(stage + 1) === stage.length){
      console.log("equal");
    }
  };

  return (
    <div className="gamePreparation">
        <Player />
        {stage === "nbrOfPlayers" ? <NumberOfPlayers advanceStage={advanceStage} /> : null}
        {stage === "playerNames" ? <PlayerNames advanceStage={advanceStage} /> : null}
        {stage === "characters" ? <Characters advanceStage={advanceStage}/> : null}
        {stage === "actions" ? <Actions advanceStage={advanceStage}/> : null}
    </div>
  )
};

export default GamePreparation;