$(document).ready(function () {
    // declaring the variables 
    var total = 0;
    var totalWins = 0;
    var totalLosses = 0;
    var jewel1Value = Math.floor(Math.random() * 10 + 1);
    var jewel2Value = Math.floor(Math.random() * 10 + 1);
    var jewel3Value = Math.floor(Math.random() * 10 + 1);
    var jewel4Value = Math.floor(Math.random() * 10 + 1);

    // setting the main random number by ensuring it is the product of the four jewel values.
    var targetValue = Math.floor(Math.random() * 3 + 1) * jewel1Value;
    targetValue += Math.floor(Math.random() * 3 + 1) * jewel2Value;
    targetValue += Math.floor(Math.random() * 3 + 1) * jewel3Value;
    targetValue += Math.floor(Math.random() * 3 + 1) * jewel4Value;

    $('span#number-to-guess').text(targetValue);
    // resetValues();
    console.log(jewel1Value, jewel2Value, jewel3Value, jewel4Value);

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
        // resetValues();
    }

    // setting a reset function to reset a game once wins or loses determined 
    // function resetValues() {
    //     total = 0;
    //     var allEven = true;
    //     var allOdd = false;
    //     while (allEven || allOdd) {
    //         jewel1Value = Math.floor(Math.random() * 10 + 1);
    //         jewel2Value = Math.floor(Math.random() * 10 + 1);
    //         jewel3Value = Math.floor(Math.random() * 10 + 1);
    //         jewel4Value = Math.floor(Math.random() * 10 + 1);
    //         allEven = (jewel1Value % 2 === 0 && jewel2Value % 2 === 0 && jewel3Value % 2 === 0 && jewel4Value % 2 === 0);
    //         allOdd = (jewel1Value % 2 === 1 && jewel2Value % 2 === 1 && jewel3Value % 2 === 1 && jewel4Value % 2 === 1);
    //         console.log(allEven, allOdd);
    //     }
        
        targetValue = Math.floor(Math.random() * 15 + 25);
        $('div.collected').text("Start the game");
        $('div.target').text(targetValue);
        $('#total-score-number').text(total);
        $('span#number-to-guess').text(targetValue);
    
});