/*
    Photon by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var	$window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge:   [ '1141px',  '1680px' ],
        large:    [ '981px',   '1140px' ],
        medium:   [ '737px',   '980px'  ],
        small:    [ '481px',   '736px'  ],
        xsmall:   [ '321px',   '480px'  ],
        xxsmall:  [ null,      '320px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();
// Typing effect
var text = "Hi, I'm Armel JR a Robotocist/Software Engineer, I've recently <br />graduated from a degree and postgrad in Robotics.";
var span = document.querySelector(".typing");
var index = 0;

function typeText() {
    // Check if text contains the "<br />" tag at the current index
    if (text.substring(index, index + 6) === "<br />") {
        span.innerHTML += "<br />";
        index += 6;
    } else {
        span.innerHTML += text.charAt(index);
        index++;
    }

    if (index === text.length) {
        // Stop the interval when the entire text is typed out
        clearInterval(typingInterval);
    }
}

$(document).ready(function() {
    $(".cmd-input").on("keydown", function(event) {
        if (event.keyCode === 13) { // Enter key
            let command = $(this).val();
            
            if (command.trim() === "projects") {
                $(".output").append("<p>Listing all projects...</p>");
                // Here, you can add logic to display or handle the 'projects' command, like fetching data or displaying content.
            } else {
                $(".output").append("<p>Unknown command: " + command + "</p>");
            }

            $(this).val(""); // Clear input
        }
    });
});


// Set the typing effect to type one character every 100 milliseconds
var typingInterval = setInterval(typeText, 100);


    // Start the typing effect after the preload animation finishes
    $window.on('load', function() {
        window.setTimeout(function() {
            type();
        }, 100);
    });


	
})(jQuery);

