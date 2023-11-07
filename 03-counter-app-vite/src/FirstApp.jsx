//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057299-proptypes

import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle, name }) => {
  //   if (!title) {
  //     throw new Error('El title no existe')
  //   }

  return (
    <>
      <h1 data-testid='test-title'> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtitulo',
  // title: 'Hola, Soy Goku',
}

export default FirstApp
