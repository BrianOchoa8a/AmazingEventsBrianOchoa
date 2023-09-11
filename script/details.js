console.log([window.location.search]);

let parametro = location.search;


let params = new URLSearchParams(parametro);

let iDCard = params.get("parametro");

let title = data.events.fine(card => card._id === iDCard);

//dom

let contenedorCardDetalle = document.getElementById("sectionCard");
console.log(contenedorCardDetalle)