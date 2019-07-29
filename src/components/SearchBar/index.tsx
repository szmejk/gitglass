import * as React from 'react'

interface Props {
  onSubmit: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  input: string
}

export const SearchBar: React.FC<Props> = ({ onChange, onSubmit, input }) => (
  <div>
    <input value={input} onChange={onChange}></input>
    <button onClick={onSubmit}>szukaj</button>
  </div>
)
