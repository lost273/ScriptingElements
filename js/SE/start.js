

var el = document.querySelectorAll("#field.row div");
for (var index = 0; index < el.length; index++) {
    console.log(el[index].innerText);
    el[index].addEventListener("click", move);
}