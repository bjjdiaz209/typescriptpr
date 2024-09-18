
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    }
];

const findHeroeById = (id : number) =>{
    
 return   heroes.find((heroe) => heroe.id === id);
}

const hero = findHeroeById(3);
//console.log(hero);
console.log(hero?.name ?? 'Heroe no encontrado');