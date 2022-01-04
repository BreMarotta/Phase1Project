//Initial Fetch to display cards from db.json
document.addEventListener('DOMContentLoaded', init);
function init(){
    fetch(`http://localhost:3000/funkoPops`)
    .then(response => response.json())
    .then(pops => {
        for(const pop of pops){
            createPopCard(pop);
        }
    })
}

//Functions:
// Function to create card
function createPopCard(pop){
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
//placeholder functions before I add Fetch and more functionality

function addNew(e){
    e.preventDefault()
    fetch(`http://localhost:3000/funkoPops`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json" 
        },
        body: JSON.stringify({
           "name": e.path[3].querySelector('#name').value,
           "fandom": e.path[3].querySelector('#fandom-dropdown').value,
           "image": e.path[3].querySelector('#picture').value,
           "from": e.path[3].querySelector('#giver').value,
        }),
    })
    .then(res => res.json())
    .then(newPop => createPopCard(newPop))
    document.querySelector('form').reset();
}
function resetCollection(){
    alert("When user clicks this button, collection should reset, showing all cards")
}

function sortPops(){
    console.log(`Need to display all pops in ${this.id} fandom`)
}

//Fandom Buttons: will eventually use these to sort collection by fandom!
const btns =document.getElementsByClassName("fandomPics");
    for(const btn of btns){
        btn.addEventListener("click", sortPops)
    }
//Reset Button: Will reset collection to include all cards
const resetButton =document.querySelector("img.logo").addEventListener("click", resetCollection)

//Should open form to add new Funko Pop to collection
const formSubmit =document.querySelector("button").addEventListener("click", addNew)

// //const cards =document.querySelectorAll("img.card")
//     for(const card of cards){
//         card.addEventListener("mouseover", foo3)
//     }


