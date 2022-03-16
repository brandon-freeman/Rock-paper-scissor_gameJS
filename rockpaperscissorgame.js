
const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'User chose rock, computer chose paper so the computer won!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'User chose paper, computer chose scissors so the computer won!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'User chose scissors, computer chose rock so the computer won!';   
    } else {
      return 'Congratulations You won!'
    };
  };
   const playGame = () => {
    const UserChoice = getUserChoice('scissors');
    const ComputerChoice = getComputerChoice();
    console.log('You threw: ' + UserChoice);
    console.log('The computer threw:' + ComputerChoice);
  };
  
  console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
  