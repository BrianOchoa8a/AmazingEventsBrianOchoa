const $filtrado = document.getElementById ('checkId');
let $search = document.getElementById('searchInput');

function estructuraTarjeta (datos){
    return `<div class="card col-md-4 stile-card" style="width: 18rem;">
    <img src="${datos.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${datos.name}</h5>
      <p class="card-text">${datos.description}</p>
      <div  class="d-flex justify-content-between">            
        <h6>$${datos.price}</h6>
        <a href="./pages/details.html?parametro=${datos._id}" class="btn btn-primary">Details</a></div>
     </div>
    </div>`
    }

function listaTarjeta (tarjetas){
    let tarjetero="";
    for (let individual of tarjetas) {
        tarjetero = tarjetero + estructuraTarjeta(individual);
    }
return tarjetero;
}

let listado= listaTarjeta(data.events);

function insertarTarjetas (listadoProv, id){
    let contenido = document.getElementById(id);
    contenido.innerHTML=listadoProv;
}

insertarTarjetas(listado, "tarjetasId");


//escuchador de check
$filtrado.addEventListener( "change" , filtrosCruzados);
  
  //filtrado por check
   function filtroPorCheck(array){
     const nodeListCheck = document.querySelectorAll("input[type=checkbox]:checked");
     const arrayChech = Array.from(nodeListCheck);
     const arrayValores = arrayChech.map( input => input.value);
     const filtradosCheck = array.filter(evento=>(arrayValores.includes(evento.category))|| arrayValores.length==0);
     return(filtradosCheck);
  }

  //id boton
  let $button = document.getElementById('searchButton');

  //escuchador de search
  $button.addEventListener("click", (e) => {
    e.preventDefault();
    filtrosCruzados();
    $search.value = "";
  });
// filtro search
  function filtroSearch(array, input){
    let tarjetaFiltrada = array.filter(tarjetas => tarjetas.name.toLowerCase().includes(input.toLowerCase()))
    return tarjetaFiltrada;
  };
  
  //filtro cruzado
  function filtrosCruzados(){
    let filtroTotal = filtroSearch(filtroPorCheck(data.events), $search.value)
    insertarTarjetas(listaTarjeta(filtroTotal), "tarjetasId"); //
};