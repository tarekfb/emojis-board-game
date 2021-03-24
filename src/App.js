import './App.css';
import React, {useState} from "react";

import Game from './containers/Game';
import PlayerContext from './PlayerContext';
import NumberOfPlayers from "./containers/NumberOfPlayers";
import PlayerNames from "./containers/PlayerNames";
import Characters from "./containers/Characters";
import Actions from "./containers/Actions";
import Player from "./component/Player";

// separate file?
const defaultActions = {
  1: "Take 1 drink",
  2: "Do something",
  3: "Do something else"
}

const stages = [
  "nbrOfPlayers",
  "playerNames",
  "characters",
  "actions",
  "game",
  "postGame"
];

const startGame = () => {

};

function App() {
  const [players, setPlayers] = useState([]);
  const [actions, setActions] = useState(defaultActions);
  const [stage, setStage] = useState(stages[0]);

  const advanceStage = () => {
    let i = stages.indexOf(stage);
    setStage(stages[i + 1])
    console.log(players)
  };

  const assumeDefaultSetup = (nbrOfPlayers) => {
    const emojis = [
      "🙃",
      "🥳",
      "🤯",
      "🥶",
      "🤑"
    ];

    const defaultPlayers = [];

    for (let i = 1; i < nbrOfPlayers + 1; i++) {
      const player = {
        number: i,
        name: `Player_${i}`,
        character: emojis[i - 1]
      }
      defaultPlayers.push(player);
    }
    setPlayers(defaultPlayers);
    setStage('game');
  };

  const renderSwitch = (component) => {
    switch(component) {
      case 'nbrOfPlayers':
        return <NumberOfPlayers advanceStage={advanceStage} assumeDefaultSetup={assumeDefaultSetup} />;
      case 'playerNames':
        return <PlayerNames advanceStage={advanceStage} />;
      case 'characters':
        return <Characters advanceStage={advanceStage}/>;
      case 'actions':
        return <Actions advanceStage={advanceStage} actions={actions}/>;
      case 'game':
        return <Game
          actions={actions}
          advanceStage={advanceStage}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <PlayerContext.Provider value={{ players, setPlayers }}>
        <Player />
        {renderSwitch(stage)}
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
