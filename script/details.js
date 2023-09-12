let url = window.location.search;

console.log(url);

let parametro = new URLSearchParams(url);
console.log(parametro);
 

let idEvento = parametro.get("parametro");


let comparacion = data.events.find((card) => card._id == idEvento);

function crearTarjeta(tarjeta){
    return `<img src=${tarjeta.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${tarjeta.name}</h5>
      <p class="card-text">${tarjeta.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">category: ${tarjeta.category}</li>
      <li class="list-group-item">Place: ${tarjeta.place}</li>
      <li class="list-group-item">Capacity: ${tarjeta.capacity}</li>
      <li class="list-group-item">Estimate: 900</li>
      <li class="list-group-item">Price: $${tarjeta.price}</li>
    </ul>`
}

document.getElementById("sectionCard").innerHTML = crearTarjeta(comparacion)