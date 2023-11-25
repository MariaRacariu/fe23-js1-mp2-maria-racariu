const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissor');

const buttonDeleteUser = document.querySelector('#deleteUser');

// Create heading for the username
const nameContainer = document.createElement("h1");
document.body.appendChild(nameContainer);

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

function compareInputs(randomPCInput, userInput){
    const currentGame = `${randomPCInput} VS ${userInput}`;
    // Check Tie first
    if(randomPCInput === userInput){
        alert(`${currentGame} IT'S A TIE`);
        return;
    }
    
    // Check Rock, Paper and Scissors
    if(userInput === "Rock"){
        if(randomPCInput === "Scissors"){
            alert(`${currentGame} You win`);
        }else{
            alert(`${currentGame} You lose`);
        }
    }else if(userInput === "Paper"){
        if(randomPCInput === "Rock"){
            alert(`${currentGame} You win`);
        }else{
            alert(`${currentGame} You lose`);
        }
    }else if(userInput === "Scissors"){
        if(randomPCInput === "Paper"){
            alert(`${currentGame} You win`);
        }else{
            alert(`${currentGame} You lose`);
        }
    }
}