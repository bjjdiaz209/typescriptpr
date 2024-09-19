import { findHeroeById } from "./services/hero.service";





const hero = findHeroeById(1);
//console.log(hero);
console.log(hero?.name ?? 'Heroe no encontrado');