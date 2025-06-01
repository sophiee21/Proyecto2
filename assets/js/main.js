/*const url = fetch('https://the-vegan-recipes-db.p.rapidapi.com/45')*/
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3ed6221904msh9afe7b0ad24b0f5p1cee26jsn74303a7952aa',
		'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};


/*async function getData() {
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    } catch (error) {
	    console.error(error)
    }
}*/

const myData = fetch('https://the-vegan-recipes-db.p.rapidapi.com/', options)

myData
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error("Error: ≽^• ˕ • ྀི≼ ༘˚⋆𐙚｡⋆𖦹.✧˚")
    })

function makeCards (recipes){
    const {title, image}=recipes
    const cardsContainer =document.getElementById("cards-container");

    const name=document.createElement("h3");
    title.textContent=name;

    const card=document.createElement("div");
    card.appendChild(name);

    cardsContainer.appendChild(card);
}
let i
/* for (i=0 ; i < 9 ; i++){
    makeCards(data[i]);
} */

console.log(window.location.href)
const myURL = new URL(window.location.href)
console.log(myURL.searchParams.get("postID"))