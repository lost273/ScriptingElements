

var el = document.querySelectorAll("#field.row div");
for (var index = 0; index < el.length; index++) {
    console.log(el[index].innerText);
    el[index].addEventListener("click", move);
}
document.getElementById('game').addEventListener('click');
document.getElementById('bubble').addEventListener('click');
document.getElementById('insert').addEventListener('click');
document.getElementById('select').addEventListener('click');