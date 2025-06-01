
const myData = fetch('https://ghibliapi.vercel.app/films');


myData
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err);
    })

/*function makeCards (recipes){
    const {title, image}=recipes
    const cardsContainer =document.getElementById("cards-container");

    const name=document.createElement("h3");
    title.textContent=name;

    const card=document.createElement("div");
    card.appendChild(name);

    cardsContainer.appendChild(card);
}
let i

console.log(window.location.href)
const myURL = new URL(window.location.href)
console.log(myURL.searchParams.get("postID"))*/