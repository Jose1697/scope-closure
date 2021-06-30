//
const fruits = () => {
    var fruit = 'apple'
    console.log(fruit); 
}

fruits()
console.log(fruit); //Error, no se puede acceder
//

//
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction()
//Recomendacion: Utilizar let y const. Ya que var se puede reasignar y puede ocasionar problemas
//

