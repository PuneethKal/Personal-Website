// Repeat Fading Text
var text = ["Computer Engineer", "Passionate"];
var counter = 0;
var elem = document.getElementById("masthead-changeText");
var opacity = 1;  // Initial opacity
var timer = setInterval(fadeOut , 100);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    
    if (counter >= text.length) {
        counter = 0;
    }
}

//Set Fade out
function fadeOut(){
    if (opacity <= 0.1) {
        opacity = 1;
        change();
    }
    elem.style.opacity = opacity;
    elem.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
    opacity -= opacity * 0.1;
}

var video = document.getElementById("2xspeed");
video.playbackRate = 2.0;
//