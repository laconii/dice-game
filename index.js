var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.getElementById("title").textContent = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.getElementById("title").textContent = "Player 2 Wins!";
}else{
    document.getElementById("title").textContent = "Draw!";
}
