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
var qIndex = [1,2,3,4,5,6,7,8,9,10];

function display() {
    var nextValue = document.getElementById("qnumber").innerHTML;
    if( === "Current question: № 10"){
        alert("The questions ended!");
        break;
    }
    
    document.getElementById("qtext").innerHTML = qArray[];
    
    
    var tempIndex = +document.getElementById("ti").innerHTML;
    var temp = +document.getElementById("t").innerHTML;

    
}
function randomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

document.getElementById("nextiteration").addEventListener("click", display);
var randomValueOne, randomValueTwo;
for(var i = 0; i < 100; i++){
    randomValueOne = randomInt(1, 10);
    randomValueTwo = randomInt(1, 10);
    if(randomValueOne === randomValueTwo) continue;
    var temp = qIndex[randomValueOne];
    qIndex[randomValueOne] = qIndex[randomValueTwo];
    qIndex[randomValueTwo] = temp;
}