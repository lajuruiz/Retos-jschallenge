//NOTA*/// 
//pluggin code runner para ejecutar codigo aqui mismo en visual studio code y no en la consola 

// variable que puede ser usada ya que no se encuentra dentro de ninguna funcion....
// variable asignada de forma global 
var hello="hello";
let world="hello world";
const helloWorld= "hello world";

const anotherFunction= () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld)
}

anotherFunction();

////MALA PRACTICA//
//Con var podemos re-asignar una variable pero es una mala práctica.
// ejecutar una variable global dentro de una funcion......
// no se usa la palabra reservada var
//Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.

const helloWorld= () =>{
    globalVar= "iam global"
}
helloWorld();
console.log(globalVar);

/////La doble asignación de una variable también es una mala práctica.////

const anotherFunction= ()=>{
    var localVar=globalVar="i am global";
}
anotherFunction()
console.log(globalVar);
