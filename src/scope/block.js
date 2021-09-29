// var esta dentro de la funcion igual puedo acceder a ella, pero si cambio la 
//palabra reservada var por let y const no va a funcionar ya que se esta
//llamando por fuera de donde se esta definiendo.....


const fruits=() =>{
    if(true){
        var fruits1= "apple";
        let fruits2= "banana";
        const fruits3= "kiwi";
    }

console.log(fruits1);
console.log(fruits2);
console.log(fruits3);
};

fruits() ;

// ejemplo 2 
// si se ejecutan ya que estan definidas y son llamadas en el mismo scope (local)
const fruits=() =>{
    if(true){
        var fruits1= "apple";
        let fruits2= "banana";
        const fruits3= "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
console.log(fruits1);
};

fruits() ;


// Ejemplo 3 
// se ejecuta la local como x=2 y luego la global como x=1
let x=1;
{
    let x=2;
    console.log(x)
}
console.log(x);

// mismo ejemplo anterior pero con var 
// se reasigna el valor de var como x=2

var x=1;
{
  var x=2;
    console.log(x)
}
console.log(x);

//Ejemplo 

// ejemplo con un ciclo for
// var se puede sobreescribir 

const anotherFunction=() =>{
    for (var i=0; i<10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();

/// con let 
// let no se puede sobreescribir por eso se muestran los valores desde 0a9

const anotherFunction=() =>{
    for (let i=0; i<10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();


// ejemplo ciclo for con function normal 
// forma sin el arrow function 

function functionName() {
	// Para este ejemplo declarare que el for solo de 3 "vueltas", es decir la condición sera: i < 3.
	for(var i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i);
		}, 1000);
	}
	
	console.log('El valor final de "i" es: ' + i);
}
functionName();