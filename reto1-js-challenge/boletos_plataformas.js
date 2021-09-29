
function precioIrAlCine() {
    let precioEntrada= +(document.getElementById("cuanto").value);
    let cantidadDeEntradas=+ (document.getElementById("cuantas").value);
    let resultado=document.getElementById("precioCine")
    let precioFinalEntradas= precioEntrada * cantidadDeEntradas;

    if(precioFinalEntradas > 0){
        resultado.innerHTML= `el precio total de las entradas a cine es : $ ${precioFinalEntradas}`
    }
    return precioFinalEntradas;
}

function precioSuscripcionesStreaming (){
    let precioTotalSuscripcion=0;

    let resultado = document.getElementById("precioStreaming");

    if (document.getElementById("netflix-checbox").checked){
        precioTotalSuscripcion += 16900;
    }
       
    if (document.getElementById("hbo-checbox").checked){
        precioTotalSuscripcion += 9991;
    }

    if (document.getElementById("disney-checbox").checked){
        precioTotalSuscripcion += 23900;
    }
        
    if (document.getElementById("amazon-checbox").checked){
        precioTotalSuscripcion += 14900;
    }

    resultado.innerHTML = `el precio total de las suscripciones es de : $ ${precioTotalSuscripcion}`;
    return precioTotalSuscripcion;
}

function comparacion(e) {
    let resultadoCine=precioIrAlCine() 
    let resultadoSuscripciones=precioSuscripcionesStreaming()

    let resultado= document.getElementById("resultado");

    if (resultadoCine === 0) {
       resultado.innerHTML= "No se puede comparar ya que no has ido a la seccion de peliculas"
    }
    else if (resultadoSuscripciones === 0) {
        resultado.innerHTML= "No se puede comparar ya que no posees una suscripcion a una plataforma de streaming"
    }
    else if (resultadoCine > resultadoSuscripciones){
        resultado.innerHTML= " mejor paga las suscripciones"
    } else if (resultadoSuscripciones > resultadoCine ){
        resultado.innerHTML= " Es mejor ir al cine"
    } else {
        resultado.innerHTML= " en ambas opciones gastarias lo mismo"
    }
    console.log(e)
}

let formulario = document.getElementById("formulario")


formulario.onchange = comparacion

formulario.addEventListener('change', comparacion)

// let boton= document.getElementById("button-calcular");
// boton.onclick= comparacion;

/*
let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
    comparacion()
    e.preventDefault()
})

*

/*
formulario.onmouseover = (e) => {
    console.log("Sobre mi formulario", e)
}

document.getElementById("cuantas").onmouseover = (e) => {
    e.stopPropagation();
}
*/

/*
formulario.onmouseover = (e) => {
    if(e.ctrlKey) {
        formulario.style.background = "red"
    } else {
        formulario.style.background = ""
    }
}
*/
//