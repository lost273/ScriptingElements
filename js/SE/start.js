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

	for(var i = 0; i < 3; i++){
		var nextRow = parentContainer.appendChild(rowElement.cloneNode(true));
		for(var j = 0; j < 3; j++){
			var el = nextRow.appendChild(colElement.cloneNode(true));
			if(i === 0 && j === 0) {
				el.id = "square-empty";
			} else {
				el.innerText = "";
			}
		}
	}

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