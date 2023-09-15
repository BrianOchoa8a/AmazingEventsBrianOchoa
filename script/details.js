//Importacion de funciones
import {crearTarjeta} from "../modules/functions.js";
//Api URL
const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';
//Direcciones HTML
let $listaTarjetas = document.getElementById('sectionCard');

fetch(URL_API)
.then(response => response.json())
.then(({events, _id}) => {
let url = window.location.search;
console.log(url);
let parametro = new URLSearchParams(url);
console.log(parametro);
let idEvento = parametro.get("parametro");

let comparacion = events.find((card) => card._id == idEvento);
$listaTarjetas.innerHTML= crearTarjeta(comparacion)
})
.catch(err => console.log(err))
