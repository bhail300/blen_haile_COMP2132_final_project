/*INSTRUCTION POP-UP*/
const rule_box   = document.querySelector("#rule-box");
const close_rule = document.querySelector("#close-rule");
const rule_btn   = document.querySelector("#rule-btn");

rule_box.style.display = "none";

$(rule_btn).click(function(){
   setTimeout( function(){
     $(rule_box).fadeIn(400);
    });  
});

$(close_rule).click(function(){
    setTimeout( function(){
      $(rule_box).fadeOut(400);
     });  
 });


/*Score JS code*/
const current1 = document.querySelector("#current1");
const total1   = document.querySelector("#total1");
const current2 = document.querySelector("#current2");
const total2   = document.querySelector("#total2");
const roll_btn = document.querySelector("#roll-btn")
const new_btn  = document.querySelector("#new-btn")

//dice object
class dice {
  constructor(value){
    this.value = value;
  }
}

//roll dice function
dice.prototype.rollDice = function() {
  let min = 1;
  let max = 6;
  
  n1 = Math.floor(Math.random() * (max - min + 1) ) + min;
  n2 = Math.floor(Math.random() * (max - min + 1) ) + min;

  n3 = Math.floor(Math.random() * (max - min + 1) ) + min;
  n4 = Math.floor(Math.random() * (max - min + 1) ) + min;

  document.querySelector("#left_dice1").src = "images/dice" + n1 + ".png";
	document.querySelector("#left_dice2").src = "images/dice" + n2 + ".png";

  document.querySelector("#right_dice1").src = "images/dice" + n3 + ".png";
	document.querySelector("#right_dice2").src = "images/dice" + n4 + ".png";

  let total1 = [n1 + n2] 
  
  let total2 = [n3 + n4]
  
  return total1 , total2;
}

//new button resets score and images
new_btn.addEventListener( "click", function(){
	current1.innerHTML = `<p>Your current score: ${0}</p>`;
  current2.innerHTML = `<p>Opponents current score: ${0}</p>`;

  total1.innerHTML   = `<p>Your total score: ${0}</p>`;
  total2.innerHTML   = `<p>Opponents total score: ${0}</p>`;

  document.querySelector("#left_dice1").src = "images/dice1.png";
	document.querySelector("#left_dice2").src = "images/dice1.png";

  document.querySelector("#right_dice1").src = "images/dice1.png";
	document.querySelector("#right_dice2").src = "images/dice1.png";
});

//roll button click generates random number
roll_btn.addEventListener( "click", function(){
	current1.innerHTML = `<p>Your current score: ${die01.rollDice()}</p>`;
  current2.innerHTML = `<p>Opponents current score: ${die01.rollDice()}</p>`;
});

//player dice
const die01 = new dice(0);
const die02 = new dice(0);

//opponent dice
const die03 = new dice(0);
const die04 = new dice(0);

//players score
current1.innerHTML = `<p>Your current score: ${die01.value} </p>`;
total1.innerHTML   = `<p>Your total score: ${0}</p>`;

//opponents score
current2.innerHTML = `<p>Opponents current score: ${die02.value}</p>`;
total2.innerHTML   = `<p>Opponents total score: ${0}</p>`;