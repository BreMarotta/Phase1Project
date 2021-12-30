//My Buttons: will eventually use these to sort collection by fandom!
const btns =document.getElementsByClassName("fandomPics");
    for(const btn of btns){
        btn.addEventListener("click", foo)
    }

const button =document.querySelector("button").addEventListener("click", foo)
function foo(){
    console.log(this.id)
}

