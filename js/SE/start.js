document.getElementById('game').addEventListener('click', makeGame);
document.getElementById('bubble').addEventListener('click', makeSort);
document.getElementById('insert').addEventListener('click', makeSort);
document.getElementById('select').addEventListener('click', makeSort);

//delete contents of the container
function clearContainers(name){
	var parentContainer = document.getElementById(name);
	var elementsToRemove = parentContainer.getElementsByTagName('*');
	while (elementsToRemove.length !== 0) {
	    parentContainer.removeChild(elementsToRemove[0]);
	}
}
//construct html tags for the script
function setScript(scriptName){
	var parentContainer = document.getElementById('scripts-block');
	var scriptTag = document.createElement('script');
	scriptTag.src = "js/SE/" + scriptName;
	parentContainer.appendChild(scriptTag);
}
//set the tab to active class
function setMenuTab(tab){
	document.querySelector('.nav-link.active').className = "nav-link";
	tab.className = "nav-link active";
}
//construct html tags for the game
function makeGame(e){
	clearContainers('body-content');
	clearContainers('scripts-block');
	setMenuTab(e.target);
	var parentContainer = document.getElementById('body-content');
	var rowElement = document.createElement('div');
	rowElement.className = "row";
	rowElement.id = "field";
	var colElement = document.createElement('div');
	colElement.className = "col-md-1";
	colElement.id = "square";
	//construct squares with DIV tags
	for(var i = 0, k = 0; i < 3; i++){
		var nextRow = parentContainer.appendChild(rowElement.cloneNode(true));
		for(var j = 0; j < 3; j++, k++){
			var nextCol = nextRow.appendChild(colElement.cloneNode(true));
			if(i === 0 && j === 0) {
				nextCol.id = "square-empty";
			} else {
				nextCol.innerText = k;
			}
		}
	}
	setScript('movesquare.js');
}
//construct html tags for the algorithm
function makeSort(e){
	var a = [99, -10, 10012, 18, -978, 5623, 463, -9, 287, 49];
	clearContainers('body-content');
	clearContainers('scripts-block');
	setMenuTab(e.target);
	var parentContainer = document.getElementById('body-content');
	var pElement = document.createElement('p');
	parentContainer.appendChild(pElement.cloneNode(true)).innerText = "Current array:";
	var rowElement = document.createElement('div');
	rowElement.className = "row";
	var colElement = document.createElement('div');
	colElement.className = "col-md-1";
	var smallElement = document.createElement('div');
	smallElement.className = "square-small";
	//construct squares with DIV tags
	for(var i = 0; i < 2; i++){
		var k = 0;
		var nextRow = parentContainer.appendChild(rowElement.cloneNode(true));
		if(i === 0) {
			parentContainer.appendChild(pElement.cloneNode(true)).id = "i";
			parentContainer.appendChild(pElement.cloneNode(true)).id = "j";
			parentContainer.appendChild(pElement.cloneNode(true)).id = "t";
			parentContainer.appendChild(pElement.cloneNode(true)).id = "ti";
			parentContainer.appendChild(pElement.cloneNode(true)).innerText = "Sorting array:";
		}
		for(var j = 0; j < 10; j++, k++){
			var nextCol = nextRow.appendChild(colElement.cloneNode(true));
			var nextSmall = nextCol.appendChild(smallElement.cloneNode(true));
			if(i === 1) {
				nextSmall.id = k;
			}
			nextSmall.innerText = a[k];
		}
	}
	parentContainer.appendChild(document.createElement('br'));
	//construct button
	var buttonElement = parentContainer.appendChild(document.createElement('button'));
	buttonElement.className = "btn btn-warning";
	buttonElement.type = "button";
	buttonElement.id = "nextiteration";
	buttonElement.innerText = "Next iteration";
	setValues(e.target.id);
	setScript('sort' + e.target.id + '.js');
}