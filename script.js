// SIMULACRO DE ENTREGABLE

//defino valor de ticket
const valorTicket = 200;

//defino los porcentajes

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los valores

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('calcular');
const botonReset = document.getElementById('reset');
const p = document.querySelector('p1');


function totalPagar() {
    //calculo valor total
    let totalValor = (cantidad.value) * valorTicket;
    //condicionar por descuento
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    
    else if (categoria.value == 3){
            totalValor = totalValor - (totalValor * descuentoJunior);

    }else{
        totalValor = totalValor;
    }

    p.innerHTML = `Total a pagar : $${totalValor}`;
    }

//boton calcular
botonCalcular.addEventListener('click', totalPagar);
//boton de reset
botonReset.addEventListener('click',()=>{
    p.innerHTML = `Total a pagar : `
})

window.onbeforeunload = function() {
    return "¿Desea ?";
};

