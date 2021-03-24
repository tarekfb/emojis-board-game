import React, {useState} from "react";

import NumberOfPlayers from "./NumberOfPlayers";
import PlayerNames from "./PlayerNames";
import Characters from './Characters';
import Player from "../component/Player";
import Actions from "./Actions";

const GamePreparation = ({ actions, startGame, stages }) => {
  const [stage, setStage] = useState(stages[0]);

  const advanceStage = () => {
    let i = stages.indexOf(stage);
    setStage(stages[i + 1])

    if (stages.indexOf(stage) === stages.length - 1){
      startGame();
    }
  };

  const renderSwitch = (component) => {
    switch(component) {
      case 'nbrOfPlayers':
        return <NumberOfPlayers advanceStage={advanceStage} />;
      case 'playerNames':
        return <PlayerNames advanceStage={advanceStage} />;
      case 'characters':
        return <Characters advanceStage={advanceStage}/>;
      case 'actions':
        return <Actions advanceStage={advanceStage} actions={actions}/>;
      default:
        return null;
    }
  };

  return (
    <div className="gamePreparation">
        <Player />
        {renderSwitch(stage)}
    </div>
  )
};

export default GamePreparation;