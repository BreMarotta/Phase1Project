const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript!";
document.querySelector("body").appendChild(h2);


const button =document.querySelector("button").addEventListener("click", foo)
function foo(){
    alert("I've been clicked!")
}