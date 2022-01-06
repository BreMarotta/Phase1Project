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


// Function to create card and add eventListeners to play hide and seek with from and occasion info
function createPopCard(pop){
    let card =document.createElement('p')
    card.className = "card"
    card.innerHTML = `
        <h2>${pop.name}</h2>
        <h3><span>${pop.fandom}</h3>
        <img src="${pop.image}" class="img"/>
        <h4>From:   ${pop.from} <br>${pop.occasion}</h4>
        `
        document.querySelector('#funko-pop-collection').appendChild(card)
    
    card.addEventListener("mouseenter", (e) => {
        e.target.children[3].style.visibility = "visible"; 
    })
    card.addEventListener("mouseleave", (e) => {
        e.target.children[3].style.visibility = "hidden";
    })
}


//Form to add new Pop to collection. Form hides when not needed. Fetch posts new Pop to db.json
const showFormBtn =document.querySelector('btn').addEventListener("click", () =>{
    const form =document.querySelector('form')
    form.style.display = "block";
})

const formSubmit =document.querySelector("button").addEventListener("click", addNew)

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
    document.querySelector('form').reset()
    document.querySelector('form').style.display = "none";
}


//Filter Pops by fandom and a button to reset and display full collection
const allPops = document.getElementsByClassName('card');

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

