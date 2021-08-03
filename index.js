const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start a game
    const startGame = () => {
            const playButton = document.querySelector('.intro button');
            const introScreen = document.querySelector('.intro');
            const match = document.querySelector('.match');
            playButton.addEventListener('click', () => {
                introScreen.classList.add("fadeOut");
                match.classList.add("fadeIn");
            });
        }
        //Play a match
    const PlayMatch = () => {
        const options = document.querySelectorAll('.options button');
        const PlayerHand = document.querySelector('.player-hand');
        const ComputerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
                hand.addEventListener('animationend', function() {
                    this.style.animation = '';
                })
            })
            //Computer Option
        const computerOption = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {

            option.addEventListener('click', function() {
                //Computer Choice
                const ComputerNumber = Math.floor(Math.random() * 3);
                const ComputerChoice = computerOption[ComputerNumber];
                console.log(ComputerChoice);

                //Time delay 2s 
                setTimeout(() => {
                    //Runnig winner name 
                    compareHands(this.textContent, ComputerChoice);


                    //Update Image 
                    PlayerHand.src = `./pic/${this.textContent}.png`;
                    ComputerHand.src = `./pic/${ComputerChoice}.png`;
                }, 2000);


                //Animation
                PlayerHand.style.animation = "shakePlayer 2s ease";
                ComputerHand.style.animation = "shakeComputer 2s ease";
            });
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerchoice, computerchoice) => {
        const winner = document.querySelector('.winner');
        //Check for tie
        if (playerchoice === computerchoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for Rock 
        if (playerchoice === 'rock') {
            if (computerchoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerchoice === 'paper') {
            if (computerchoice === 'rock') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check For Scissors 
        if (playerchoice === 'scissors') {
            if (computerchoice === 'paper') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }


    //Call the start game function 
    startGame();
    PlayMatch();
}

//Function to start a game
game();