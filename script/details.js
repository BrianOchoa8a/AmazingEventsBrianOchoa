let url = window.location.search
let parametro = new URLSearchParams(url);
let idEvento = parametro.get("serch");


let comparacion = data.events.find((card) => card._id == idEvento);

function crearTargeta(tarjeta){

    return <div>  
    <img  id="imagen-detalle" src="${tarjeta.image}" class="card-img-top" alt="food_fair">
    <div class="card-body">
      <h5 class="card-title">${tarjeta.title}</h5>
      <p class="card-text">${tarjeta.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">category: ${tarjeta.category}</li>
      <li class="list-group-item">Place: ${tarjeta.place}</li>
      <li class="list-group-item">Capacity: ${tarjeta.capacity}</li>
      <li class="list-group-item">Estimate: 900</li>
      <li class="list-group-item">Price: $${tarjeta.price}</li>
    </ul>
    </div>
}

document.getElementById("tarjeta-detalle").innerHTML = crearTargeta(comparacion)