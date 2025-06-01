
const myData = fetch('https://ghibliapi.vercel.app/people');


/*const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3ed6221904msh9afe7b0ad24b0f5p1cee26jsn74303a7952aa',
		'x-rapidapi-host': 'studio-ghibli.p.rapidapi.com'
	}
};

const myData =fetch('https://studio-ghibli.p.rapidapi.com/films',options);*/

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