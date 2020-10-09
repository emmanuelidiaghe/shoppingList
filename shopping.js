var item = document.getElementById("item");
var button = document.getElementById("enter_button");
var del = document.getElementById(item);
var ul = document.querySelector("ul");
var list = document.getElementById("list");
var body = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var main = document.getElementById("main");

function action() {
    var li = document.createElement("li");
    var delete_button = document.createElement("button");
    delete_button.appendChild(document.createTextNode("Delete"));
    delete_button.setAttribute("onclick", "list.removeChild(this.parentElement)");
    li.appendChild(document.createTextNode(item.value));
    li.appendChild(delete_button);
    ul.appendChild(li);
    item.value = "";
}
function background_css() {
    main.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

item.addEventListener("keypress", function(event) {
    if ((item.value.length > 0) && (event.keyCode === 13)) {
            action();
        }
})
button.addEventListener("click", function() {
    if (item.value.length > 0) {
        action();
        }
})
ul.addEventListener("click", function(event) {
    if (event.target.tagName === 'LI' && event.target.style.textDecoration === "") {
        event.target.style.textDecoration = "line-through";
    }
    else if (event.target.tagName === 'LI' && event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "";
    }
})

color1.addEventListener("input", background_css);
color2.addEventListener("input", background_css);