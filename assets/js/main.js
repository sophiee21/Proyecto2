
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
     //le asigno la id de cada card para luego acceder a cada uno sin tener que hacer denuevo la llamada a la api
    card.setAttribute("id",id);
    card.setAttribute("class","cursorPointer card-style");
    card.appendChild(imageFilm);
    card.appendChild(name);
    card.appendChild(originalName);
    
    //card.style.backgroundColor="blue";

   
    
    card.addEventListener("click",pagcard)

    cardsContainer.appendChild(card);
}

function pagcard(){
    //obtengo posicion del objeto clickeado dentro del array 
    
    //guardo id en localstorage asi se conserva la informacion
    localStorage.setItem("posicion",this.getAttribute("id"));



    window.location.href="card.html"
}


/*--------------------PAGINA CARD---------------------*/
//para que al momento de hacer click cargue la pag conservando los datos
if(document.getElementById("info-cards")){
const infocards=localStorage.getItem("id");







//que pase luego de mostrar la informacion
const remove=localStorage.removeItem("id")
}


/*prueba*/
//creo una clase para los detalles y como parametro le doy los datos de la api
/*
class pelicula{
    #titulo;
    #imagen;
    #tituloriginal;
    #id;
    constructor(titulo,imagen,tituloriginal,id, descripcion,director,productor,people,duracion){
        this.#titulo=titulo;
        this.#imagen=imagen;
        this.#tituloriginal=tituloriginal;
        this.#id=id;
        this.#director=director;
        this.#productor=productor;
        this.#people=people;
        this.#duracion=duracion;

        cardDetalle(){
        //creo los elementos de la segunda pagina
        let titulopelicula=document.querySelector("");
        titulopelicula.textContent=this.titulo;
        let titleoriginal=document.querySelector("");
        titleoriginal.textContent=this.tituloriginal;
        let imagenpelicula=document.querySelector("");
        imagenpelicula.innerHTML= this.imagen;
        let descripcionpelicula=document.querySelector("");
        descripcionpelicula.textContent= this.descripcion;
         let directorpelicula=document.querySelector("");
        directorpelicula.textContent=this.director;
        let productorpelicula=document.querySelector("");
        productorpelicula.textContent=productor;
        let duracionpelicula=document.querySelector("");
        duracion.textContent=duracion;
        //agrego id
        let identificacion=document.querySelector("");
        identificacion.setAttribute("id",id);


        }


        


    }
    



}


*/





/*
console.log(window.location.href)
const myURL = new URL(window.location.href)
console.log(myURL.searchParams.get("postID"))*/