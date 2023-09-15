//Importacion de funciones
import {listaEstructura,lista, filtrosCruzados } from "../modules/functions.js";
//Api URL
const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';
//Direcciones HTML
let $listaTarjetas = document.getElementById('tarjetasId');
let $filtrado = document.getElementById ('checkId');
let $search = document.getElementById('searchInput');
let $button = document.getElementById('searchButton');

let tarjetas;

fetch(URL_API)
.then(response => response.json())
.then(({events}) => {
  tarjetas = events;
  console.log(events);
  $listaTarjetas.innerHTML = listaEstructura(events);
  let listaCategorias = [...new Set(tarjetas.map(tarjeta => tarjeta.category))]
  $filtrado.innerHTML = lista(listaCategorias);
})
.catch(err => console.log(err))

//Escuchador de check combinado con search
$filtrado.addEventListener( "change" , () => {
  filtrosCruzados(tarjetas, $search, $listaTarjetas)
});
//Escuchador de search combinado con check
$button.addEventListener("click", (e) => {
  e.preventDefault();
  filtrosCruzados(tarjetas, $search, $listaTarjetas);
});

