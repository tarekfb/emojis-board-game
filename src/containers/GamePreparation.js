import React, {useState} from "react";

import NumberOfPlayers from "./NumberOfPlayers";
import PlayerNames from "./PlayerNames";
import CharacterSelect from './CharacterSelect';

const stages = [
  "nbrOfPlayers",
  "playerNames",
  "characterSelect",
  "questions",
];

const setCharacter = (character) => {

  console.log(character);

  // if (this.state.players.find(player => player.char === pawn))
  //   alert("No");
  // else {
  //   this.setState((prevState) => ({
  //     currentPlayerSelect: prevState.currentPlayerSelect + 1,
  //     players: [
  //       ...prevState.players, {
  //         number: prevState.currentPlayerSelect,
  //         pawn,
  //       }
  //     ],
  //     showSetPlayerNames: false,
  //     readyToStart: prevState.currentPlayerSelect === 2 ? true : false,
  //   }));
  // }
};

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
      {

      }
      {stage === "nbrOfPlayers" ? <NumberOfPlayers advanceStage={advanceStage} /> : null}
      {stage === "playerNames" ? <PlayerNames advanceStage={advanceStage} /> : null}
      {
        stage === "characterSelect" ?
        <CharacterSelect
          advanceStage={advanceStage}
          setCharacter={setCharacter}
        />
        : null
      }
    </div>
  )
};

export default GamePreparation;