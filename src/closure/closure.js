// vamos a hacer una alcancia

//funcion 
//Ejemplo 1

const moneyBox=(coins) =>{
    var saveCoins=0;
    saveCoins += coins
    console.log(`moneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

/// estructura de un closure 

const moneyBox=() =>{
    var saveCoins=0;
    const countCoins=(coins) =>{
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox=moneyBox();

myMoneyBox(6);

myMoneyBox(6);

myMoneyBox(18);




/// ejemplo raro xD

const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3