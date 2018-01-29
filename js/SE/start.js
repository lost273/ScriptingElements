/*
var newElement = document.createElement('p');
newElement.innerText = '123';
el.appendChild(newElement);
*/
//delete contents of the container
function clearContainers(name){
	var parentContainer = document.getElementById(name);
	var elementsToRemove = parentContainer.getElementsByTagName('*');
	while (elementsToRemove.length !== 0) {
	    parentContainer.removeChild(elementsToRemove[0]);
	}
}
//construct html tags for the game
function makeGame(){
	var parentContainer = document.getElementById('body-content');
	var rowElement = document.createElement('div');
	rowElement.className = "row";
	rowElement.id = "field";
	var colElement = document.createElement('div');
	colElement.className = "col-md-1";
	colElement.id = "square";
	parentContainer.appendChild(rowElement);
	rowElement.appendChild(colElement);
	rowElement.appendChild(colElement);
}

clearContainers('body-content');
clearContainers('scripts-block');
makeGame();
/*
document.getElementById('game').addEventListener('click', makeGame);
document.getElementById('bubble').addEventListener('click');
document.getElementById('insert').addEventListener('click');
document.getElementById('select').addEventListener('click');
*/