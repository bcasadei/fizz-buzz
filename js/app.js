/**
 * Created by bc on 8/15/15.
 */
$(document).ready(function() {
   //DEBUGGER
   /*  var DEBUG_MODE = false;
    var debug = function(msg) {
        if (DEBUG_MODE == true) {
            console.log("DEBUG:", msg);
        }
    } */

    //Prompt for number
    var num = prompt("Enter a number");
    var n = +num;
    // Validate that n is a number
    if (n === parseInt(n, 10)) {
        fizzBuzz(n);
    }
    else {
        prompt("Please only enter numbers");
    }

    // fizzBuzz Function
    function fizzBuzz(n) {
        var counter = 1;
        while (counter <= n) {
            // Print number if not divisable by 3 or 5
            if ((counter % 3 !== 0) && (counter % 5 !== 0)) {
                $("body").append("<p>" + counter + "</p>");
            }
            // Print Fizz Buzz if divisable by 3 and 5
            else if ((counter % 15 === 0)) {
                $("body").append("<p>Fizz Buzz</p>");
            }
            // Print Fizz if divisable by 3
            else if (counter % 3 === 0) {
                $("body").append("<p>Fizz</p>");
            }
            // Print Buzz if divisable by 5
            else if (counter % 5 === 0) {
                $("body").append("<p>Buzz</p>");
            }
            // ??? Why can't the counter be at the top and start at 0?
            counter++;
        }
    }




});