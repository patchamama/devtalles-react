import { types } from '../../../src/auth/types/types'

describe('Pruebas en "Types.js"', () => {
  test('debe de retornar  estos types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    })
  })
})
