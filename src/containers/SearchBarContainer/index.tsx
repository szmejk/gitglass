import * as React from 'react'
import { SearchBar } from '../../components/SearchBar'


interface Props {
  onSubmit: (name: string) => void
}

export const SearchBarContainer: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = React.useState('')
  //const [isValid, setIsVaild] = React.useState(false)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  return <SearchBar input={input} onSubmit={() => onSubmit(input)} onChange={onChange}></SearchBar>
}
