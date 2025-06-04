
const myData = fetch('https://ghibliapi.vercel.app/films');


myData
    .then(response => response.json())
    .then(data => {

        for(let i=0;i<data.length;i++){
            makeCards(data[i]);
        }
        console.log(data)
    })
    .catch(err => {
        console.error(err);
    })

function makeCards (films){
    const {title, original_title, image,id}= films
    const cardsContainer =document.getElementById("cards-container");

    const name=document.createElement("h3");
    name.textContent=title;

    const originalName=document.createElement("h4");
    originalName.textContent=original_title;

    const imageFilm=document.createElement("img");
    imageFilm.src=image;
   
    imageFilm.setAttribute("class","image-film")
    const card=document.createElement("div");
     //le asigno la id de cada card para luego acceder a cada uno sin tener que hacer denuevo la llamada a la api
    card.setAttribute("id",id)
    card.appendChild(name);
    card.appendChild(originalName);
    card.appendChild(imageFilm);
    //card.style.backgroundColor="blue";

   
    
    card.addEventListener("click",pagcard)
    //

    cardsContainer.appendChild(card);
}

function pagcard(){
    //obtengo posicion del objeto clickeado dentro del array 
    let posicion=this.getAttribute("id");//obtengo la id del objeto
    //guardo id en localstorage asi se conserva la informacion
    localStorage.setItem("posicion");
    window.location.href="card"
}


/*--------------------PAGINA CARD---------------------*/
//para que al momento de hacer click cargue la pag conservando los datos








/*
console.log(window.location.href)
const myURL = new URL(window.location.href)
console.log(myURL.searchParams.get("postID"))*/