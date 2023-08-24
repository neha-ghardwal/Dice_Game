// alert("Working");
// random no between 1-6
// DICE 1
var randomNo = Math.floor(Math.random() * 6) + 1;

// dice png from dice1- dice2 
var randomDice = "dice" + randomNo + ".png";

var randomImage = "image/" + randomDice;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImage);


// DICE 2

var randomNo2 = Math.floor(Math.random()*6) +1 ;

var randomImage2 = "image/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


if(randomNo > randomNo2){
    document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else if(randomNo2 > randomNo){
    document.querySelector("h1").innerHTML = "Player 2 WINS!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";

}