import * as React from 'react'
import { SearchBar } from '../../components/SearchBar'

interface Props {
  onSubmit: (name: string) => void
}

export const SearchBarContainer: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = React.useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
  const onEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onSubmit(input)

  return (
    <SearchBar
      input={input}
      onSubmit={() => onSubmit(input)}
      onKeyDown={onEnterPressed}
      onChange={onChange}></SearchBar>
  )
}
