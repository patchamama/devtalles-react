import { useCounter, useFetch } from '../hooks'
import { Quote, LoadingQuote } from '../03-examples'

export const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  )
  //   console.log(counter, `https://rickandmortyapi.com/api/character/${counter}`)
  //   console.log({ data, isLoading, hasError })

  const { name, image, species } = !!data && data

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />
      <div>{/* <pre>{JSON.stringify(data, null, 3)}</pre> */}</div>
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote name={name} image={image} species={species} />
      )}

      {/* {hasError && (
        <div className='alert alert-danger text-center'>
          <p>{hasError.message}</p>
        </div>
      )} */}
      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  )
}
