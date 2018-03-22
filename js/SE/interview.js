var qArray = 
['Can you tell me a little about yourself?', 
'Why are you leaving your last job?', 
'What is your greatest weakness?', 
'What is your greatest strength?', 
'Where do you see yourself being in 3 to 5 years from now?', 
'Why should we hire you?', 
'Why do you want this job?', 
'Salary. What are you looking for?', 
'Are you a team player?',
'Tell me about a problem you have solved?'];
var qIndex = [0,1,2,3,4,5,6,7,8,9];

function display() {
    var nextValue = +document.getElementById("qnumber").innerHTML.slice(20);
    if( nextValue === 10){
        alert("The questions ended!");
    } 
    else {
        document.getElementById("qtext").innerHTML = qArray[qIndex[nextValue]];
        nextValue++;         
        document.getElementById("qnumber").innerHTML = "Current question: № "+ nextValue;
    }
}
function randomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

document.getElementById('nextquestion').addEventListener('click', display);
document.getElementById('qnumber').innerHTML = "Current question: № 1";
var randomValueOne, randomValueTwo;
for(var i = 0; i < 100; i++){
    randomValueOne = randomInt(1, 10) - 1;
    randomValueTwo = randomInt(1, 10) - 1;
    if(randomValueOne === randomValueTwo) continue;
    var temp = qIndex[randomValueOne];
    qIndex[randomValueOne] = qIndex[randomValueTwo];
    qIndex[randomValueTwo] = temp;
}
document.getElementById('qtext').innerHTML = qArray[qIndex[0]];