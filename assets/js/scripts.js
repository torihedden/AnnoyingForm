$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

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


  if ($($("input")[0]).val() !== "" && $($("input")[1]).val() !== "") {

    event.preventDefault();

    $(".error-message").show();

    randomX();
    randomY();

    $(".submit-button").addClass("random");

    $(".submit-button").css({"left" : x + "%"});
    $(".submit-button").css({"top" : y + "%"});

  }

// Regex for helping to validate email /\w([@])\w+/g

});



// another form idea: on click submit, erase contents of one random input element, and prompt user to again please fill out form
