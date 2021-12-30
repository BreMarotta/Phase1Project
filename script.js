//placeholder functions before I add Fetch and more functionality
function foo(){
    console.log(this.id)
    alert("Eventually, each of these buttons will sort the entire collection and only show cards form the selected fandom")
}
function foo1(){
    alert("This will open up a form to add a new Funko Pop card to the collection")
}
function foo2(){
    alert("When user clicks this button, collection should reset, showing all cards")
}

//Fandom Buttons: will eventually use these to sort collection by fandom!
const btns =document.getElementsByClassName("fandomPics");
    for(const btn of btns){
        btn.addEventListener("click", foo)
    }
const resetCollection =document.querySelector("img.logo").addEventListener("click", foo2)
const button =document.querySelector("button").addEventListener("click", foo1)

