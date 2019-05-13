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
    randomNo = Math.floor(Math.random() * 6);
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
    $(".score").text("");
}
$(document).ready(function () {
    $("#reset").click(function () {
        reset();
        $("#hold").show();
        $("#roll-dice").show();
        $("#reset").hide();
        $("#content1").addClass("player-turn");
        // console.log(finalScore);
    })
    $("#player-names").submit(function (event) {
        event.preventDefault();
        num++;
        if (num > 2) {
            alert("Players cannot exceed 2!");
            playerDetails = [];
            num = 0;
            console.log(playerDetails);
            reset();
        }else if(num==2){
            $("#input-details").modal('hide');
        }
        var newPlayer = new PlayersInfo([player1 ,player2 ], 0, 0);
        playerDetails.push(newPlayer);
        $(".col-sm").addClass("player-turn");
        // console.log(playerDetails);
        $(".col-sm" + num + " .playerscore").html("<span class=player" + num + ">" + newPlayer.playerNames + "</span>");

        
    });
    $(".roll").click(function () {
        if (num == 2) {
            var getRandom = genRandom();
            var getPlayerId = playerDetails[pos];
            getPlayerId.AddScores(getRandom);
            if (getRandom == 1 && pos == 0) {
                $(".col-sm" + (pos + 1) + " .score").text("0");
                $(".col-sm" + (pos + 1)).removeClass("player-turn");
                $("#image").html("");
                pos = 1;
                $(".col-sm" + (pos + 1)).addClass("player-turn");
            } else if (getRandom == 1 && pos == 1) {
                $(".col-sm" + (pos + 1) + " .score").text("0");
                $("#col-sm" + (pos + 1)).removeClass("player-turn");
                $("#image").html("");
                pos = 0;
                $(".col-sm" + (pos + 1)).addClass("player-turn");
            } else if (getRandom > 1) {
                newMark = getPlayerId.playerMarks;
                $(".col-sm" + (pos + 1) + " .score").text(newMark);
                $("#image").html("<img class='dice' height='200' width = '200' src=" + getDieSide(getRandom) + ">")
            }
            console.log(getRandom + " " + pos + " " + newMark);
        } 
    });
    $("#hold").click(function () {
        if (num == 2) {
            var getPlayerId = playerDetails[pos];
            newMark = getPlayerId.playerMarks;
            getPlayerId.Total(newMark);
            finalScore = getPlayerId.totalScores;
            console.log(finalScore);
            //Make the total become 0;//Final score, This Round, Dice Value
            getPlayerId.playerMarks = 0;
            $("#content" + (pos + 1) + " h4").text("0");
            $("#content" + (pos + 1) + " h1").text(finalScore);
            $("#image-die").html("");
            if (pos == 0) {
                $("#content" + (pos + 1)).removeClass("player-turn");
                pos = 1;
                $("#content" + (pos + 1)).addClass("player-turn");
            } else if (pos == 1) {
                $("#content" + (pos + 1)).removeClass("player-turn");
                pos = 0;
                $("#content" + (pos + 1)).addClass("player-turn");
            }
            if (finalScore > 99) {
                playerDetails[0].totalScores = 0;
                playerDetails[1].totalScores = 0;
                $(".winner-text").html("<h3 class = 'text-uppercase'>" + getPlayerId.playerNames + " HAS WON!!!</h3>")
                $("#winner-modal").modal();
                // alert(getPlayerId.playerNames + " has won!!");
                $("#hold").hide();
                $("#roll-dice").hide();
                $("#reset").show();
                $("#content1").removeClass("player-turn");
                $("#content2").removeClass("player-turn");
            }
        } else if (num == 1) {
            alert("Player 2 Name Required");
            $("#input-details").modal();
        } else if (num == 0) {
            alert("Players' Names Required");
            $("#input-details").modal();
        }
    });
});