var qArray = 
['b', 
'a', 
't', 
'g', 
'e', 
'm', 
'r', 
'q', 
'c'];

function display() {
    var randomValue = rendonInt(1,10);
    document.getElementById("questiontext").innerHTML;
    
    var tempIndex = +document.getElementById("ti").innerHTML;
    var temp = +document.getElementById("t").innerHTML;

    
}
function randomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }
document.getElementById("nextiteration").addEventListener("click", display);
