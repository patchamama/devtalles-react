import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo todo',
      done: false,
    },
  ]
  test('debe de retornar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe de agregar un TODO', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Demo todo 2',
        done: false,
      },
    }

    const newState = todoReducer(initialState, action)

    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })
})
