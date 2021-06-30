//obtener o asignar valor a la variable, nunca desde afuera
const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name
        }
    }
};

newPerson = person();
console.log(newPerson.getName());

newPerson.setName('Joseee')
console.log(newPerson.getName());