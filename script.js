let Game=[
'rock','paper' ,'scissor'

]


let  = document.querySelector(".playerchoice")
let playerchoiceElement = document.querySelector(".playerchoice")
let computerturn = document.querySelector(".computerturn")

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor =document.getElementById("scissor")
let playerScore=0;
let computerScore=0;



rock.addEventListener("click", () => {
    computerChoice()
   
playerchoiceElement.innerText = Game[0]
})





paper.addEventListener("click", () => {
    computerChoice()
    
playerchoiceElement.innerText = Game[1]
})




scissor.addEventListener("click", () => {

    computerChoice()
   
playerchoiceElement.innerText = Game[2]
})





function computerChoice ()
{
    let random =  Math.floor(Math.random() * Game.length);
    //console.log(random)
    let computerChoiceElement = Game[random];


    

   
    if(playerchoiceElement.innerText == Game[0] && computerChoiceElement == Game[2]){
        console.log("player won")
    }
    if(playerchoiceElement  === Game[1] && computerChoiceElement === Game[0]){
        console.log("player won")
    }
    if(playerchoiceElement  === Game[2] && computerChoiceElement === Game[1]){
        console.log("player won")
    }
    
    //computer choosing
    
    
    if(playerchoiceElement  === Game[0] && computerChoiceElement === Game[1]){
        console.log("Computer won")
    }
    if(playerchoiceElement  === Game[1] && computerChoiceElement === Game[2]){
        console.log("Computer won")
    }
    if(playerchoiceElement  === Game[2] && computerChoiceElement === Game[0]){
        console.log("Computer won")
    }
    
    console.log(computerChoiceElement);
}

   








