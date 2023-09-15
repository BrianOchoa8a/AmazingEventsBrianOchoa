//Importacion de funciones
import {maxAsistencia, minAsistencia, maxCapacidad,segundaTabla, filtroFechaUpcoming, tercerTabla,filtroFecha} from "../modules/functions.js";
//Api URL
const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';
//Direcciones HTML
let $mayorPorcentaje = document.getElementById('mayorPje');
let $menorPorcentaje = document.getElementById('minimoPje');
let $maxCapacidad = document.getElementById('maxCapacidad');
let $segTablaId = document.getElementById('segTabla');
let $terTablaId = document.getElementById('terTabla');

fetch(URL_API)
.then(response => response.json())
.then(({events, currentDate}) => {
    $mayorPorcentaje.innerHTML = maxAsistencia(events);
    $menorPorcentaje.innerHTML = minAsistencia(events);
    $maxCapacidad.innerHTML = maxCapacidad(events);
    let listaCategorias = [...new Set(events.map(tarjeta => tarjeta.category))];
    let eventosUpcoming = filtroFechaUpcoming(events, currentDate);
    $segTablaId.innerHTML=segundaTabla(listaCategorias, eventosUpcoming);
    let eventosPast = filtroFecha(events, currentDate);
    $terTablaId.innerHTML=tercerTabla(listaCategorias, eventosPast);
})
.catch(err => console.log(err))
