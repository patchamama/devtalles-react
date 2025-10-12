import { useEffect, useState, type KeyboardEvent } from 'react'
interface Props {
  placeHolder?: string
  onQuery: (query: string) => void
}

export const SearchBar = ({ placeHolder = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      // if (query) onQuery(query)
    }, 700)

    return () => clearTimeout(timeOutId)
  }, [query, onQuery])

  const handleSearch = () => {
    onQuery(query)
    // setQuery('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
      onQuery(query)
    }
  }

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder={placeHolder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
