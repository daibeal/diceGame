

// var t=setInterval(refreshDice(),10000000);

function refreshDice(){
  // location.reload()
  randomNumber1 = Math.floor(Math.random() * 6  + 1);
  randomNumber2 = Math.floor(Math.random() * 6  + 1);
  if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Tie";
  }
  else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins";
  }
  else {
    document.querySelector("h1").textContent = "Player 2 wins";
  }

  document.querySelector(".img1").src ="images/dice" + randomNumber1 + ".png";
  document.querySelector(".img2").src ="images/dice" + randomNumber2 + ".png";
};

window.setInterval(function(){
  refreshDice();
}, 1000);
