import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas de 08-imp-exp', () => {
  test('getHeroeById debe de retornar un héroe por ID', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe de retornar underfined si no existe el ID', () => {
    const id = 100
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()
    //   expect(hero).toBe(undefined)
  })

  test('getHeroesByOwner debe de retornar 3 héroes de DC', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)
    console.log(heroes)

    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ])
  })

  test('getHeroesByOwner debe de retornar 2 héroes de Marvel', () => {
    const owner = 'Marvel'
    const heros = getHeroesByOwner(owner)
    console.log(heros)
    expect(heros.length).toBe(2)
    expect(heros).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })
})
