function bigImg(x) {
    x.style.height = "600px";
    x.style.width = "600px";
 }
 
 function normalImg(x) {
    x.style.height = "400px";
    x.style.width = "400px";
    x.style.margin = "0px 5px 0px 5px;";
    x.style.flex = "1 1 200px";
 }

let counter = 0;

function hover(img)
{  
   if (counter === 1) img.src = "images/IMG_5066.PNG";
   else if (counter === 2) img.src = "images/IMG_5069.PNG";
   else if (counter === 3) img.src = "images/IMG_5070.PNG";
   else if (counter === 4) img.src = "images/IMG_5071.PNG";
   else {
      img.src = "images/IMG_5065.PNG";
      counter = 1;
   }
   counter ++;
}

var popup = document.getElementById("bigwindow");
function clicky(div)
{
   popup.style.display = "block";
}

var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
   popup.style.display = "none";
}