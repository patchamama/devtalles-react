//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057299-proptypes

import PropTypes from 'prop-types'

export const FirstApp = ({ title = 'Hola, Soy Fernando', subTitle }) => {
  //   if (!title) {
  //     throw new Error('El title no existe')
  //   }

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle + 1}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

export default FirstApp
