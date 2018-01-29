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
clearContainers('body-content');
clearContainers('scripts-block');
/*
document.getElementById('game').addEventListener('click');
document.getElementById('bubble').addEventListener('click');
document.getElementById('insert').addEventListener('click');
document.getElementById('select').addEventListener('click');
*/