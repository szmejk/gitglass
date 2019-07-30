import * as React from 'react'
import { SearchBarContainer } from '../../containers/SearchBarContainer'
import { CardContainer } from '../../containers/CardContainer'
import { Container, Header } from './styles'

export const MainScreen = () => (
  <Container>
    <Header>
      <b>Git</b>Glass
    </Header>
    <SearchBarContainer />
    <CardContainer />
  </Container>
)
