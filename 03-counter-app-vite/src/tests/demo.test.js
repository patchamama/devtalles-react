test('Esta prueba no debe de fallar', () => {
  if (0 === 1) {
    throw new Error('No puede dividir por cero')
  }
})
