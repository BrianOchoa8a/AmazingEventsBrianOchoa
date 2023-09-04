function estructuraTarjeta (datos){
    return `<div class="card col-md-4 stile-card" style="width: 18rem">
    <img src="${datos.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${datos.name}</h5>
      <p class="card-text">${datos.description}</p>
      <div  class="d-flex justify-content-between">            
        <h6>$${datos.price}</h6>
        <a href="./pages/details.html" class="btn btn-primary">Details</a></div>
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
