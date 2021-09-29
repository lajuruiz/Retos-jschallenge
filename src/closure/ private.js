// como crear variables privadas con closures

const person= () => {
    // la arrow function person es privada 
    var saveName="name";
    return {
        //getname es una funcion
        getName:() =>{
            return saveName;
        },
         //setName es un metodo
        setName: (name) =>{
            saveName=name;
        },
    };
};

newPerson=person();
console.log(newPerson.getName());
newPerson.setName("laura")
console.log(newPerson.getName());

//NOTA
//Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

