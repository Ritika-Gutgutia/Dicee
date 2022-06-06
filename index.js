var randomNum1 = 1 + Math.floor(6 * Math.random());
var randomNum2 = 1 + Math.floor(6 * Math.random());
var randomDiceImg1 = "dice" + randomNum1 + ".png";
var randomDiceImg2 = "dice" + randomNum2 + ".png";
var randomImgSrc1 = "image" + "/" + randomDiceImg1;
var randomImgSrc2 = "image" + "/" + randomDiceImg2;
document.querySelector(".left-img").setAttribute("src", randomImgSrc1);
document.querySelector(".right-img").setAttribute("src", randomImgSrc2);
if (randomNum1 > randomNum2) {
  document.querySelector(".title").innerHTML = " 🚩 Player-1 wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector(".title").innerHTML = "Player-2 wins! 🚩";
} else {
  document.querySelector(".title").innerHTML = "Draw";
}
