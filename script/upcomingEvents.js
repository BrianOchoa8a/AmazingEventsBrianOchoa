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

    function filtroFecha (listaSinFiltro){
        let tarjetasFiltradas =[];
        for (let filtro of listaSinFiltro) {
       
            if(filtro.date>= data.currentDate){
                tarjetasFiltradas.push(filtro)
            }
        }
        return tarjetasFiltradas;
    }

    let listadoPorFecha= filtroFecha(data.events);
    
    function listaTarjeta (tarjetas){
        let tarjetero="";
        for (let individual of tarjetas) {
            tarjetero = tarjetero + estructuraTarjeta(individual);
        }
    return tarjetero;
    }
    
    let listados= listaTarjeta(listadoPorFecha);

    function insertarTarjetas (listadoProv, id){
        let contenidos = document.getElementById(id);
        contenidos.innerHTML=listadoProv;
    }
    
    insertarTarjetas(listados, "fechaUpcomingId");