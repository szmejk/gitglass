import * as React from 'react'
import { Container, Input, Button } from './styles'

interface Props {
  onSubmit: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  input: string
}

export const SearchBar: React.FC<Props> = ({ onChange, onSubmit, input }) => (
  <Container>
    <Input value={input} onChange={onChange}></Input>
    <Button onClick={onSubmit}>🔎</Button>
  </Container>
)
