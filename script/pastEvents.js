//Importacion de funciones
import {lista,filtroFecha, listaEstructuraUpPast,filtrosCruzadosPastUp} from "../modules/functions.js";
//Api URL
const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';
//Direcciones HTML
let $listaTarjetas = document.getElementById('fechaPastId');
let $filtrado = document.getElementById ('checkId');
let $search = document.getElementById('searchInput');
let $button = document.getElementById('searchButton');

let filtradoPorFecha;

fetch(URL_API)
.then(response => response.json())
.then(({events, currentDate}) =>{
  console.log(events);
  filtradoPorFecha = filtroFecha(events, currentDate);
  $listaTarjetas.innerHTML = listaEstructuraUpPast(filtradoPorFecha);
  let listaCategorias = [...new Set(events.map(tarjeta => tarjeta.category))]
  $filtrado.innerHTML = lista(listaCategorias);
  console.log(filtradoPorFecha);
})

//Escuchador de check combinado con search
$filtrado.addEventListener( "change" , () => {
  filtrosCruzadosPastUp(filtradoPorFecha, $search, $listaTarjetas)
});
//Escuchador de search combinado con check
$button.addEventListener("click", (e) => {
  e.preventDefault();
  filtrosCruzadosPastUp(filtradoPorFecha, $search, $listaTarjetas);
});