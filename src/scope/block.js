//
const fruits = () => {
    if(true){
        var fruits1 = 'apple'; //Solo el var se puede acceder fuera del bloque
        let fruits2 = 'banana'; //el let y const NO se puede acceder fuera del bloque
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    
}
fruits();
//var : ambito de funciom
//let, const: ambito de bloque
//

//
let x = 1  //global
{
    let x = 2;  //local
    console.log(x);
}
console.log(x);
//

//
var x = 1  //global
{
    var x = 2;  //el x se reasigna
    console.log(x);
}
console.log(x);
//

//
    const anotherFunction = () => {
        for (let i = 0; i<10; i++){ //utilizar let y no var
            setTimeout(() => { console.log(i);}, 1000)
        }
    }

    anotherFunction()
//