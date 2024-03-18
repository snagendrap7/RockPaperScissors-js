let playerstat=document.getElementById("player");
let Computerstat=document.getElementById("computer");
let resultdis=document.getElementById("result");
let rockbtn=document.querySelectorAll(".buttons");

let player;
let computer;
let result;

rockbtn.forEach(button=>button.addEventListener('click',()=>{
   player=button.textContent;
   computerres();
   result=resultstat(player,computer);

   playerstat.innerHTML="Player:"+player;
   Computerstat.innerHTML="Computer:"+computer;
   resultdis.innerHTML="Result:"+result;

}))

function computerres(){
    let num=Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            computer= "ROCK";
            break;
        case 2:
            computer= "PAPER";
            break;
        case 3:
            computer= "SCISSORS";
            break;
        
    }
}

function resultstat(player,computer){
     if(player==computer){
        // console.log(computer,player==computer);
        return "Draw";
     }
     else if(computer=="ROCK"){
        console.log(computer,player=="PAPER");
        return player=="PAPER" ? "YOU WIN" : "YOU LOSE";
     }
     else if(computer=="PAPER"){
        // console.log(computer,player=="SCISSORS");
        return player=="SCISSORS" ? "YOU WIN" : "YOU LOSE";
     }
     else if(computer=="SCISSORS"){
        // console.log(computer,player=="ROCK");
        return player=="ROCK" ? "YOU WIN" : "YOU LOSE";
     }
}

