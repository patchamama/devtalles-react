interface Props {
  title: string
  searches: string[]
  onLabelClick: (term: string) => void
}

export const PreviousSearches = ({ title, searches, onLabelClick }: Props) => {
  return (
    <div className='previous-searches'>
      <h2>{title}</h2>
      <ul className='previous-searches-list'>
        {searches.map((item) => (
          <li key={item} onClick={() => onLabelClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
