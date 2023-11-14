import { render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('Pruebas en <TodoItem />>', () => {
  const todo = {
    id: 1,
    desc: 'Piedra del Alma',
    done: false,
  }
  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('debe de mostrar el TODO pendiente de completar', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    )

    const spamElement = screen.getByLabelText('span')
    expect(spamElement.className).toContain('align-self-center')

    screen.debug()
  })
})
