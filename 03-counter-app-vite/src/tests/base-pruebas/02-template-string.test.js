import { getSaludo } from '../../base-pruebas/02-template-string'

describe('Pruebas en 02-teplate-string.js', () => {
  test('getSaludo de retornar "Hola Fernando"', () => {
    const name = 'Fernando'
    const message = getSaludo(name)
    expect(message).toBe(`Hola ${name}`)
  })
})
