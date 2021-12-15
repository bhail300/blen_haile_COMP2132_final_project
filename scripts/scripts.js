/*SHOW RULES POP-UP*/
const rule_box   = document.getElementById("rule-box");
const close_rule = document.getElementById("close-rule");
const rule_btn   = document.getElementById("rule-btn");

rule_box.style.display = "none";

//click show rules button fade in
$(rule_btn).click(function(){
   setTimeout( function(){
     $(rule_box).fadeIn(400);
    });  
});

//click close button fade out
$(close_rule).click(function(){
    setTimeout( function(){
      $(rule_box).fadeOut(400);
     });  
 });


/*DICE GAME JS CODE*/
const current1 = document.getElementById("current1");
const total1   = document.getElementById("total1");
const current2 = document.getElementById("current2"); 
const total2   = document.getElementById("total2");
const roll_btn = document.getElementById("roll-btn")
const new_btn  = document.getElementById("new-btn")

//global variables
let min = 1
let max = 6
let counter = 0;
let totalScoreForPlayer = 0
let totalScoreForOpponent = 0
let currentScoreForPlayer = 0
let currentScoreForOpponent = 0

//dice object
class dice {
  constructor(value){
    this.value = value;
  }
}

//function to generate random number
function rollDice(randNumb){
  randNumb = Math.floor(Math.random() * (max - min + 1) ) + min;
  return randNumb;
  }

//function that starts a game of dice
function playGameOfDice(){
    //function for calculating player's scores and updating dice images
    function playerRound(){
      //function for calculating player's current score
      function calculateScoreForPlayer(dice1, dice2){
      dice1 = rollDice();
      dice2 = rollDice();
      if(dice1 == 1 || dice2 == 1){
        current1.innerHTML = `<p>Your score this round: ${currentScoreForPlayer = 0} </p>`;
      }
      else if(dice1 == dice2){
        current1.innerHTML = `<p>Your score this round: ${currentScoreForPlayer = (dice1 + dice2)* 2} </p>`;
        total1.innerHTML   = `<p>Your total score: ${totalScoreForPlayer + (dice1 + dice2)* 2}</p>`;
      }
      else{
        current1.innerHTML = `<p>Your score this round: ${currentScoreForPlayer = (dice1 + dice2)} </p>`;
        total1.innerHTML   = `<p>Your total score: ${totalScoreForPlayer + (dice1 + dice2)}</p>`;
      } 
      //function that changes dice images for player
      function changeImgForPlayer(){
        document.getElementById("left_dice1").src = "images/dice" + dice1 + ".png";
        document.getElementById("left_dice2").src = "images/dice" + dice2 + ".png";
      }
      changeImgForPlayer();
      return currentScoreForPlayer;
      }
      //calculate player total score
      function totalScorePlayer(){
        totalScoreForPlayer += currentScoreForPlayer
        return totalScoreForPlayer
      }
      calculateScoreForPlayer();
      totalScorePlayer();
    }
    playerRound();

    //function for calculating opponent's scores and updating dice images
    function opponentRound(){
    //function for calculating opponent's current score
    function calculateScoreForOpponent(dice3, dice4){
      dice3 = rollDice();
      dice4 = rollDice();
        if(dice3 == 1 || dice4 == 1){
          current2.innerHTML = `<p>Opponent score this round: ${currentScoreForOpponent = 0}</p>`;
        }else if(dice3 == dice4){
          current2.innerHTML = `<p>Opponent score this round: ${currentScoreForOpponent = (dice3 + dice4)* 2}</p>`;
          total2.innerHTML   = `<p>Opponent total score: ${totalScoreForOpponent + (dice3 + dice4)* 2}</p>`;
        }else{
          current2.innerHTML = `<p>Opponent score this round: ${currentScoreForOpponent = dice3 + dice4}</p>`;
          total2.innerHTML   = `<p>Opponent total score: ${totalScoreForOpponent + (dice3 + dice4)}</p>`;
        }
          //function that changes dice images for opponent
          function changeImgForOpponent(){
            document.getElementById("right_dice1").src = "images/dice" + dice3 + ".png";
            document.getElementById("right_dice2").src = "images/dice" + dice4 + ".png";
          }
          changeImgForOpponent();
        return currentScoreForOpponent;
        }
          //function that calculates opponent's total score
          function totalScoreOpponent(){
            totalScoreForOpponent += currentScoreForOpponent;
            return totalScoreForOpponent;
          }
      calculateScoreForOpponent();
      totalScoreOpponent();
    }
    opponentRound();
}

function clickTrack() {
    counter++;
}

function resetCounter() {
  counter = 0;
}

//function that resets all values and starts a new game
function newGameOfDice(){
  current1.innerHTML = `<p>Your score this round: ${currentScoreForPlayer = 0} </p>`;
  total1.innerHTML   = `<p>Your total score: ${totalScoreForPlayer = 0}</p>`;
  current2.innerHTML = `<p>Opponent score this round: ${currentScoreForOpponent = 0}</p>`;
  total2.innerHTML   = `<p>Opponent total score: ${totalScoreForOpponent = 0}</p>`;
  document.getElementById("left_dice1").src = "images/dice1.png";
  document.getElementById("left_dice2").src = "images/dice1.png";
  document.getElementById("right_dice1").src = "images/dice1.png";
  document.getElementById("right_dice2").src = "images/dice1.png";
}

//instantiated a dice object
const dieForPlayer = new dice(0);
const dieForOpponent = new dice(0);

//players score
current1.innerHTML = `<p>Your score this round: ${0} </p>`;
total1.innerHTML   = `<p>Your total score: ${0}</p>`;

//opponents score
current2.innerHTML = `<p>Opponent score this round: ${0}</p>`;
total2.innerHTML   = `<p>Opponent total score: ${0}</p>`;

//roll dice button
roll_btn.addEventListener('click', function(){
  playGameOfDice();
  clickTrack();
  if(counter == 3){
    if(totalScoreForPlayer > totalScoreForOpponent){
      $(document).ready(function(){
        setTimeout( function(){
          $(end_box).fadeIn(200);
         });  
     }); 
    }else if(totalScoreForOpponent > totalScoreForPlayer){
      $(document).ready(function(){
        setTimeout( function(){
          $(end_box).fadeIn(200);
         });  
     });
    }else if(totalScoreForPlayer == totalScoreForOpponent){
      $(document).ready(function(){
        setTimeout( function(){
          $(end_box).fadeIn(200);
         });  
     });
    }
    resetCounter();
  }
});

//new game button
new_btn.addEventListener('click', function(){
  newGameOfDice();
  resetCounter();
});


/*END GAME POP-UP*/
const end_box   = document.getElementById("end-box");
const close_end = document.getElementById("close-end");

end_box.style.display = "none";

//click close button fade out
$(close_end).click(function(){
  setTimeout( function(){
    $(end_box).fadeOut(100);
   });  
});