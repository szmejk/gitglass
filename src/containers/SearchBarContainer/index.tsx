import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { userSearchRequest } from '../../store/actions/user'
import { SearchBar } from '../../components/SearchBar'

interface Props {
  onSubmit: (name: string) => void
}

const mapDispatchToProps: (dispatch: Dispatch) => Props = dispatch => ({
  onSubmit: (name: string) => {
    dispatch(userSearchRequest(name))
  },
})

export const SearchBarContainerComponent: React.FC<Props> = ({ onSubmit }) => {
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

export const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBarContainerComponent)
