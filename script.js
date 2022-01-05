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
        <h5>From: ${pop.from} <br>${pop.occasion}</h5>
        `
    document.querySelector('#funko-pop-collection').appendChild(card)
    card.addEventListener("mouseenter", (e) => {
        e.target.children[3].style.visibility = "visible"; 
    })
    card.addEventListener("mouseleave", (e) => {
        e.target.children[3].style.visibility = "hidden";
    })
}


//WORKS Submits form to add new Funko Pop to collection
const formSubmit =document.querySelector("button").addEventListener("click", addNew)
//WORKS! Function to add new Funko Pop to the collect (posts to db.json and creates new card)
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
           "occasion": e.path[4].querySelector('#occasion').value
        }),
    })
    .then(res => res.json())
    .then(newPop => createPopCard(newPop))
    document.querySelector('form').reset();
}
const allPops = document.getElementsByClassName('card');



//console.log(displayCards)
function foo(){
    console.log("got to function")
}


//WORKS!!!Attempting to create function to only display filtered cards for each fandom
const btns =document.getElementsByClassName("fandomPics");
for(const btn of btns){
    btn.addEventListener("click", (e) => {
        for(const card of allPops){
            card.style.display= "inline-grid";
             let fandom =card.children[1].innerText;
            if(e.target.id !== fandom){
                card.style.display= "none";
            } 
        } 
    })
}
//Reset Button: Will reset collection to include all cards
const resetButton =document.querySelector("img.logo").addEventListener("click", () => {
    for(const card of allPops){
        card.style.display= "inline-grid";
    }
})

