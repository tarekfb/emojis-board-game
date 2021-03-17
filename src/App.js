import './App.css';
import React, {useState} from "react";

import GamePreparation from './containers/GamePreparation';
import PlayerContext from './PlayerContext';

function App() {
  const [players, setPlayers] = useState([]);
  //https://www.youtube.com/watch?v=lhMKvyLRWo0
  // context for this

  return (
    <div className="App">
      <PlayerContext.Provider value={{ players, setPlayers }}>
        <GamePreparation />
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
