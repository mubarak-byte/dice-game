var randomnum1 = Math.floor(Math.random()*6)+1;
var diceimg = "dice"+randomnum1 +".png";
var imgsrc = "images/" + diceimg;
var firstdice=document.querySelectorAll("img")[0];
firstdice.setAttribute("src", imgsrc);

var randomnum2 = Math.floor(Math.random()*6)+1;
var diceimg="dice" + randomnum2 +".png";
var imgsrc="images/"+diceimg;
var seconddice=document.querySelectorAll("img")[1];
seconddice.setAttribute("src",imgsrc);

if(randomnum1>randomnum2){
  document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomnum2>randomnum1){
 document.querySelector("h1").innerHTML="player2 Wins";
}
else {
   document.querySelector("h1").innerHTML="You draw";
}
