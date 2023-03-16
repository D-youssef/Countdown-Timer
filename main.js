/*
    Create CountDown Timer
*/

var seconds  = 10,
    countDiv = document.getElementById('countdown'),  // this div to show countdown
    secondPass;  // declare function to avoid warning

    countDown = setInterval(function(){

        "use strict"; 

        secondPass();

    }, 1000);  // execute function secondPass() in every 1s 

function secondPass() {
    
    "use strict";

    var minutes = Math.floor(seconds / 60),  // to get minutes real number
        remSeconds = seconds % 60;    // to get seconds rest of division

    if (seconds < 10) {
        
        remSeconds = "0" + remSeconds   // this about 0 before number of seconds  
    }
    
    countDiv.innerHTML = minutes + ":" + remSeconds;

    if (seconds > 0) {
        
        seconds = seconds - 1;  // Decrease 1s every 1s 

    }else {

        clearInterval(countDown);   // Stop countdown timer

        countDiv.innerHTML = "Done";
    }
}