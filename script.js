//Initial Fetch to display cards from db.json
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
function sortPops(){
    console.log(`Need to display all pops in ${this.id} fandom`)
}
function addNew(){
    alert("This will open up a form to add a new Funko Pop card to the collection")
}
function resetCollection(){
    alert("When user clicks this button, collection should reset, showing all cards")
}


function displayCollection(pop){
    let card =document.createElement('p')
    card.className = "card"
    card.innerHTML = `
        <h2>${pop.name}</h2>
        <h4><span>${pop.fandom}</h4>
        <img src="${pop.image}" class="img"/>
        <h5>From: ${pop.from}</h5>
        `
    document.querySelector('#funko-pop-collection').appendChild(card)

}
//Fandom Buttons: will eventually use these to sort collection by fandom!
const btns =document.getElementsByClassName("fandomPics");
    for(const btn of btns){
        btn.addEventListener("click", sortPops)
    }
//Reset Button: Will reset collection to include all cards
const resetCollection =document.querySelector("img.logo").addEventListener("click", resetCollection)

//Should open form to add new Funko Pop to collection
const button =document.querySelector("button").addEventListener("click", addNew)

// //const cards =document.querySelectorAll("img.card")
//     for(const card of cards){
//         card.addEventListener("mouseover", foo3)
//     }


