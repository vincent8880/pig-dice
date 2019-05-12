function Player(playerName, score, turnScore) {
    this.playerName = playerName;
    this.score = score;
    this.turnScore = turnScore;
  }
  Player.prototype.rollDie = function(){
    var rollScore = 0
    var diceArray = []
  
    var dice1 = Math.floor(Math.random()*(6)+1);
    var dice2 = Math.floor(Math.random()*(6)+1);
  
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
    $(".roll-1").click(function() {

      var player1Dice = player1.rollDie();

      $(".player-1-roll").text(" " + player1Dice);
      $(".player-1-score").text(" " + player1.turnScore);
      $(".player-1-total-score").text(" " + player1.score);

      if(player1Dice === "Hit One"){
        $(".buttons-1").fadeOut("slow");
        $(".buttons-2").fadeIn("slow");
      };

      var winner = player1.scoreCheck();

    });
};
   
