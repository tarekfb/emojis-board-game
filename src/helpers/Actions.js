function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function fetchRandomAction() {
  let action = actions[getRandomInt(0, actions.length + 1)];
  return action;
}

const actions = [
  `drink ${getRandomInt(5)}`,
  `give ${getRandomInt(5)}`,
  `drink ${getRandomInt(5)}`,
  `give ${getRandomInt(5)}`
];
export { fetchRandomAction };

