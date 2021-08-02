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
        //Computer Option
        const computerOption = ['rock', 'paper', 'scissiors'];

        options.forEach((option) => {

            option.addEventListener('click', function() {
                //Computer Choice
                const ComputerNumber = Math.floor(Math.random() * 3);
                const ComputerChoice = computerOption[ComputerNumber];
                console.log(ComputerChoice);
                compareHands();
            });
        })
    }
    const compareHands = (playerchoice, computerchoice) => {

    }


    //Call the start game function 
    startGame();
    PlayMatch();
}

//Function to start a game
game();