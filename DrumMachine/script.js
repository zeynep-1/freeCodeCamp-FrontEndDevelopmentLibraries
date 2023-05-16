function playSound(url) {
    var a = new Audio(url);
    a.play();
}

$("#Heater1").click(function () {
    playSound($("#Q").attr("src"));
    $("#display").text("Q");
});

$("#Heater2").click(function () {
    playSound($("#W").attr("src"));
    $("#display").text("W");
});
$("#Heater3").click(function () {
    playSound($("#E").attr("src"));
    $("#display").text("E");
});
$("#Heater4").click(function () {
    playSound($("#A").attr("src"));
    $("#display").text("A");
});
$("#Clap").click(function () {
    playSound($("#S").attr("src"));
    $("#display").text("S");
});
$("#Open-HH").click(function () {
    playSound($("#D").attr("src"));
    $("#display").text("D");
});
$("#Kick-n-Hat").click(function () {
    playSound($("#Z").attr("src"));
    $("#display").text("Z");
});
$("#Kick").click(function () {
    playSound($("#X").attr("src"));
    $("#display").text("X");
});
$("#Closed-HH").click(function () {
    playSound($("#C").attr("src"));
    $("#display").text("C");
});

$('body').on('keypress, keydown', function (event) {
    var character = String.fromCharCode(event.keyCode).toUpperCase();

    switch (character) {
        case "Q":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
            $("#display").text("Q");

        case "W":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
            $("#display").text("W");

        case "E":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
            $("#display").text("E");

        case "A":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
            $("#display").text("A");

        case "S":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
            $("#display").text("S");

        case "D":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
            $("#display").text("D");

        case "Z":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
            $("#display").text("Z");

        case "X":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
            $("#display").text("X");

        case "C":
            playSound("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
            $("#display").text("C");
    }
});
