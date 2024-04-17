var buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];

var level = 0;

function checkAnswer(currentLevel) {
  for (var i = 0; i < currentLevel; i++) {
    if (gamePattern[i] === userPattern[i]) continue;
    else {
      return false;
    }
  }
  return true;
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  $("#level-title").html("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);

  userPattern = [];
  level++;
}

$(".btn").on("click", function () {
  var userChosenColour = this.id;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userPattern.push(userChosenColour);
  console.log(userPattern);

  if (userPattern.length === gamePattern.length) {
    console.log("gamepattern: " + gamePattern);
    console.log("userpattern: " + userPattern);

    if (checkAnswer(level)) {
      console.log("success");
      setTimeout(nextSequence, 1000);
    } else {
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over"), 200;
      });
      $("#level-title").html("Game Over, Press Any Key to Restart");
      level = 0;
      userPattern = [];
      gamePattern = [];
      console.log("wrong");
    }
  }
});

$(document).on("keypress", function () {
  if (level === 0) {
    // $("#level-title").html("Level " + level);
    nextSequence();
  }
});
