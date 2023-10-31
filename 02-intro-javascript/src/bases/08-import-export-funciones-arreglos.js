// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import heroes, { owner } from './data/Heroes'

const getHeroeById = (id) => heroes.find((elem) => elem.id === id)

console.log(getHeroeById(2))

const getHeroeByOwner = (owner) => heroes.filter((elem) => elem.owner === owner)

console.table(getHeroeByOwner('DC'))
