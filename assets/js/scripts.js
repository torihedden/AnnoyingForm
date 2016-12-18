var x;
var y;

function randomX() {

  x = Math.floor((Math.random() * 100)) + 1;

  if (x >= 80) {
    randomX();
  }

}

function randomY() {

  y = Math.floor((Math.random() * 100)) + 1;

  if (y >= 90) {
    randomY();
  }

}

$(".submit-button").click(function() {

  $(".error-message").show();

  randomX();
  randomY();

  $(".submit-button").addClass("random");

  $(".submit-button").css({"left" : x + "%"});
  $(".submit-button").css({"top" : y + "%"});

});



// another form idea: on click submit, erase contents of one random input element, and prompt user
