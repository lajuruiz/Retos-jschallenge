var a= "hello";

function hello () {
    let b= "hello world";
    const c="hello world";
    if (true){
        let d= "hello world";
        debugger
    }
}

hello();




// ejemplo 2
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
