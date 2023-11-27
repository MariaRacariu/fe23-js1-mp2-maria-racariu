const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissor');

const buttonDeleteUser = document.querySelector('#deleteUser');
const nameContainer = document.querySelector('#userName');
const backgroundContainer = document.querySelector('.container');

const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
const currentInfo = document.querySelector('#outcomeInfo');
const currentInfoUser = document.querySelector('#outcomeInfoUser');

// Checks if userNameStore is undefined or null
if(localStorage.getItem("userNameStorage") === undefined || localStorage.getItem("userNameStorage") === null){
    userNameInput = prompt("Please input a username");
    localStorage.setItem("userNameStorage", userNameInput); 
    nameContainer.innerText = localStorage.getItem("userNameStorage", "value");
    buttonDeleteUser.addEventListener('click', deleteUserName);
}else{
    buttonDeleteUser.addEventListener('click', deleteUserName);
    nameContainer.innerText = localStorage.getItem("userNameStorage", "value");
}
function deleteUserName(){
    nameContainer.innerText = "";
    localStorage.removeItem("userNameStorage");
    location.reload();
}
// Add event listener on all buttons and event to return random number
const gameOptions = ["Rock", "Paper", "Scissors"];
// Add event Listener for all the buttons and assign variable
buttonRock.addEventListener("click", (event)=>{
    let randomPCInput = gameOptions[Math.floor(Math.random()*3)];
    console.log(randomPCInput);

    const userInput = "Rock";
    console.log(userInput);

    compareInputs(randomPCInput, userInput);
});
buttonPaper.addEventListener("click", (event)=>{
    let randomPCInput = gameOptions[Math.floor(Math.random()*3)];
    console.log(randomPCInput);

    const userInput = "Paper";
    console.log(userInput);

    compareInputs(randomPCInput, userInput);
});
buttonScissors.addEventListener("click", (event)=>{
    let randomPCInput = gameOptions[Math.floor(Math.random()*3)];
    console.log(randomPCInput);

    const userInput = "Scissors";
    console.log(userInput);

    compareInputs(randomPCInput, userInput);
});
// Create user and computer point variables to keep trac
let userPoints = 0;
userScore.innerText = `${userPoints}`;

let computerPoints = 0;
computerScore.innerText = `${computerPoints}`;

// Function for checking wins, loses and tie
function compareInputs(randomPCInput, userInput){
    const currentGame = `${randomPCInput} VS ${userInput}`;
    // Check Tie first
    if(randomPCInput === userInput){
        currentInfo.innerText = `${currentGame}`;
        currentInfoUser.innerText = "It's a tie. No points awarded";
        return;
    }
    
    // Check Rock, Paper and Scissors
    if(userInput === "Rock"){
        if(randomPCInput === "Scissors"){
            currentInfo.innerText = `${currentGame}`;
            currentInfoUser.innerText = `${localStorage.getItem("userNameStorage", "value")} Wins!`;
            backgroundContainer.classList.remove('background-lose');
            backgroundContainer.classList.add('background-win');
            
            userPoints++;
            userScore.innerText = `${userPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }else{
            currentInfo.innerText = `${currentGame} `;
            currentInfoUser.innerText = `${localStorage.getItem("userNameStorage", "value")} Loses`;

            backgroundContainer.classList.remove('background-win');
            backgroundContainer.classList.add('background-lose');

            computerPoints++;
            computerScore.innerText = `${computerPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }
    }else if(userInput === "Paper"){
        if(randomPCInput === "Rock"){
            currentInfo.innerText = `${currentGame}`;
            currentInfoUser.innerText = `${localStorage.getItem("userNameStorage", "value")} Wins!`;

            backgroundContainer.classList.remove('background-lose');
            backgroundContainer.classList.add('background-win');

            userPoints++;
            userScore.innerText = `${userPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }else{
            currentInfo.innerText = `${currentGame}`;
            currentInfoUser.innerText = `${localStorage.getItem("userNameStorage", "value")} Loses`;

            backgroundContainer.classList.remove('background-win');
            backgroundContainer.classList.add('background-lose');

            computerPoints++;
            computerScore.innerText = `${computerPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }
    }else if(userInput === "Scissors"){
        if(randomPCInput === "Paper"){
            currentInfo.innerText = `${currentGame}`;
            currentInfoUser.innerText = `${localStorage.getItem("userNameStorage", "value")} Wins!`;

            backgroundContainer.classList.remove('background-lose');
            backgroundContainer.classList.add('background-win');

            userPoints++;
            userScore.innerText = `${userPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }else{
            currentInfo.innerText = `${currentGame}`;
            currentInfoUser.innerText = `${localStorage.getItem("userNameStorage", "value")} Loses`;

            backgroundContainer.classList.remove('background-win');
            backgroundContainer.classList.add('background-lose');

            computerPoints++;
            computerScore.innerText = `${computerPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }
    }
}
// Function to end the game when user or computer reaches 3 points
function gameScoreCheck(userPoints, computerPoints){
    if (userPoints === 3){
        alert(`${localStorage.getItem("userNameStorage", "value")} wins! Click ok to reset the game`);
        userPoints = 0;
        userScore.innerText = `${userPoints}`;
        computerPoints = 0;
        computerScore.innerText = `${computerPoints}`;
        location.reload();
        
    }else if (computerPoints === 3){
        alert(`${localStorage.getItem("userNameStorage", "value")} loses. Click ok to reset the game`);
        userPoints = 0;
        userScore.innerText = `${userPoints}`;
        computerPoints = 0;
        computerScore.innerText = `${computerPoints}`;
        location.reload();
    }
}