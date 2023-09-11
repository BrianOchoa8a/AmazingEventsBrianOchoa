
function estructuracheck (datos){
    return `<div>
    <div class="d-flex">
      <label for="miCheckbox">
        <input type="checkbox" id="miCheckbox" name="miCheckbox" value="${datos}"/>
      </label>
      <h6>${datos}</h6>
      </div>
    </div>`
}

let obtenercategorias = data.events.map((evento) => evento.category);

let categoria = [...new Set(obtenercategorias)];

function lista (tarjetas){
    let tarjetero="";
    for (let individual of tarjetas) {
        tarjetero = tarjetero + estructuracheck(individual);
    }
return tarjetero;
}
let listadocheck = lista(categoria);


function insertarChecks (listadoProv, id){
    let contenido = document.getElementById(id);
    contenido.innerHTML+=listadoProv;
}

insertarChecks(listadocheck, "checkId");
