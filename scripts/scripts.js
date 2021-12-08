/*INSTRUCTION POP-UP*/
const rule_box  = document.getElementById("rule-box");
const close_rule = document.getElementById("close-rule");
const rule_btn  = document.getElementById("rule-btn");

rule_box.style.display = "none";

$(rule_btn).click(function(){
   setTimeout( function(){
     $(rule_box).fadeIn(500);
    });  
});

$(close_rule).click(function(){
    setTimeout( function(){
      $(rule_box).fadeOut(500);
     });  
 });