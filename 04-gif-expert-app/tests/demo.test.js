describe('Name of the group', () => {
  test('should be equal', () => {
    const message = 'Hello World'
    const message2 = `Hello World`

    expect(message).toBe(message2)
  })
})
