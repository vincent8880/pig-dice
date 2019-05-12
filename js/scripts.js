var num = 0,
    newMark = 0,
    playerDetails = [],
    finalScore = 0,
    diePic = "",
    pos = 0;

function PlayersInfo(name, score, totalScore) {
    this.playerNames = name;
    this.playerMarks = score;
    this.totalScores = totalScore;
}
var genRandom = function () {
    randomNo = Math.floor(Math.random() * 6)+ 1);
       return randomNo;
   }
   PlayersInfo.prototype.AddScores = function (thisMark) {
       if (thisMark === 1) {
           this.playerMarks = 0;
       } else if (thisMark !== 1) {
           this.playerMarks = this.playerMarks + thisMark;
       }
       return this.playerMarks;
   }
   PlayersInfo.prototype.Total = function (total) {
    return this.totalScores = this.totalScores + total;
}
var getDieSide = function (getInput) {
    if (getInput == 1) diePic = "img/dice/1.jpg";
    else if (getInput == 2) diePic = "img/dice/2.jpg";
    else if (getInput == 3) diePic = "img/dice/3.jpg";
    else if (getInput == 4) diePic = "img/dice/4.jpg";
    else if (getInput == 5) diePic = "img/dice/5.jpg";
    else if (getInput == 6) diePic = "img/dice/6.jpg";

    return diePic;
}
function reset() {
    pos = 0;
    PlayersInfo.playerMarks = 0;
    PlayersInfo.totalScores = 0;
    $("#image").html("");
    $(".playerscore").text("0");
    $(".score").text("0");
}
$("#roll-dice").click(function () {
    if (num == 2) {
        var switchPlayer;
        var getRandom = genRandom();
        var getPlayerId = playerDetails[pos];
        getPlayerId.AddScores(getRandom);
        if (getRandom == 1 && pos == 0) {
            $("#player-1-score" + (pos + 1) + " player-1-total-score").text("0");
            $("#content" + (pos + 1)).removeClass("player-turn");
            $("#image-die").html("");
            pos = 1;
            switchPlayer = playerDetails[pos];
            $("p.text-uppercase").html("Oooops, You rolled a 1. <br>" + switchPlayer.playerNames + "'s turn");
            // alert("Oooops, You rolled a 1. " + switchPlayer.playerNames + "'s turn");
            $("#content" + (pos + 1)).addClass("player-turn");
 
       
            