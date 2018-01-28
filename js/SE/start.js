/*
var newElement = document.createElement('p');
newElement.innerText = '123';
el.appendChild(newElement);
*/
var parentContainer = document.getElementById('body-content');
var elementsToRemove = parentContainer.getElementsByTagName('*');
var n = elementsToRemove.length;
for (var index = 0; index < n; index++) {
    elementsToRemove.removeChild(elementsToRemove[index]);
    //console.log(elementsToRemove[index]);
}

/*
document.getElementById('game').addEventListener('click');
document.getElementById('bubble').addEventListener('click');
document.getElementById('insert').addEventListener('click');
document.getElementById('select').addEventListener('click');
*/