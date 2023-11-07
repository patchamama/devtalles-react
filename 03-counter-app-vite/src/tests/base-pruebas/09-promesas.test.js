import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
    //función done() que indica a jest cuando termina el then()
    const id = 1
    getHeroeByIdAsync(id).then((hero) => {
      console.log(hero)
      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
      done() // le indica a jest que se ha terminado de ejecutar el proceso...
    })
  })

  test('getHeroeByIdAsync debe de obtener un error sí héroe no existe', (done) => {
    //función done() que indica a jest cuando termina el then()
    const id = 100
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy()
        done()
      })
      .catch((error) => {
        expect(error).toBe('No se pudo encontrar el héroe' + id)

        done() // le indica a jest que se ha terminado de ejecutar el proceso...
      })
  })
})
