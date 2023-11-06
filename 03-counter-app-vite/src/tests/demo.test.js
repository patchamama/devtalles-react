describe('Pruebas de <DemoComponent/>', () => {
  test('Esta prueba no debe de fallar', () => {
    //1. inicialización
    const message1 = 'Hola mundo'

    //2. estímulo
    const message2 = message1.trim()

    //3. observar el comportamiento esperado
    expect(message1).toBe(message2)
  })
})
