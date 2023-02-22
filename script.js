const myInput = document.querySelector(".input")
const myButton = document.querySelector(".button")
let gilaki = document.querySelector(".buttons")

var ul = document.querySelector(".list");
let li = document.createElement("li");


myButton.onclick = function(){
    let li = document.createElement("li");
    li.innerHTML = myInput.value;
    ul.appendChild(li);
    let button = document.createElement("button");
    li.appendChild(button);
    button.style.width = "60px";
    button.style.height = "20px";
    button.innerHTML = "Delete";
    button.onclick = function(){
        li.style.display = "none";
    }
    

    myInput.value = ""

    

}