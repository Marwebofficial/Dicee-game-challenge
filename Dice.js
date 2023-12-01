var randomNo = Math.floor(Math.random()*6) + 1;
var randomimage1 = "images/dice" + randomNo + ".png";
var randomimgsource =document.querySelector(".img1").setAttribute("src",
randomimage1);

var randomNo2 = Math.floor(Math.random()*6) + 1;
var randomimage2 = "images/dice" + randomNo2 + ".png";
var randomimgsource2 =document.querySelector(".img2").setAttribute("src",
randomimage2);
if (randomNo > randomNo2) {
  document.querySelector("h1").innerHTML=" player one wins";
}
else if (randomNo2 > randomNo) {
    document.querySelector("h1").innerHTML=" player two wins";
}
else{
    document.querySelector("h1").innerHTML=" players are equal";
}