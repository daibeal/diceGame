randomNumber1 = Math.floor(Math.random() * 6  + 1);
randomNumber2 = Math.floor(Math.random() * 6  + 1);

document.querySelector(".img1").src ="images/dice" + randomNumber1 + ".png";
document.querySelector(".img2").src ="images/dice" + randomNumber2 + ".png";
