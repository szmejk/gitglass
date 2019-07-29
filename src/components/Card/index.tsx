import * as React from 'react'
import { ReposContainer } from '../../containers/ReposContainer'
import { Container, UserDataSection, Avatar, VerticalData, Name, Bio } from './styles'
interface Props {
  user: User
  repos: ReposState
}

export const Card: React.FC<Props> = ({ user: { name, avatarUrl, bio }, repos }) => (
  <Container>
    <UserDataSection>
      <Avatar src={avatarUrl} alt="Users avatar" />
      <VerticalData>
        <Name>{name}</Name>
        {bio && <Bio>{bio}</Bio>}
        <ReposContainer repos={repos} />
      </VerticalData>
    </UserDataSection>
  </Container>
)
