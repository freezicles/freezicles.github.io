var sound = document.getElementById("button_sound");
var btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    var buttonSound2 = new Audio('button.wav');
    buttonSound2.volume = 0.3;
    buttonSound2.play();
});