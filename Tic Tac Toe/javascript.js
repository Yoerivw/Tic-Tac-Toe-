$(document).ready(function(){
  
  //declaring variables
  var playerChoice, computerChoice,count = 0, turnSwitch = false;
  
  var turns = ["","","","","","","","",""];
  
  
  // Make the buttons clickable so as to choose a side for the player
  $("#choiceX").click(function(){   
    playerChoice = "X";
    computerChoice = "O";
      $("#choiceO").removeClass("btn-primary");
      $("#choiceX").addClass("btn-primary");
    resetGame();
    
   });
   // Make the buttons clickable so as to choose a side for the player             
  $("#choiceO").click(function(){    
    playerChoice = "O";
    computerChoice = "X";
      $("#choiceX").removeClass("btn-primary");
      $("#choiceO").addClass("btn-primary");
    resetGame();
    
   });
  
  
  function win(turns, turn){
    
    if (turns[0] == turn &&  turns[1] == turn && turns[2] == turn  ){
       turnSwitch = false;
      
      alert( turn +" has won");
      resetGame();
        
        } else if (turns[0] == turn &&  turns[4] == turn && turns[8] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
       } else if (turns[0] == turn &&  turns[3] == turn && turns[6] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   } else if (turns[3] == turn &&  turns[4] == turn && turns[5] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   }  else if (turns[6] == turn &&  turns[7] == turn && turns[8] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   } else if (turns[6] == turn &&  turns[4] == turn && turns[2] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   } else if (turns[1] == turn &&  turns[4] == turn && turns[7] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   } else if (turns[0] == turn &&  turns[3] == turn && turns[6] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   } else if (turns[2] == turn &&  turns[5] == turn && turns[8] == turn){
                   
       turnSwitch = false;
      alert( turn +" has won");
      resetGame();     
   }
    
    else {
      turnSwitch = true;
    }
  }
  
  //The computers input on the screen
  function computerTurn(turns, container){
 
    var randomPlace = Math.floor(Math.random() * 9);
    
    if(randomPlace !== container){
      
      if (count < 4){
    
     while (turns[randomPlace] !== ""){
      
          randomPlace =  Math.floor(Math.random() * 9);
    }
        
    $("#"+randomPlace).text(computerChoice);
    turns[randomPlace] = computerChoice;
    count++;
        turnSwitch = false;
      }
   
  }
    
  }
  //Function to retreive ID and if it's empty
  function playerTurn(turn, id){
    var spotChecker = $("#"+id).text();
    if (spotChecker ===" "){
      turns[id] = playerChoice;
      $("#"+id).text(playerChoice);
      win(turns,turn);
      if (turnSwitch){
      computerTurn(turns, id);
       win(turns,computerChoice);
        
      }
    
      }
    //end of if
    }//end of function
  
  
  $(".grid").click(function(){
       var container = $(this).attr("id");
    playerTurn(playerChoice, container);
    
   
    
   
     });
// reset function on if
 function resetGame(){
   $(".grid").text(" ");
   turns = ["","","","","","","","",""];
   turnSwitch=false;
   count=0;
   
 }
  
  
  
  
  
  
});//end of document 