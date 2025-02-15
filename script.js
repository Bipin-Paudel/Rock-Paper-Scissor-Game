let choices = document.querySelectorAll('.box')

let uScore= document.querySelector('#user-score');
let cScore= document.querySelector('#comp-score');
let message= document.querySelector('#msg');

let compScore=0;
let userScore=0;


const showWinner =(userWin) =>{
    if (userWin)
    { 
       
        console.log("you won the match");
        userScore++;
       uScore.innerHTML=userScore;
       message.innerText="You win";

    }
    else{
        console.log("computer won the match");
        compScore++;
        cScore.innerHTML=compScore;
        message.innerText="You lose";
    }

}

const drawGame =() =>
{
    console.log("game was draw");
    message.innerText="Game was draw. Play again";
}

const playGame = (userChoice) =>{
    console.log('user choice is',userChoice);
    let compChoice =genCompChoice();

    console.log('computer choice is',compChoice);

    if(userChoice==compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        
        if(userChoice=='rock') 
        {
          userWin = compChoice=="paper"? false : true;
        }
        else if(userChoice=='paper')
        {
            userWin = compChoice=="scissors"? false : true;
        }
        else{
            userWin= compChoice=="rock" ?false : true;
         }

         showWinner(userWin);
    }

    
}

const genCompChoice = () =>{

    let option= ["rock","paper","scissors"];
   let cpChoice = Math.floor(Math.random()*3);

   let compChoice = option[cpChoice];
    return compChoice;
   
}



choices.forEach((choice) =>{
   choice.addEventListener("click",()=>{
     const userChoice = choice.getAttribute("id");

     playGame(userChoice);

     

   });


});