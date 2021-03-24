import './App.css';
import React, {useState} from "react";

import GamePreparation from './containers/GamePreparation';
import PlayerContext from './PlayerContext';

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
];

const startGame = () => {

};

function App() {
  const [players, setPlayers] = useState([]);
  const [actions, setActions] = useState(defaultActions);

  return (
    <div className="App">
      <PlayerContext.Provider value={{ players, setPlayers }}>
        <GamePreparation stages={stages} actions={actions} setActions={setActions} startGame={startGame}/>
        <></>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
