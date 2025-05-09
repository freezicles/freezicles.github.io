var sound = document.getElementById("button_sound");
var btn = document.getElementById("button");

btn.addEventListener('click', function() {
    var buttonSound2 = new Audio('button.wav');

    buttonSound2.play();
});