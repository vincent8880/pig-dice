function Player(playerName, score, turnScore) {
    this.playerName = playerName;
    this.score = score;
    this.turnScore = turnScore;
  }
  
  Player.prototype.rollDie = function(){
    var rollScore = 0
    var diceArray = []
  
    var dice1 = Math.floor(Math.random()*(7-1)+1);
    var dice2 = Math.floor(Math.random()*(7-1)+1);
  
    if (dice1 !== 1 && dice2 !== 1){
      var totalDice = dice1 + dice2;
      rollScore = totalDice;
      this.turnScore += rollScore;
  
    }else{
      rollScore = 0;
      this.turnScore = 0;
      return "Hit One";
    }
  
    diceArray.push(dice1, dice2);
    return diceArray;
  };
  
  Player.prototype.stop = function() {
    this.score += this.turnScore
    this.turnScore = 0;
  
  }
  
  Player.prototype.newTurn = function() {
    this.turnScore = 0;
  };
  
  Player.prototype.scoreCheck = function() {
    if(this.score >= 100){
      return "Win";
    };
  };
  
  Player.prototype.newGame = function(){
    this.turnScore = 0;
    this.score = 0;
  
  
  }
  
  
  
  
      
      
      var player1 = new Player(player1, 0, 0);
      var player2 = new Player(player2, 0, 0);
  
    
  
  
        var player1Rolls = function(){
            $(".roll").click(function() {
  
              var player1Dice = player1.rollDie();
  
              $(".player-1-roll").text(" " + player1Dice);
              $("#player-1-score").text(" " + player1.turnScore);
              $("#player-1-total-score").text(" " + player1.score);
  
              if(player1Dice === "Hit One"){
                $(".buttons-1").fadeOut("slow");
                $(".buttons-2").fadeIn("slow");
              };
  
              var winner = player1.scoreCheck();
  
            });
        };
  
  
        var player1Stops = function(){
          $(".hold").click(function(){
  
            player1.stop();
            $("#player-1-total-score").text(" " + player1.score);
            $("#player-1-score").text(" " + player1.turnScore);
  
  
            var winner = player1.scoreCheck();
  
            if(winner === "Win"){
              alert("Congratulations " + player1.playerName +" you win! GAME OVER!")
              player1.newGame();
              player2.newGame();
              $(".player-1-total-score").text(" " + player1.score);
              $(".player-1-score").text(" " + player1.turnScore);
              $(".player-2-total-score").text(" " + player2.score);
              $(".player-2-score").text(" " + player2.turnScore);
              $(".player-1-roll").text(" ");
              $(".player-2-roll").text(" ");
  
            }else{
              $(".buttons-1").fadeOut("slow");
              $(".buttons-2").fadeIn("slow");
            }
  
          });
        };
  
  
  
  
  // PLAYER TWO ROLL AND STOP BUTTON BELOW
  
        var player2Rolls = function(){
            $(".roll").click(function() {
  
              var player2Dice = player2.rollDie();
  
              $(".player-2-roll").text(" " + player2Dice);
              $("#player-2-score").text(" " + player2.turnScore);
              $("#player-2-total-score").text(" " + player2.score);

              var winner = player2.scoreCheck();
  
            });
        };
  
  
  
        var player2Stops = function(){
          $(".hold").click(function(){
  
            player2.stop();
            $("#player-2-total-score").text(" " + player2.score);
            $("#player-2-score").text(" " + player2.turnScore);
  
  
            var winner = player2.scoreCheck();
  
            if(winner === "Win"){
              alert("Congratulations " + player2.playerName +" you win! GAME OVER!")
              player1.newGame();
              player2.newGame();
              $(".player-1-total-score").text(" " + player1.score);
              $(".player-1-score").text(" " + player1.turnScore);
              $(".player-2-total-score").text(" " + player2.score);
              $(".player-2-score").text(" " + player2.turnScore);
              $(".player-1-roll").text(" ");
              $(".player-2-roll").text(" ");
              $(".buttons-2").fadeOut("slow");
              $(".buttons-1").fadeIn("slow");
            }else{
              $(".buttons-2").fadeOut("slow");
              $(".buttons-1").fadeIn("slow");
            }
  
          });
        };
  
        player1Rolls();
        player1Stops();
        player2Rolls();
        player2Stops();
  
   
  
  });
  