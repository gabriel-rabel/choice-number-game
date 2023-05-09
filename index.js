
//Listening

const inputNumber = document.querySelector("#inputNumber");
const addNumber = document.querySelector("#addNumber");
const result = document.querySelector("#result");
const choiceComp = document.querySelector("#choiceComp");
const error = document.querySelector("#error");
const showCompChoice = document.querySelector("#showCompChoice");
const winScreen = document.querySelector("#winScreen");
const losecreen = document.querySelector("#winScreen");
const gameDiv = document.querySelector(".gameDiv");

//Computer Choice
let randomNumber = Math.floor(Math.random() * 10) + 1;
choiceComp.innerText = randomNumber;

//Player Choice and Number Comparasion
let countLifes = 0;
addNumber.addEventListener("click", () => {
if (randomNumber === +inputNumber.value){
        winScreen.classList.add("unhide");
        setTimeout(() => {
            document.location.reload();
          }, 5000);


    }else{
        result.innerText = "Infelizmente, você errou, tente novamente!";
        countLifes ++
        if(countLifes >= 5){
            loseScreen.classList.add("unhide");
            setTimeout(() => {
                document.location.reload();
              }, 5000);
        }
    }
    error.innerText = countLifes;
});

showCompChoice.addEventListener("click", () =>{
    choiceComp.classList.add("unhide");
});

//Count Result








