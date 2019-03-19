$(document).ready(function () {
    // declaring the variables 
    var total = 0;
    var totalWins = 0;
    var totalLosses = 0;
    var jewel1Value = Math.floor(Math.random() * 10 + 1);
    var jewel2Value = Math.floor(Math.random() * 10 + 1);
    var jewel3Value = Math.floor(Math.random() * 10 + 1);
    var jewel4Value = Math.floor(Math.random() * 10 + 1);

    // setting the main random number
    var targetValue = Math.floor(Math.random() * 15 + 25);
    $('span#number-to-guess').text(targetValue);

    // creating a function to collect points 
    function collectPoints(value) {
        total += value;
        $('div.collected').text(total);
        $('#total-score-number').text(total);
        verifyWin();
        $('#win-number').text(totalWins);
        $('#lose-number').text(totalLosses);
    }

    // setting collect points with images
    $('div.target').text(targetValue);
    $('div.collected').text("Start the game");

    $("#jewel1").click(function () {
        collectPoints(jewel1Value);
    });
    $("#jewel2").click(function () {
        collectPoints(jewel2Value);
    });
    $("#jewel3").click(function () {
        collectPoints(jewel3Value);
    });
    $("#jewel4").click(function () {
        collectPoints(jewel4Value);
    });

    //  setting a function to verify wins and loses
    function verifyWin() {
        if (total == targetValue) {
            totalWins += 1;
            displayWins();
        }
        else if (total > targetValue) {
            totalLosses += 1;
            displayWins();
        }
    }

    // displaying wins and loses
    function displayWins() {
        var display = "Total Wins = " + totalWins + ". Total Losses = " + totalLosses + ".";
        $('div.winning').text(display);
        resetValues();
    }

    // setting a reset function to reset a game once wins or loses determined 
    function resetValues() {
        total = 0;
        jewel1Value = Math.floor(Math.random() * 10 + 1);
        jewel2Value = Math.floor(Math.random() * 10 + 1);
        jewel3Value = Math.floor(Math.random() * 10 + 1);
        jewel4Value = Math.floor(Math.random() * 10 + 1);

        targetValue = Math.floor(Math.random() * 15 + 25);
        $('div.collected').text("Start the game");
        $('div.target').text(targetValue);
        $('#total-score-number').text(total);
        $('span#number-to-guess').text(targetValue);
    }
});