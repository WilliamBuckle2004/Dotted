
var theBody = document.querySelector("body");


var counter = 0;

while(counter < 10 ) {
  var theDiv = document.createElement("div");

    theDiv.style.backgroundColor = "silver";

    theBody.appendChild (theDiv);
  
    counter++;
}