import './App.css';
import React, {useState} from "react";
import GamePreparation from './containers/GamePreparation';


function App() {
  const [players, setPlayers] = useState([]);
  //https://www.youtube.com/watch?v=lhMKvyLRWo0
  // context for this
  
  return (
    <div className="App">
      <GamePreparation />
    </div>
  );
}

export default App;
