import * as React from 'react'
import { SearchBar } from '../../components/SearchBar'

interface Props {
  onSubmit: (name: string) => void
}

export const SearchBarContainer: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = React.useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  return (
    <div>
      <SearchBar input={input} onSubmit={() => onSubmit(input)} onChange={onChange}></SearchBar>
    </div>
  )
}
