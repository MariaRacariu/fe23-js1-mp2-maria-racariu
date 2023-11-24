const buttonPaper = document.querySelector('#buttonPaper');
const buttonRock = document.querySelector('#buttonRock');
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


buttonPaper.addEventListener("click", (event) =>{
    const mySpecialNumber = 0;
    let randomNumber = Math.floor(Math.random()*3);
    myTestFunction(mySpecialNumber, randomNumber);
}); //Paper 0
// buttonRock.addEventListener("click", paperCheck); //Rock 1
// buttonScissors.addEventListener("click", paperCheck); //Scissor 2

function myTestFunction(mySpecialNumber, randomNumber){
    if(mySpecialNumber === randomNumber){
        console.log("It's a DRAW");
    }else if(mySpecialNumber > randomNumber){
        console.log("special number is higher");
    }else if(mySpecialNumber < randomNumber){
        console.log("special number is lower");
    }else{
        console.log("Nothing");
    }
}


// function paperCheck(){
//     function computerNumber(max){
//         return Math.floor(Math.random() * max);
//     }
//     const maxNumber = computerNumber(3);
// 
//     switch(maxNumber){
//         case 0:
//             console.log("Draw");
//             break;
//         case 1:
//             console.log("You WIN!");
//             break;
//         case 2:
//             console.log("You lose!");
//             break;
//         default:
//             break;
//     }
// }
















// ---Plan---
// I could make it so that when you click on a button it gives me it's value
// Then if the value is the same do nothing
// If it's a win and then if it's a lose

// ---Info---
// userInput(Paper)     == Paper        NULL    DRAW
// userInput(Rock)      == Paper        FALSE   User Lose
// userInput(Scissors)  == Paper        TRUE    User Win

// userInput(Paper)     == Rock         TRUE    User Win
// userInput(Rock)      == Rock         NULL    DRAW
// userInput(Scissors)  == Rock         FALSE   User Lose

// userInput(Paper)     == Scissors     TRUE    User Win
// userInput(Rock)      == Scissors     FALSE   User Lose
// userInput(Scissors)  == Scissors     NULL    DRAW

// ---Assignment Information Requirements --
// ◉ Allow user to use UserName and store in browser with UserName 
// and how many wins against the computer also allow User to Delete 
// data from browser cache.
// ◉ Create buttons for Paper Rock Scissors
// ◉ Create computer random choice which will be stored
// ◉ Show the computers choice and user choice on screen
// ◉ With every round show clearly who won
// ◉ Who wins will receive a point
// ◉ The points will be shown on the screen
// ◉ First to 3 points will win
// ◉ Show the winner clearly
// ◉ When the game is over allow user to restart