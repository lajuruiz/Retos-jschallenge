a =2;
var a;
console.log(a);

//nota Es importante mencionar que el JavaScript solo utiliza Hoisting en declaraciones y no en inicializaciones. Por lo que si se intenta usar una variable que es definida e inicializada después de usarla, el valor de ésta será 'Undefined'.

//ejemplo 2

console.log(a)
var a=2;


//ejemplo 3 
function nameOfDog(name) {
     console.log(name); 
    }

nameOfDog("Elmo"); 

//otra forma 

nameOfDog("Elmo"); 
function nameOfDog(name) {
    console.log(name); 
   }