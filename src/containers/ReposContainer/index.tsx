import * as React from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import { Container, Header, Centered } from './styles'
import { Repo } from '../../components/Repo'

interface Props {
  repos: ReposState
}
const mapStateToProps: (state: AppState) => Props = state => ({
  repos: state.repos,
})

export const ReposContainerComponent: React.FC<Props> = ({ repos: { fetching, repos, reposError } }) =>
  fetching ? (
    <Centered>
      <ReactLoading type="bars" color="#000000" />
    </Centered>
  ) : reposError ? (
    <Centered>
      <span>{reposError}</span>
    </Centered>
  ) : (
    <>
      <Header>Most popular repos:</Header>
      <Container>
        {repos.map(repo => (
          <Repo repo={repo} />
        ))}
      </Container>
    </>
  )

export const ReposContainer = connect(
  mapStateToProps,
  null
)(ReposContainerComponent)
