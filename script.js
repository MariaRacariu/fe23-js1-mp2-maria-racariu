const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissor');

const buttonDeleteUser = document.querySelector('#deleteUser');
const nameContainer = document.querySelector('#userName');
const backgroundContainer = document.querySelector('.container');

const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
const currentInfo = document.querySelector('#outcomeInfo');

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

    let userPoints = 0;
    userScore.innerText = `${userPoints}`;

    let computerPoints = 0;
    computerScore.innerText = `${computerPoints}`;

function compareInputs(randomPCInput, userInput){
    const currentGame = `${randomPCInput} VS ${userInput}`;
    // Check Tie first
    if(randomPCInput === userInput){
        currentInfo.innerText = `${currentGame} It's a tie. No points awarded`;
        return;
    }
    
    // Check Rock, Paper and Scissors
    if(userInput === "Rock"){
        if(randomPCInput === "Scissors"){
            currentInfo.innerText = `${currentGame} ${localStorage.getItem("userNameStorage", "value")} wins!`;
            
            backgroundContainer.classList.remove('background-lose');
            backgroundContainer.classList.add('background-win');

            userPoints++;
            userScore.innerText = `${userPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }else{
            currentInfo.innerText = `${currentGame}  ${localStorage.getItem("userNameStorage", "value")} losses`;

            backgroundContainer.classList.remove('background-win');
            backgroundContainer.classList.add('background-lose');

            computerPoints++;
            computerScore.innerText = `${computerPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }
    }else if(userInput === "Paper"){
        if(randomPCInput === "Rock"){
            currentInfo.innerText = `${currentGame} ${localStorage.getItem("userNameStorage", "value")} wins`;

            backgroundContainer.classList.remove('background-lose');
            backgroundContainer.classList.add('background-win');

            userPoints++;
            userScore.innerText = `${userPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }else{
            currentInfo.innerText = `${currentGame} ${localStorage.getItem("userNameStorage", "value")} losses`;

            backgroundContainer.classList.remove('background-win');
            backgroundContainer.classList.add('background-lose');

            computerPoints++;
            computerScore.innerText = `${computerPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }
    }else if(userInput === "Scissors"){
        if(randomPCInput === "Paper"){
            currentInfo.innerText = `${currentGame} ${localStorage.getItem("userNameStorage", "value")} wins`;

            backgroundContainer.classList.remove('background-lose');
            backgroundContainer.classList.add('background-win');

            userPoints++;
            userScore.innerText = `${userPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }else{
            currentInfo.innerText = `${currentGame} ${localStorage.getItem("userNameStorage", "value")} losses`;

            backgroundContainer.classList.remove('background-win');
            backgroundContainer.classList.add('background-lose');

            computerPoints++;
            computerScore.innerText = `${computerPoints}`;

            gameScoreCheck(userPoints, computerPoints);
        }
    }
}

function gameScoreCheck(userPoints, computerPoints){
    if (userPoints === 3){
        alert(`${localStorage.getItem("userNameStorage", "value")} wins! Click ok to reset the game`);
        userPoints = 0;
        userScore.innerText = `${userPoints}`;
        computerPoints = 0;
        computerScore.innerText = `${computerPoints}`;
        location.reload();
        
    }else if (computerPoints === 3){
        alert(`${localStorage.getItem("userNameStorage", "value")} losses. Click ok to reset the game`);
        userPoints = 0;
        userScore.innerText = `${userPoints}`;
        computerPoints = 0;
        computerScore.innerText = `${computerPoints}`;
        location.reload();
    }
}