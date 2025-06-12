

if(document.getElementById("indexx")){
const myData = fetch('https://ghibliapi.vercel.app/films');


myData
    .then(response => {
        if (!response.ok) {
            const messageError = document.getElementById("error-container");
            messageError.textContent=response.status;
            throw new Error("Estado: " + response.status); 
        }
        return response.json();})
    .then(data => {

        for(let i=0;i<data.length;i++){
            makeCards(data[i]);
        }
        console.log(data)
    })
    .catch(err => {
        const messageError = document.getElementById("error-container");
        messageError.textContent=err;
        console.error(err);
    })

function makeCards (films){
    const {image, title, original_title, id} = films
    const cardsContainer =document.getElementById("cards-container");

    const imageFilm=document.createElement("img");
    imageFilm.src=image;

    const name=document.createElement("h3");
    name.textContent=title;
    name.setAttribute("class","zen-maru-gothic-regular w10");

    const originalName=document.createElement("h4");
    originalName.textContent=original_title;
    originalName.setAttribute("class","zen-maru-gothic-regular w10");
   
    imageFilm.setAttribute("class","image-film");
    const card=document.createElement("div");
    card.setAttribute("id",id);
    card.setAttribute("class","cursorPointer card-style animate__animated animate__zoomInLeft");
    card.appendChild(imageFilm);
    card.appendChild(name);
    card.appendChild(originalName);
    //card.style.backgroundColor="blue"; 
    card.addEventListener("click",pagcard)
    cardsContainer.appendChild(card);
}
function pagcard(){
    const idpelicula= this.getAttribute("id");
    window.location.href=`card.html?id=${idpelicula}`
}
}
/*window.addEventListener("load", () => {
    const loader = document.getElementsByClassName("loader");
    loader.setAttribute("class", "loader-hidden");
   
})*/
/*--------------------PAGINA CARD---------------------*/

if (document.getElementById("info-cards")) {
    const myurl = 'https://ghibliapi.vercel.app/films';

    function obtenerId() {
        const param = window.location.search;
        const urlparams = new URLSearchParams(param);
        const valorid = urlparams.get('id');
        return valorid;
    }

    async function obtenerdatos(id) {
        if (!id) {
            console.error("Error: no se obtuvo id de pelicula");
            return;
        }
        try {
            const response = await fetch(`${myurl}/${id}`);
            if (!response.ok) {
                const messageError = document.getElementById("error-container");
                messageError.textContent = response.status;
                throw new Error("Estado: " + response.status);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            const messageError = document.getElementById("error-container");
            messageError.textContent = err;
            console.error(err);
        }
    }

    function infoFilms(films) {
        const {image, title, original_title, director, producer, release_date, running_time, description,} = films;
        const titleFilm = document.getElementById("title");
        titleFilm.textContent = title;
        const originalTitleFilm = document.getElementById("original-name");
        originalTitleFilm.textContent = original_title;
        const container = document.getElementById("image-film");
        const imageFilm=document.createElement("img");
        imageFilm.src=image;
        container.appendChild(imageFilm)

        const directorFilm = document.getElementById("director-name");
        directorFilm.textContent = "Director: "+ director;
        
        const productorFilm = document.getElementById("producer-name");
        productorFilm.textContent ="Producer: "+ producer;
        const timeFilm = document.getElementById("run-time");
        timeFilm.textContent = "Running time: "+ running_time;
        const dateFilm = document.getElementById("relese-date");
        dateFilm.textContent = "Release date: "+ release_date;
        const descriptionFilm = document.getElementById("film-descripcion");
        descriptionFilm.textContent = description;

        


        
    }

    document.addEventListener("DOMContentLoaded", async () => {
        const peliculaSeleccionada = obtenerId();
        const detalles = await obtenerdatos(peliculaSeleccionada);
        if (detalles) {
            infoFilms(detalles);
        }
    });
}





/*
console.log(window.location.href)
const myURL = new URL(window.location.href)
console.log(myURL.searchParams.get("postID"))*/