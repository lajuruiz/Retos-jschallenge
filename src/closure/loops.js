
// en este caso si usamos la palabra reservada var el ciclo va a arrojar el 
//ultimo valor repetida las 10 veces 
// pero con let iterara por cadaa valor desde 0 a 9 
const anotherFunction=() =>{
    for (let i=0; i<10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();

//nota: Te lo resumo así nomás: En un loop nunca ocupes var, siempre utiliza let para valores que irán cambiando dentro de la ejecución del sco
