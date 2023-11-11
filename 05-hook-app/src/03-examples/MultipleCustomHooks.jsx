import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://rickandmortyapi.com/api/character/1'
  )
  //   console.log({ data, isLoading, hasError })

  const { name, image, species } = !!data && data

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />
      <div>{/* <pre>{JSON.stringify(data, null, 3)}</pre> */}</div>
      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <img src={image} alt={name} />
          <p className='mb-1'>{name}</p>
          <footer className='blockquote-footer'>{species}</footer>
        </blockquote>
      )}
      {hasError && (
        <div className='alert alert-danger text-center'>
          <p>{hasError.message}</p>
        </div>
      )}
      <button className='btn btn-primary'>Next quote</button>
    </>
  )
}
