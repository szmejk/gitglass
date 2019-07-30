import * as React from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import { v4 as uuid } from 'uuid'
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
          <Repo key={uuid()} repo={repo} />
        ))}
      </Container>
    </>
  )

export const ReposContainer = connect(
  mapStateToProps,
  null
)(ReposContainerComponent)
