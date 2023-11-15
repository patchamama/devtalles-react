import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
  const { id } = useParams()
  console.log(id)

  const hero = getHeroById(id)
  console.log(hero)

  if (!hero) {
    // return <>404 - not found!</>
    return <Navigate to='/marvel' />
  }

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  )
}
