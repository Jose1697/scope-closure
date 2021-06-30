//¿que es un closure? Combinacion de una funcion y el ambito lexico en la cual ha sido declarado dicha funcion
//Closure: recuerda el ambito en el que ha sido creado

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5); //5
moneyBox(10); //10
//No esta guardando los elementos, no retorna el valor de 15. No esta generando un closure

//
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox()
myMoneyBox(4); //4
myMoneyBox(6); //10
myMoneyBox(10); //20

//