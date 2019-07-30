import * as React from 'react'
import { Container, Input, Button } from './styles'

interface Props {
  onSubmit: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  input: string
}

export const SearchBar: React.FC<Props> = ({ onKeyDown, onChange, onSubmit, input }) => {
  return (
    <Container>
      <Input value={input} onChange={onChange} onKeyDown={onKeyDown} placeholder="Enter name e.g. gaearon"></Input>
      <Button onClick={onSubmit}>🔎</Button>
    </Container>
  )
}
