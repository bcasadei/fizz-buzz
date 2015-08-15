/**
 * Created by bc on 8/15/15.
 */
$(document).ready(function() {
    var counter = 1;
    // Loop that counts from 1 to 100
    while (counter <= 100) {
        console.log(counter);
        // Print number if not divisable by 3 or 5
        if ((counter % 3 !== 0) && (counter % 5 !== 0)) {
            console.log("Number is not divisable by 3 or 5");
            $("body").append("<p>" + counter + "</p>");
        }
        // Print Fizz Buzz if divisable by 3 and 5
        else if ((counter % 3 === 0) && (counter % 5 === 0)) {
            console.log("Number is divisable by 3 and 5");
            $("body").append("<p>Fizz Buzz</p>");
        }
        // Print Fizz if divisable by 3
        else if (counter % 3 === 0) {
            console.log("Number is divisable by 3");
            $("body").append("<p>Fizz</p>");
        }
        // Print Buzz if divisable by 5
        else if (counter % 5 === 0) {
            console.log("Number is divisable by 5");
            $("body").append("<p>Buzz</p>");
        }
        // ??? Why can't the counter be at the top and start at 0?
        counter++;
    }
});