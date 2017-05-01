var prompt = require('prompt-promise');

const TTT = () => {
  console.log('Welcome to TicTacToe!');
  let player1;
  let player2;
  const board = [['_|', '_', '|_'],['_|', '_', '|_'],[' |', '  ', '| ']];
  
  const grabUserNames = () => {
    return prompt('Please enter player1\'s name: ')
      .then(player1Name => {
        player1 = player1Name;
        console.log('Welcome ' + player1);
        return prompt('Please enter the name for player2: ')
      })
      .then(player2Name => {
        player2 = player2Name;
        console.log('Welcome ' + player2);
        return player2Name;
      })
      .catch(err => console.error(`Something went wrong grabbing names with err = ${err}`));
  }

  const buildBoard = () => {
    board.forEach(level => console.log(level));
  }

  grabUserNames()
    .then(buildBoard);
  
  //TODO: build out logic for actually playing, since I spent the whole time figuring out how to build something
  // that interacts with the command line
}

TTT();