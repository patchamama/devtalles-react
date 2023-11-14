import { fireEvent, render, screen } from '@testing-library/react'
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
        {...todo}
        pos={1}
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
    expect(spamElement.className).not.toContain('text-decoration-line-through')

    // screen.debug()
  })

  test('debe de mostrar el TODO completado', () => {
    todo.done = true
    render(
      <TodoItem
        {...todo}
        pos={1}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )
    screen.debug()
    const spamElement = screen.getByLabelText('span')
    expect(spamElement.className).toContain('text-decoration-line-through')
  })

  test('span debe de llarmar la funcion onToggleTodo', () => {
    render(
      <TodoItem
        {...todo}
        pos={1}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )
    const spamElement = screen.getByLabelText('span')
    spamElement.click()
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('button debe de llarmar la funcion onDeleteTodo', () => {
    render(
      <TodoItem
        {...todo}
        pos={1}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )
    const buttonElement = screen.getByRole('button')
    // buttonElement.click()
    //   expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

    fireEvent.click(buttonElement)
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
