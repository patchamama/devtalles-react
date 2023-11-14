import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodos } from '../../src/08-useReducer/hooks/useTodos'

jest.mock('../../src/08-useReducer/hooks/useTodos')

describe('Pruebas en <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        pos: 1,
        description: 'Todo #1',
        done: false,
      },
      {
        id: 2,
        pos: 2,
        description: 'Todo #2',
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
  })

  test('debe de mostrarse el componente correctamente', () => {
    render(<TodoApp />)
    // screen.debug()

    expect(screen.getByText('1. Todo #1')).toBeTruthy()
    expect(screen.getByText('2. Todo #2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
