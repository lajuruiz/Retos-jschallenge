//funcion scope local 
// ejemplo funciona 
const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits();

// genera error ya que no esta dentro del scope local 
/// genera esta respuesta ReferenceError: fruit is not defined
const fruits = () => {
    var fruit = "apple";
}

fruits();
console.log(fruit);


// ejemplo  2

const anotherFunction = () => {
    var x=1;
    var x=2;
    let y=1;
    y=2;
    console.log(x);
    console.log(y);
}

anotherFunction();
// si dejamos la palabra  reservada let en y=1 y y=2 nos genera un error
//nota: SyntaxError: Identifier 'y' has already been declared
// si lo dejamos sin la palabra reservada si se puede re asignar y funciona 

//NOTA IMPORTANTE ///
Reasignar:
let a = 1;
a = 2 // correcto

Redeclarar:
let a = 1;
let a = 2; //incorrecto

//var se puede tanto reasignar como redeclarar, y const no se puede ninguna de las dos