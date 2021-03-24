import './App.css';
import React, {useState} from "react";

import GamePreparation from './containers/GamePreparation';
import PlayerContext from './PlayerContext';

const defaultActions = {
  1: "Take 1 drink",
  2: "Do something",
  3: "Do something else"
} //separate file?

function App() {
  const [players, setPlayers] = useState([]);
  const [actions, setActions] = useState(defaultActions);

  return (
    <div className="App">
      <PlayerContext.Provider value={{ players, setPlayers }}>
        <GamePreparation actions={actions} />
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
