//Changing the first dice image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImgSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png- images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);

//Changing the second dice image
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);




// You'll need to use an if statement,
// querySelector() and the innerHTML property
// to change the text in the h1.

//IF player 1 wins
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}

//IF player 2 wins
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}

//If it's a draw
else {
  document.querySelector("h1").textContent = "Drawn Game!"
}
