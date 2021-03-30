function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function fetchRandomAction() {
  let action = actions[getRandomInt(actions.length)];
    switch (action) {
      case 'drink':
        return `${action} ${getRandomInt(5)}`;
      case 'give':
        return `${action} ${getRandomInt(5)}`;
      default:
        return action;
    }
}

const actions = [
  `drink`,
  `give`,
  'do something else',
];
export { fetchRandomAction };

