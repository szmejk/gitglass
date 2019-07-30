import * as React from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import { Card } from '../../components/Card'
import { Container, Error } from './styles'

interface Props {
  user: UserState
}

const mapStateToProps: (state: AppState) => Props = state => ({
  user: state.user,
})

export const CardContainerComponent: React.FC<Props> = ({ user: { user, userError, fetching } }) =>
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
      <Card user={user} />
    ))
  )

export const CardContainer = connect(
  mapStateToProps,
  null
)(CardContainerComponent)
