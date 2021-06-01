import './App.css';
import React, {useState} from "react";

import Game from './containers/Game';
import PlayerContext from './Contexts/PlayerContext';
import NumberOfPlayers from "./containers/NumberOfPlayers";
import PlayerNames from "./containers/PlayerNames";
import Characters from "./containers/Characters";
import Actions from "./containers/Actions";
import Lobby from "./containers/Lobby";
import Player from "./components/Player";
import { fetchRandomName } from './helpers/Names';
import { fetchRandomCharacter } from './helpers/Characters';
import Navbar from "./components/Navbar";
import ThemeContext from "./Contexts/ThemeContext";

const stages = [
  "lobby",
  "nbrOfPlayers",
  "playerNames",
  "characters",
  "actions",
  "game",
  "postGame"
];

function initializePlayersList(number) {
  let list = [];
  
  for (let i = 1; i < number + 1; i++) {
    const player = {
      number: i,
      name: "", // set to empty string, or to `Player_${i}`? 
      location: 0,
      character: ''
    }
    list[i - 1] = player;
  }
  return list;
}

function App() {
  const [players, setPlayers] = useState([]);
  const [stage, setStage] = useState(stages[0]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const advanceStage = () => {
    setCurrentPlayer(1); // reset between each stage
    let i = stages.indexOf(stage);
    setStage(stages[i + 1]);
  };

  const determineStage = () => {
    // the fooking thing doesn't work
    if (players.length === 0)
      return 'lobby';
    else {
      players.forEach(player => {
        if (player.name.length === 0){
          console.log(player.number + ": player name is empty");
          return 'playerNames';
        }
        else if (player.character.length === 0){
          console.log(player.number + ": player char is empty");
          return 'characters';
        }
      });
    };
  }

  const assumeDefaultSetup = (nbrOfPlayers) => {
    const defaultPlayers = [];

    for (let i = 1; i < nbrOfPlayers + 1; i++) {
      const player = {
        number: i,
        name: fetchRandomName(),
        character: fetchRandomCharacter(),
        location: 0
      }
      defaultPlayers.push(player);
    }
    setPlayers(defaultPlayers);
    setStage('game');
  };

  const restart = () => {
    setPlayers([]);
    setStage(stages[0]);
  };

  const renderSwitch = (component) => {
    switch(component) {
      case 'lobby':
        return <Lobby advanceStage={advanceStage}/>;
      case 'nbrOfPlayers':
        return <NumberOfPlayers advanceStage={advanceStage} assumeDefaultSetup={assumeDefaultSetup} initializePlayersList={initializePlayersList} />;
      case 'playerNames':
        return <PlayerNames advanceStage={advanceStage} />;
      case 'characters':
        return <Characters advanceStage={advanceStage}/>;
      case 'actions':
        return <Actions advanceStage={advanceStage}/>;
      case 'game':
        return <Game
          advanceStage={advanceStage}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar restart={restart}/>
      <PlayerContext.Provider value={{ players, setPlayers, currentPlayer, setCurrentPlayer}}>
        {/*<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>*/}
          {/* {stage !== 'lobby' ? <Player className=""/> : null} */}
          <Player className=""/>
          {renderSwitch(stage)}
        {/*</ThemeContext.Provider>*/}
      </PlayerContext.Provider>
    </div>
  );
};

export default App;
