
var theBody = document.querySelector("body");


function setDivColor(element) {
    var redBackground = getRandomInt(0,255);
    var greenBackground = getRandomInt(0,255);
    var blueBackground = getRandomInt(0,255);
    element.style.backgroundColor = `rgb(${redBackground},${greenBackground},${blueBackground})`;
}


var counter = 0;

while(counter < 10) {
  var theDiv = document.createElement("div");

  setDivColor(theDiv);
 
  theBody.appendChild(theDiv);
  
  counter++;
}


function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var divs = document.querySelectorAll("div");

 divs.forEach( function(div) {
   div.addEventListener("mouseover", function(){
      setDivColor(div);
   })
 })






