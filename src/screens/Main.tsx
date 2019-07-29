import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { userSearchRequest } from '../store/actions/user'
import { SearchBarContainer } from '../containers/SearchBarContainer'
import { CardContainer } from '../containers/CardContainer'
type StateProps = {
  user: UserState
  repos: ReposState
}

type DispatchProps = {
  searchUser: (name: string) => void
}

const mapStateToProps: (state: AppState) => StateProps = state => ({
  user: state.user,
  repos: state.repos,
})

const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({
  searchUser: (name: string) => {
    dispatch(userSearchRequest(name))
  },
})

const Main: React.FC<StateProps & DispatchProps> = ({ user, repos, searchUser }) => (
  <>
    <h1> GitGlass </h1>
    <SearchBarContainer onSubmit={searchUser} />
    <CardContainer user={user} repos={repos} />
  </>
)

export const MainScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
