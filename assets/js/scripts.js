var x;
var y;

function randomInt() {

  x = Math.floor((Math.random() * 100)) + 1;

  y = Math.floor((Math.random() * 100)) + 1;

  console.log(x, y);
}

randomInt();


$("button").click(function() {

  // $(".submit-button").css({"top" : "calc( 100% / 10)"});
  // $(".submit-button").css({"left" : "calc( 100% / 2 )"});

  $(".submit-button").css({"top" : x + "%"});
  $(".submit-button").css({"left" : y + "%"});

  randomInt();

});



// another form idea: on click submit, erase contents of one random input element, and prompt user
