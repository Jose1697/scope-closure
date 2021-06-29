//SCOPE GLOBAL
var hello = "Hello";
var hello = "Hello +"
let world = "Hello world"
const helloWorld = "Hello world!"
//Con let y const NO se puede reasignar el valor

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


//Mala Practica de crear variables globales
const helloWorld = ()  => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction()
console.log(globalVar);
