document.addEventListener('DOMContentLoaded', init);
function init(){
    fetch(`http://localhost:3000/funkoPops`)
    .then(response => response.json())
    .then(pops => {
        for(const pop of pops){
        displayCollection(pop);
    }
    })
}
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
//function foo3(){
//     alert("Maybe use this feature to show who funko pop was from?")
// }

function displayCollection(pop){
    console.log(pop)
    let card =document.createElement('p')
    card.className = "card"
    card.innerHTML = `
        <h2>${pop.name}<br><h4>${pop.fandom}</h4><h2>

        <img src="${pop.image}" class="img"/>
        <h5>From: ${pop.from}</h5>
        `
    document.querySelector('#funko-pop-collection').appendChild(card)

}
//Fandom Buttons: will eventually use these to sort collection by fandom!
const btns =document.getElementsByClassName("fandomPics");
    for(const btn of btns){
        btn.addEventListener("click", foo)
    }
//Reset Button: Will reset collection to include all cards
const resetCollection =document.querySelector("img.logo").addEventListener("click", foo2)

//Should open form to add new Funko Pop to collection
const button =document.querySelector("button").addEventListener("click", foo1)

// //const cards =document.querySelectorAll("img.card")
//     for(const card of cards){
//         card.addEventListener("mouseover", foo3)
//     }


