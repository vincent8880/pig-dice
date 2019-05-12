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
            $(".col-sm" + (pos + 1) + " .score").text("0");
            $(".col-sm" + (pos + 1)).removeClass("player-turn");
            $("#image").html("");
            pos = 1;
            switchPlayer = playerDetails[pos];
            $("#col-sm" + (pos + 1)).addClass("player-turn");
        } else if (getRandom == 1 && pos == 1) {
            $(".col-sm" + (pos + 1) + " .score").text("0");
            $(".col-sm" + (pos + 1)).removeClass("player-turn");
            $("#image").html("");
            pos = 0;
            switchPlayer = playerDetails[pos];
            $(".col-sm" + (pos + 1)).addClass("player-turn");
        } else if (getRandom > 1) {
            newMark = getPlayerId.playerMarks;
            $(".col-sm" + (pos + 1) + " .score").text(newMark);
            $("#image").html("<img class='dice' height='200' width = '200' src =" + getDieSide(getRandom) + ">")
        }
        $("#hold").click(function () {
            if (num == 2) {
                var getPlayerId = playerDetails[pos];
                newMark = getPlayerId.playerMarks;
                getPlayerId.Total(newMark);
                finalScore = getPlayerId.totalScores;
                console.log(finalScore);
                getPlayerId.playerMarks = 0;
                $(".col-sm" + (pos + 1) + " .score").text("0");
                $(".col-sm" + (pos + 1) + " .score").text(finalScore);
                $("#image").html("");
                if (pos == 0) {
                    $(".col-sm" + (pos + 1)).removeClass("player-turn");
                    pos = 1;
                    $(".content" + (pos + 1)).addClass("player-turn");
                } else if (pos == 1) {
                    $(".col-sm" + (pos + 1)).removeClass("player-turn");
                    pos = 0;
                    $(".col-sm" + (pos + 1)).addClass("player-turn");
                }
       
            