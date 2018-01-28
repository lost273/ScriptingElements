/*
var newElement = document.createElement('p');
newElement.innerText = '123';
el.appendChild(newElement);
*/
var parentContainer = document.getElementById('body-content');
var elementsToRemove = parentContainer.getElementsByTagName('*');
while (elementsToRemove.length !== 0) {
    parentContainer.removeChild(elementsToRemove[0]);
}

/*
document.getElementById('game').addEventListener('click');
document.getElementById('bubble').addEventListener('click');
document.getElementById('insert').addEventListener('click');
document.getElementById('select').addEventListener('click');
*/