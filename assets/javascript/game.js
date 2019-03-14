$(document).ready(function() {
console.log("hello");

var targetNumber = 53;

$("#number-to-guess").html(targetNumber);

var counter = 0;


// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    $(".image"+ i).attr("data-crystalvalue",numberOptions[i]);
    console.log(i);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // image1.attr("data-crystalvalue", numberOptions[i]);

}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".col-lg-3").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});

});