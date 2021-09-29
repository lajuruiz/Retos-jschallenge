//SCOPE LOCAL//
//NOTA:No olvidar llamar a la funcion.... 

const helloWorld=() =>{
    const hello= "hello world";
    console.log(hello);
};
helloWorld();
// se genera un error ya que la variable es local no global 
console.log(hello);

//ejercicio 2 ///

var scope="i am global"

// ambito lexico// 
const functionScope = ()=> {
    var scope= "i am just a local";
    const func = ()=>{
        return scope   
    }
    console.log(func())
};

functionScope();
