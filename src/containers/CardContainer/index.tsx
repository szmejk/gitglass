import * as React from 'react'
import ReactLoading from 'react-loading'
import { Card } from '../../components/Card'
import { Container, Error } from './styles'

interface Props {
  user: UserState
  repos: ReposState
}

export const CardContainer: React.FC<Props> = ({ user: { user, userError, fetching }, repos }) =>
  userError ? (
    <Container>
      <Error>{userError}</Error>
    </Container>
  ) : (
    user &&
    (fetching ? (
      <Container>
        <ReactLoading type="spinningBubbles" color="#ffffff" />
      </Container>
    ) : (
      <Card user={user} repos={repos} />
    ))
  )
